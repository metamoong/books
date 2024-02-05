/* 
3.6 enqueue, dequeueAny, dequeueDog, dequeueCat연산을 제공하는 자료구조 만들기

- 개와 고양이를 별도의 큐로 관리
- 동물이 언제 들어왔는지를 기록
*/
const Queue = require("../queue");

class AnimalQueue {
  constructor() {
    this.catQueue = new Queue();
    this.dogQueue = new Queue();
    this.cnt = 0;
  }
  enqueue(name, type) {
    if (type === "dog") this.dogQueue.enqueue({ name, order: this.cnt });
    else if (type === "cat") this.catQueue.enqueue({ name, order: this.cnt });

    this.cnt++;
  }
  dequeueAny() {
    if (this.catQueue.size() === 0 && this.dogQueue.size() === 0) return null;
    else if (this.catQueue.size() === 0) return this.dogQueue.dequeue();
    else if (this.dogQueue.size() === 0) return this.catQueue.dequeue();
    else {
      const dog = this.dogQueue.peek();
      const cat = this.catQueue.peek();
      if (dog.order < cat.order) return this.dogQueue.dequeue();
      else return this.catQueue.dequeue();
    }
  }
  dequeueDog() {
    return this.dogQueue.dequeue();
  }
  dequeueCat() {
    return this.catQueue.dequeue();
  }
}

const q = new AnimalQueue();
q.enqueue("뽀삐", "dog");
q.enqueue("몽실", "dog");
q.enqueue("고양2", "cat");
q.enqueue("고양3", "cat");
q.enqueue("고양4", "cat");

console.log(q.dequeueAny());
console.log(q.dequeueCat());
console.log(q.dequeueDog());
console.log(q.dequeueAny());
