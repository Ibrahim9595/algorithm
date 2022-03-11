// Heap
class MinHeap {
  constructor() {
    this._store = [];
  }

  get _size() {
    return this._store.length;
  }

  _getParentIndex(index) {
    const parentIndex = parseInt((index - 1) / 2);
    return parentIndex >= 0 ? parentIndex : null;
  }

  _getLeftChildIndex(index) {
    const childIndex = 2 * index + 1;
    return childIndex < this._size ? childIndex : null;
  }

  _getRightChildIndex(index) {
    const childIndex = 2 * index + 2;
    return childIndex < this._size ? childIndex : null;
  }

  _swap(index1, index2) {
    const t = this._store[index1];
    this._store[index1] = this._store[index2];
    this._store[index2] = t;
  }

  _siftUp(index) {
    const parentIndex = this._getParentIndex(index);

    if (parentIndex !== null && this._store[parentIndex] > this._store[index]) {
      this._swap(parentIndex, index);
      this._siftUp(parentIndex);
    }
  }

  _siftDown(index) {
    const leftIndex = this._getLeftChildIndex(index);
    const rightIndex = this._getRightChildIndex(index);

    if (leftIndex === null && rightIndex === null) return;

    const minIndex =
      leftIndex === null
        ? rightIndex
        : rightIndex === null
        ? leftIndex
        : this._store[leftIndex] > this._store[rightIndex]
        ? rightIndex
        : leftIndex;

    if (this._store[minIndex] < this._store[index]) {
      this._swap(index, minIndex);
      this._siftDown(minIndex);
    }
  }

  insert(x) {
    this._store.push(x);
    this._siftUp(this._size - 1);
  }

  peek() {
    return this._store[0];
  }

  getMin() {
    const t = this._store[0];
    this._swap(0, this._size - 1);
    this._store.pop();
    this._siftDown(0);
    return t;
  }
}

const h = new MinHeap();

while (1) {
  const die = Math.random() > 0.5;
  if (die || h._size === 0) {
    h.insert(Math.floor(Math.random() * 100));
  } else {
    const min = Math.min(...h._store);
    const ret = h.peek();

    if (min !== h.peek()) {
      console.log(h._store, ret, min);
      break;
    }

    h.getMin();
    console.log("SUCCESS");
  }
}
