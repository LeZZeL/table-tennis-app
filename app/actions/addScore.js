export default function addScoreAction(context, payload, callback) {
  context.dispatch('ADD_SCORE');
  callback();
}
