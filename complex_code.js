/* complex_code.js */

// This code is a complex implementation of a priority queue data structure in JavaScript.
// It supports various operations such as insertion, deletion, peeking, and checking if the queue is empty.

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    let found = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (newNode.priority < this.queue[i].priority) {
        this.queue.splice(i, 0, newNode);
        found = true;
        break;
      }
    }

    if (!found) {
      this.queue.push(newNode);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue.shift().value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue[0].value;
  }

  print() {
    console.log("Priority Queue:");
    for (let i = 0; i < this.queue.length; i++) {
      console.log(
        `Value: ${this.queue[i].value}, Priority: ${this.queue[i].priority}`
      );
    }
  }
}

// Usage example

// Create a new priority queue
const priorityQueue = new PriorityQueue();

// Enqueue elements with priorities
priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

// Print the current priority queue
priorityQueue.print();

// Peek the top element
console.log("Peeked element:", priorityQueue.peek());

// Dequeue elements from the priority queue
console.log("Dequeued element:", priorityQueue.dequeue());
console.log("Dequeued element:", priorityQueue.dequeue());

// Print the updated priority queue
priorityQueue.print();
