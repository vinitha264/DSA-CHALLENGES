// 1. Insert New Delivery Order
function insertOrder(orders, newOrder) {
  let index = orders.findIndex(order => order.deliveryTime > newOrder.deliveryTime);
  if (index === -1) {
    orders.push(newOrder);
  } else {
    orders.splice(index, 0, newOrder);
  }
  return orders;
}
let orders = [
  { orderId: 1, deliveryTime: "12:00" },
  { orderId: 2, deliveryTime: "12:30" }
];
let newOrder = { orderId: 3, deliveryTime: "12:15" };
console.log(insertOrder(orders, newOrder));
// 2. Remove Inactive Users
function removeInactiveUsers(users) {
  return users.filter(user => user.isActive);
}
let users = [
  { username: "ali", isActive: true },
  { username: "sara", isActive: false },
  { username: "john", isActive: true }
];
console.log(removeInactiveUsers(users));
// 3. Movie Pair Watch Time
function findMoviePair(movieDurations, targetTime) {
  movieDurations.sort((a, b) => a - b);
  let left = 0;
  let right = movieDurations.length - 1;

  while (left < right) {
    let sum = movieDurations[left] + movieDurations[right];
    if (sum === targetTime) {
      return [movieDurations[left], movieDurations[right]];
    } else if (sum < targetTime) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}
let movieDurations = [90, 85, 75, 60, 120, 150, 125];
let targetTime = 250;
console.log(findMoviePair(movieDurations, targetTime));

