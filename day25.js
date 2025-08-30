class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at Head
  insertAtHead(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert at Tail
  insertAtTail(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Insert at Position
  insertAtPosition(data, position) {
    let newNode = new Node(data);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let currentIndex = 0;
    while (currentIndex < position - 1 && current.next !== null) {
      current = current.next;
      currentIndex++;
    }
    if (currentIndex !== position - 1) {
      console.log("Position out of bounds");
      return;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  // Print the list
  printList() {
    let current = this.head;
    let output = "";
    while (current !== null) {
      output += current.data + " -> ";
      current = current.next;
    }
    output += "null";
    console.log(output);
  }
}

let list = new LinkedList();
list.insertAtHead(10);
console.log("After inserting 10 at head:");
list.printList();

list.insertAtTail(20);
console.log("After inserting 20 at tail:");
list.printList();

list.insertAtPosition(15, 1);
console.log("After inserting 15 at position 1:");
list.printList();


