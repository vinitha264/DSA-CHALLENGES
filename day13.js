function longestProductiveStreak(days, k) {
  let maxStreak = 0;
  for (let i = 0; i < days.length; i++) {
    let zeros = 0;
    for (let j = i; j < days.length; j++) {
      if (days[j] === 0) {
        zeros++;
      }
      if (zeros <= k) {
        maxStreak = Math.max(maxStreak, j - i + 1);
      } else {
        break;
      }
    }
  }
  return maxStreak;
}
let days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0];
let k = 2;
console.log(longestProductiveStreak(days, k)); // Output: 7


