class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

/* js 내장 메서드 없이 */
class Stack2 {
  constructor() {
    this.items = [];
    this.top = 0;
  }

  push(element) {
    this.items[this.top] = element;
    this.top++;
  }

  pop() {
    if (this.isEmpty()) return null;
    this.top--;
    const element = this.items[this.top];
    delete this.items[this.top];
    return element;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.top - 1];
  }

  isEmpty() {
    return this.top === 0;
  }

  size() {
    return this.top;
  }
}

module.exports = Stack;
