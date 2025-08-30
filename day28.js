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
  // Check if the roll number already exists
  isRollNumberExists(rollNumber) {
    let current = this.head;
    while (current !== null) {
      if (current.data === rollNumber) {
        return true;
      }
      current = current.next;
    }
    return false;
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
    if (this.isRollNumberExists(data)) {
      console.log("Duplicate Entry Not Allowed");
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
list.insertAtPosition(1, 1);
list.printList();

list.insertAtPosition(2, 2);
list.printList();

list.insertAtPosition(4, 3);
list.printList();

list.insertAtPosition(3, 3);
list.printList();

list.insertAtPosition(3, 3);
list.printList();

list.insertAtPosition(5, 10);
list.printList();


