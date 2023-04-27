class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    // It will return the last element of the array
    return this.items[this.items.length - 1];

  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
export default Queue;