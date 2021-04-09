/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const ii = [];
  const idx = arr
    .map((el, i) => {
      if (el === -1) {
        ii.push(i);
      }
      return el;
    })
    .filter((el) => el !== -1)
    .sort((a, b) => a - b);
  ii.forEach((el) => idx.splice(el, 0, -1));
  return idx;
}

module.exports = sortByHeight;
