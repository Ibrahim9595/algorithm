class Stack {
  constructor() {
    this.store = [];
  }

  push(x) {
    this.store.push(x);
  }

  pop() {
    return this.store.pop();
  }

  isEmpty() {
    return this.store.length === 0;
  }

  peek() {
    return this.store[this.store.length - 1];
  }

  size() {
    return this.store.length;
  }
}

class StackOfPlates {
  constructor(threshold) {
    this.threshold = threshold;
    this.length = 0;
    this.stacks = [];
  }

  getLast() {
    return this.stacks.length === 0
      ? null
      : this.stacks[this.stacks.length - 1];
  }

  push(x) {
    if (this.getLast() === null || this.getLast().size() === this.threshold) {
      this.stacks.push(new Stack());
    }
    this.getLast().push(x);
    this.length++;
  }

  pop() {
    if (this.isEmpty()) throw new Error("Stack is Empty");

    let ret = this.getLast().pop();
    if (this.getLast().isEmpty()) {
      this.stacks.pop();
    }
    this.length--;

    return ret;
  }

  popAt(index) {
    if (index < 0 || index > this.stacks.length)
      throw new Error("Index out of bound");

    return this.stacks[index].pop();
  }

  peek() {
    return this.getLast().peek();
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

class MyQueue {
  constructor() {
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
  }

  enqueue(x) {
    this.enqueueStack.push(x);
  }

  dequeue() {
    this.moveEnqueue();
    return this.dequeueStack.pop();
  }

  size() {
    return this.dequeueStack.size() + this.enqueueStack.size();
  }

  peek() {
    this.moveEnqueue();

    return this.dequeueStack.peek();
  }

  moveEnqueue() {
    if (this.dequeueStack.isEmpty()) {
      while (!this.enqueueStack.isEmpty()) {
        this.dequeueStack.push(this.enqueueStack.pop());
      }
    }
  }
}

/**
 * sort the stack
 * @param {Stack} s
 * @returns {Stack}
 */
const sortStack = (s) => {
  // r => replacement, t => temporary
  const r = new Stack();
  let t = null;

  while (!s.isEmpty()) {
    t = s.pop();
    while (!r.isEmpty() && t < r.peek()) s.push(r.pop());
    r.push(t);
  }

  while (!r.isEmpty()) s.push(r.pop());
};
