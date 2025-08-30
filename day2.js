//generate invoice report
let items = [
  { name: "Pen", qty: 3, price: 10 },
  { name: "Notebook", qty: 2, price: 50 },
  { name: "Bag", qty: 1, price: 400 }
];

let result = items.map(item => ({
  name: item.name,
  total: item.qty * item.price
}));
console.log(result);

//detect duplicate entries
let users = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];

let duplicates = users.filter((user, index) => users.indexOf(user) !== index);

console.log([...new Set(duplicates)]);

//sold product
let orders = [
  { product: 'Pen', qty: 10 },
  { product: 'Notebook', qty: 5 },
  { product: 'Pen', qty: 15 },
  { product: 'Bag', qty: 1 },
  { product: 'Notebook', qty: 10 }
];

let productQuantities = orders.reduce((acc, order) => {
  acc[order.product] = (acc[order.product] || 0) + order.qty;
  return acc;
}, {})

let mostSoldProduct = Object.keys(productQuantities).reduce((a, b) => 
  productQuantities[a] > productQuantities[b] ? a : b
);

console.log(mostSoldProduct);
