/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = 'aabcc' and s2 = 'adcaa', the output should be 3
 * Strings have 3 common characters - 2 'a's and 1 'c'.
 */
function getCommonCharacterCount(s1, s2) {
  const resList = {};
  let res = 0;
  s1.split('').forEach((s) => {
    resList[s] = [(s1.match(new RegExp(s, 'g')) || []).length, (s2.match(new RegExp(s, 'g')) || []).length];
  });
  s2.split('').forEach((s) => {
    resList[s] = [(s1.match(new RegExp(s, 'g')) || []).length, (s2.match(new RegExp(s, 'g')) || []).length];
  });
  Object.keys(resList).forEach((c) => {
    if ((resList[c][0] + resList[c][1]) > 1) res += Math.min(...resList[c]);
  });
  return res;
}

module.exports = getCommonCharacterCount;
