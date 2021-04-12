/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length <= 0) return '';
  let arrI = 0;
  const res = [];
  res.push([str[0], 1]);
  for (let i = 1; i < str.length; i++) {
    if (res[arrI][0] === str[i]) {
      res[arrI][1] += 1;
    } else {
      arrI += 1;
      res.push([str[i], 1]);
    }
  }
  return res.reduce((a, c) => {
    if (c[1] === 1) {
      return a + c[0];
    }
    return a + c[1] + c[0];
  }, '');
}

module.exports = encodeLine;
