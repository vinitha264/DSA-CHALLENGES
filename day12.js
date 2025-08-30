function maxSumOfKConsecutiveElements(visits, k) {
  let maxSum = -Infinity;

  for (let i = 0; i <= visits.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += visits[j];
    }
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

let visits = [10, 20, 30, 40, 50, 60, 70];
let k = 3;
console.log(maxSumOfKConsecutiveElements(visits, k));


