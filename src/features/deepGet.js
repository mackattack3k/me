// https://www.30secondsofcode.org/snippet/deepGet
const deepGet = (obj, keys) =>
  keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), obj);

export default deepGet;
