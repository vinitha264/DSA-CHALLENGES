function mergeBusyIntervals(userA, userB) {
  let mergedIntervals = [...userA, ...userB];
  mergedIntervals.sort((a, b) => a[0] - b[0]);

  let result = [mergedIntervals[0]];
  for (let i = 1; i < mergedIntervals.length; i++) {
    let currentInterval = mergedIntervals[i];
    let lastInterval = result[result.length - 1];

    if (currentInterval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
    } else {
      result.push(currentInterval);
    }
  }

  return result;
}

let userA = [[9, 11], [13, 15], [18, 20]];
let userB = [[10, 12], [14, 16], [17, 18]];
console.log(mergeBusyIntervals(userA, userB)); 


