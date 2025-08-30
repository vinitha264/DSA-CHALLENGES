
function minVisitorsInKHours(visitors, k) {
  let windowSum = 0;
  let minSum = Infinity;

  // Calculate the sum of the first window
  for (let i = 0; i < k; i++) {
    windowSum += visitors[i];
  }

  minSum = windowSum;

  // Slide the window and update the sum
  for (let i = k; i < visitors.length; i++) {
    windowSum = windowSum - visitors[i - k] + visitors[i];
    minSum = Math.min(minSum, windowSum);
  }

  return minSum;
}

let visitors = [120, 80, 100, 90, 150, 110, 70];
let k = 3;
console.log(minVisitorsInKHours(visitors, k)); // Output: 270

