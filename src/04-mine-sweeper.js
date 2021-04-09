/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function getAroundCount(x, y, arr) {
  let res = 0;
  if (arr[y][x] === true) return 1;
  for (let i = y - 1; i <= y + 1; i++) {
    for (let j = x - 1; j <= x + 1; j++) {
      if (typeof arr[i] !== 'undefined' && typeof arr[i][j] !== 'undefined' && arr[i][j] === true) {
        res += 1;
      }
    }
  }
  return res;
}

function minesweeper(matrix) {
  return matrix.map((row, i) => row.map((el, j) => getAroundCount(j, i, matrix)));
}

module.exports = minesweeper;
