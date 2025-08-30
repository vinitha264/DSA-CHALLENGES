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
  insertAtPosition(data, pos) {
    if (pos === 1) {
      this.insertAtHead(data);
      return;
    }
    let newNode = new Node(data);
    let current = this.head;
    let currentIndex = 1;
    while (currentIndex < pos - 1 && current.next !== null) {
      current = current.next;
      currentIndex++;
    }
    if (currentIndex !== pos - 1) {
      if (current === null) {
        this.insertAtTail(data);
      } else {
        console.log("Position out of bounds");
      }
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
list.insertAtTail(10);
list.insertAtTail(20);
list.insertAtTail(30);
console.log("Initial List:");
list.printList();

list.insertAtHead(5);
console.log("After inserting 5 at head:");
list.printList();

list.insertAtTail(40);
console.log("After inserting 40 at tail:");
list.printList();

list.insertAtPosition(25, 3);
console.log("After inserting 25 at position 3:");
list.printList();

list.insertAtPosition(50, 6);
console.log("After inserting 50 at position 6:");
list.printList();


