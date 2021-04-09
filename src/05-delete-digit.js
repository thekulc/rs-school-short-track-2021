/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const sn = n.toString();
  const an = sn.split('');
  let max = parseInt(an.slice(1, sn.length).join(''), 10);
  for (let i = 1; i < an.length; i++) {
    if (parseInt(an.slice(0, i).concat(an.slice(i + 1, an.length)).join(''), 10) > max) {
      max = parseInt(an.slice(0, i).concat(an.slice(i + 1, an.length)).join(''), 10);
    }
  }
  return max;
}

module.exports = deleteDigit;
