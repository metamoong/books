/*
3.3 특정 높이까지만 쌓을 수 있는 접시 무더기 구현하기

- 스택이 꽉 찬 경우 새로운 스택을 만든다
- pop후에 스택이 비면, 해당 스택을 제거한다

 */

const Stack = require("../stack");

class SetOfStacks {
  constructor(capacity) {
    this.stacks = [];
    this.capacity = capacity;
  }
  pop() {
    if (this.stacks.length === 0) {
      return null;
    }

    const value = this.stacks[this.stacks.length - 1].pop();
    if (this.stacks[this.stacks.length - 1].length === 0) this.stacks.pop();

    return value;
  }
  push(value) {
    if (
      this.stacks.length === 0 ||
      this.stacks[this.stacks.length - 1].length === this.capacity - 1
    ) {
      this.stacks.push(new Stack());
    }

    this.stacks[this.stacks.length - 1].push(value);
  }
}

const stack = new SetOfStacks(3);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop());
console.log(stack.pop());
