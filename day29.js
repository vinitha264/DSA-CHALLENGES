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
  // Get the length of the linked list
  getLength() {
    let length = 0;
    let current = this.head;
    while (current !== null) {
      length++;
      current = current.next;
    }
    return length;
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
  insertAtPosition(data, pos) {
    let length = this.getLength();
    if (pos < 1 || pos > length + 1) {
      console.log("Invalid Position");
      return;
    }
    if (pos === 1) {
      this.insertAtHead(data);
      return;
    }
    if (pos === length + 1) {
      this.insertAtTail(data);
      return;
    }
    let newNode = new Node(data);
    let current = this.head;
    let currentIndex = 1;
    while (currentIndex < pos - 1) {
      current = current.next;
      currentIndex++;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  // Delete at Position
  deleteAtPosition(pos) {
    let length = this.getLength();
    if (pos < 1 || pos > length) {
      console.log("Invalid Position");
      return;
    }
    if (pos === 1) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let currentIndex = 1;
    while (currentIndex < pos - 1) {
      current = current.next;
      currentIndex++;
    }
    current.next = current.next.next;
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
list.insertAtPosition(10, 1);
list.printList();

list.insertAtPosition(20, 2);
list.printList();

list.insertAtPosition(30, 2);
list.printList();

list.deleteAtPosition(1);
list.printList();


