function longestSubarray(nums, k) {
  let left = 0;
  let currentSum = 0;
  let maxLength = 0;
  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];
    while (currentSum > k) {
      currentSum -= nums[left];
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
let nums = [2, 1, 5, 1, 3, 2];
let k = 8;
console.log(longestSubarray(nums, k)); // Output: 3


