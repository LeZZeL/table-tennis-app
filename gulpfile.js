const gulp = require('gulp');
const server = require('gulp-server-livereload');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

const config = {
  js: {
    src: './app/main.jsx',
    watch: './app/**/*',
    outputDir: './build/',
    outputFile: 'build.js',
  },
};

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

// watch for jsx changes
gulp.watch(config.js.watch, ['browserify']);

// create webserver
gulp.task('webserver', function() {
  gulp.src(config.js.outputDir)
    .pipe(server({
      livereload: true,
    }));
});


gulp.task('default', ['browserify', 'webserver']);