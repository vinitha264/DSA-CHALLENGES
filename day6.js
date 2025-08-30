
// Add Product to Cart
let cart = [101, 102, 103, 104];
cart.push(105);
console.log(cart);

// Remove Sold Out Item
let cart2 = [101, 102, 103, 104];
cart2 = cart2.filter(item => item !== 103);
console.log(cart2);

// using indexOf and splice
let cart3 = [101, 102, 103, 104];
const index = cart3.indexOf(103);
if (index !== -1) {
  cart3.splice(index, 1);
}
console.log(cart3);

// Insert at Specific Position
let fruits = ["apple", "orange", "grapes"];
fruits.splice(2, 0, "banana");
console.log(fruits);

// Print All Students
let students = ["Ali", "Zara", "John"];
students.forEach(student => {
  console.log(`Hello, ${student}!`);
});

// Delete First Item from Queue
let orders = ["order1", "order2", "order3"];
orders.shift();
console.log(orders);


