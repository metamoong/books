/*
3.5 스택 정렬하기

- 하나의 스택을 더 사용
- 새로운 스택에 넣을 때 적절한 자리를 찾아 넣는다
*/

const Stack = require("../stack");

function sort(stack) {
  const tmp = new Stack();
  while (!stack.isEmpty()) {
    const element = stack.pop();

    // element 보다 위로 와야 하는 수들을 pop
    while (!tmp.isEmpty() && tmp.peek() > element) {
      stack.push(tmp.pop());
    }
    tmp.push(element);
  }

  while (!tmp.isEmpty()) {
    stack.push(tmp.pop());
  }
}

const stack = new Stack();

stack.push(4);
stack.push(5);
stack.push(1);
stack.push(6);
sort(stack);
