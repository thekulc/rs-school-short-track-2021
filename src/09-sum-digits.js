/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const sn = n.toString().split('').reduce((a, c) => parseInt(a, 10) + parseInt(c, 10), 0);
  if (sn.toString().length > 1) {
    return getSumOfDigits(sn);
  }
  return sn;
}

module.exports = getSumOfDigits;
