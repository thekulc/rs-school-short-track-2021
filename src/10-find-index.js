/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  let first = 0;
  let last = array.length - 1;
  let cur = -1;
  let isFound = false;
  let mid;

  while (isFound === false && first <= last) {
    mid = Math.floor((first + last) / 2);
    if (array[mid] === value) {
      isFound = true;
      cur = mid;
    } else if (array[mid] > value) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return cur;
}

module.exports = findIndex;
