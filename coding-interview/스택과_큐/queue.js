/* shift 메서드를 사용한 큐 */
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  peek() {
    return this.items[0];
  }
}

/* shift 메서드 없는 큐 */
class Queue2 {
  constructor() {
    this.items = [];
    this.front = 0; // 큐의 앞
    this.rear = 0; // 큐의 끝
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const removedElement = this.items[this.front];
    this.front++;
    return removedElement;
  }

  isEmpty() {
    return this.rear === this.front;
  }

  size() {
    return this.rear - this.front;
  }
}

module.exports = Queue;
