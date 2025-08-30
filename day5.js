const phoneNumbers = [
  "+919876543210",
  "+14085551234",
  "+918888777666",
  "+12345678901",
  "+917654321098"
];

const indianNumbers = phoneNumbers.filter(phoneNumber => phoneNumber.startsWith("+91"));
const usNumbers = phoneNumbers.filter(phoneNumber => phoneNumber.startsWith("+1"));

const result = {
  indianNumbers,
  usNumbers
};
console.log(result);

let cart = [101, 102, 104];
let newProduct = 103;
cart.splice(1, 0, newProduct);
console.log(cart);

let waitingList = ["Ali", "John", "Sara"];
let newStudent = "Aarav";
waitingList.push(newStudent);
console.log(waitingList);
