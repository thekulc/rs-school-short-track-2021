const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    if (!this.queue) return 0;
    return this.getArray(this.queue, []).length;
  }

  enqueue(element) {
    this.queue = this.add(element);
    return element;
  }

  getArray(list, res) {
    if (!list) return [];
    if (list.next) return this.getArray(list.next, res);
    return res;
  }

  getList(arr) {
    const r = arr.reverse().reduce((a, c) => {
      if (a) {
        const list = new ListNode(c);
        list.next = a;
        return list;
      }
      return new ListNode(c);
    }, null);
    return r;
  }

  add(element) {
    const res = [];
    const arr = this.getArray(this.queue, res);
    arr.push(element);
    return this.getList(arr);
  }

  dequeue() {
    const res = [];
    const rObj = this.getArray(this.queue, res).pop();
    console.log(this.queue);
    res.pop();
    this.queue = this.getList(res);
    return rObj;
  }
}

module.exports = Queue;
