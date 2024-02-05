/*
3.4 스택 2개로 큐만들기

*/

const Stack = require("../stack");

class MyQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value) {
    this.stack1.push(value);
  }
  dequeue() {
    if (this.stack2.size() > 0) return this.stack2.pop();

    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
  size() {
    return this.stack1.size() + this.stack2.size();
  }
}

const q = new MyQueue();
q.enqueue(1);
q.enqueue(2);
console.log(q.dequeue());
q.enqueue(3);
q.enqueue(4);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
