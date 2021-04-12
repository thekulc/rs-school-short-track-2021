/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function getFlatArray(list, k, res) {
  if (list.value !== k) {
    res.push(list.value);
  }
  if (list.next) {
    return getFlatArray(list.next, k, res);
  }
  return res;
}

function List(value) {
  this.value = value;
  this.next = null;
}

function removeKFromList(l, k) {
  const res = [];
  const arr = getFlatArray(l, k, res);
  const r = arr.reverse().reduce((a, c) => {
    if (a) {
      const list = new List(c);
      list.next = a;
      return list;
    }
    return new List(c);
  }, null);
  return r;
}

module.exports = removeKFromList;
