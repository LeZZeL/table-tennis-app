const gulp = require('gulp'),
      server = require('gulp-server-livereload'),
      browserify = require('browserify'),
      del = require('del'),
      runSequence = require('run-sequence'),
      source = require('vinyl-source-stream');

const config = {
  js: {
    src: './app/app.js',
    watch: './app/**/*',
    outputDir: './build/',
    outputFile: 'build.js',
    baseHtml: './app/index.html',
  },
};

// transform and bundle the js/jsx files into bundle.js
gulp.task('browserify', function() {
  return browserify(config.js.src)
    .transform('babelify', {presets: ["es2015", "react"]})
    .bundle()
    .on('error', onError)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/'));
});

function onError(error) {
  console.log(error.message);
  this.emit('end');
};

// copies the index.html to the build directory due to gitignore of build folder
gulp.task('copy-html', function() {
  gulp.src(config.js.baseHtml)
    .pipe(gulp.dest(config.js.outputDir));
});

// clean up the build folder before we start
gulp.task('clean-up-build-folder', function() {
  return del([config.js.outputDir]);
});

// run-sequence of the gulp tasks defined
gulp.task('build', function() {
  runSequence('clean-up-build-folder', ['copy-html', 'browserify'], 'webserver');
});

// watch for jsx changes
gulp.watch(config.js.watch, ['browserify']);

// create webserver
gulp.task('webserver', function() {
  gulp.src(config.js.outputDir)
    .pipe(server({
      livereload: true,
    }));
});

// gulp default task
gulp.task('default', ['build']);
