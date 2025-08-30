let inventory = [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Mobile' },
  { id: 103, name: 'laptop' },
  { id: 104, name: 'Tablet' },
  { id: 105, name: 'MOBILE' },
  { id: 106, name: 'Camera' }
];
let seen = new Set();
let uniqueInventory = inventory.filter(item => {
  let name = item.name.toLowerCase();
  if (!seen.has(name)) {
    seen.add(name);
    return true;
  }
  return false;
});
console.log(uniqueInventory);
// Problem 2: 
let transactions = [
  { category: 'Food', amount: 120 },
  { category: 'Transport', amount: 50 },
  { category: 'Food', amount: 80 },
  { category: 'Shopping', amount: 300 },
  { category: 'Transport', amount: 70 },
];
let transactionSummary = transactions.reduce((acc, current) => {
  if (!acc[current.category]) {
    acc[current.category] = 0;
  }
  acc[current.category] += current.amount;
  return acc;
}, {});
console.log(transactionSummary);
