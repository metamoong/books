/*
3.2 기본적인 스택 자료구조에서 최솟값을 반환하는 min 함수 추가하기


방법1 : min값 하나만 관리하기 
-> pop 연산 시 min값을 pop하게 되면 새로운 min을 찾아야 하기 때문에 O(1)시간에 수행할 수 없음 
(push연산은 왜 O(1)시간에 수행할 수 없지????)

방법2 : 스택의 각 상태마다 최솟값 기록하기
-> 스택이 커질수록, 각 원소마다 min을 기록해야 하므로 공간이 많이 필요

방법3 : 최솟값을 위한 스택을 하나 더 만들기

*/

const Stack = require("../stack");

class StackWithMin extends Stack {
  constructor() {
    super();
    this.minStack = new Stack();
  }

  push(element) {
    if (element <= this.min()) {
      this.minStack.push(element);
    }
    this.items.push(element);
  }

  pop() {
    const value = this.items.pop();
    if (value === this.min()) this.minStack.pop();
    return value;
  }

  min() {
    if (this.isEmpty()) return Infinity;
    else return this.minStack.peek();
  }
}

const stack = new StackWithMin();
stack.push(5);
stack.push(4);
stack.push(38);
stack.push(23);

console.log(stack.min());
console.log(stack.pop());
