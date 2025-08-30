
// Remove products
let products = ['laptop', 'mobile', 'tablet', 'camera', 'watch'];
products.splice(2, 2);
console.log(products);

// Add new students
let students = ['ali', 'sara', 'zoya'];
students.splice(1, 0, 'naina', 'omar');
console.log(students);

// Extract top performers
let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
scores.splice(3);
console.log(scores);

// Sales
let sales = [220, 300, 280, 150, 400, 390, 310];
let lastTwoDaysSales = sales.splice(-2);
console.log(lastTwoDaysSales);

// Active users
let users = [
  { name: 'Ahmed', active: true },
  { name: 'Mira', active: false },
  { name: 'John', active: true },
];
let activeUsers = users.filter(user => user.active);
console.log(activeUsers);

// Phone numbers
let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
phoneNumbers = phoneNumbers.filter(number => number.length >= 10);
console.log(phoneNumbers);

// Convert price with tax
let prices = [100, 200, 300];
let priceWithTax = prices.map(price => price + (price * 0.18));
console.log(priceWithTax);

// Append .com to website names
let sites = ['google', 'amazon', 'microsoft'];
let websites = sites.map(site => `${site}.com`);
console.log(websites);

// Calculate Total Cart Price
let cart = [499, 1299, 299, 799];
let totalPrice = cart.reduce((acc, price) => acc + price, 0);
console.log(totalPrice);

// Count Frequency of Votes
let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
let voteCount = votes.reduce((acc, vote) => {
  acc[vote] = (acc[vote] || 0) + 1;
  return acc;
}, {});
console.log(voteCount);


