// Q1. Count Pairs with Given Sum
function countPairsWithGivenSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let count = 0;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      count++;
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return count;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
let target = 8;
console.log(countPairsWithGivenSum(arr, target)); 

// Q2. Move Zeroes to End
function moveZeroesToEnd(arr) {
  let nonZeroIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
  
  return arr;
}
let arr2 = [0, 1, 0, 3, 12];
console.log(moveZeroesToEnd(arr2));


