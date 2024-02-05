/* 

배열 1개로 스택 3개 구현

1. 고정 크기 할당
- 배열을 같은 크기의 세 부분으로 나누어 각각의 스택이 그 크기 내에서만 사용되도록 한다

2. 유연한 공간 분할
- 한 스택이 최초에 설정한 용량 이상으로 커지면, 가능한 만큼 용량을 늘려주고 필요에 따라 원소들을 이동시킴


*/

class MultiStack {
  constructor(stackSize) {
    this.numberOfStacks = 3;
    this.stackCapacity = stackSize;
    this.values = new Array(stackSize * this.numberOfStacks).fill(0);
    this.sizes = new Array(this.numberOfStacks).fill(0);
  }

  push(stackNum, value) {
    if (this.isFull(stackNum)) {
      throw new Error("Stack is full");
    }

    this.sizes[stackNum]++;
    this.values[this.indexOfTop(stackNum)] = value;
  }

  pop(stackNum) {
    if (this.isEmpty(stackNum)) {
      throw new Error("Stack is empty");
    }
    let topIndex = this.indexOfTop(stackNum);
    let value = this.values[topIndex];
    this.values[topIndex] = 0;
    this.sizes[stackNum]--;
    return value;
  }

  peek(stackNum) {
    if (this.isEmpty(stackNum)) {
      throw new Error("Stack is empty");
    }
    return this.values[this.indexOfTop(stackNum)];
  }

  isEmpty(stackNum) {
    return this.sizes[stackNum] === 0;
  }

  isFull(stackNum) {
    return this.sizes[stackNum] === this.stackCapacity;
  }

  indexOfTop(stackNum) {
    let offset = stackNum * this.stackCapacity;
    let size = this.sizes[stackNum];
    return offset + size - 1;
  }
}
