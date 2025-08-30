function minVisitorsInKHours(visitors, k) {
  let minSum = Infinity;

  for (let i = 0; i <= visitors.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += visitors[j];
    }
    minSum = Math.min(minSum, sum);
  }

  return minSum;
}

let visitors = [120, 80, 100, 90, 150, 110, 70];
let k = 3;
console.log(minVisitorsInKHours(visitors, k));


