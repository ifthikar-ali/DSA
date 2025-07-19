/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:
Input: nums = [1,0,1,1,0,1]
Output: 2
 */
var maxConsecutiveOnes = function (arr) {
  let maxCount = 0;
  let currentCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      currentCounter++;
    } else {
      maxCount = Math.max(currentCounter, maxCount);
      currentCounter = 0;
    }
  }
    // We should not forget to check the maxXount at the end, because of corner case as [1,1,0,1,1,1]  
  return Math.max(currentCounter, maxCount);
};

console.log(maxConsecutiveOnes([1, 1, 0, 1, 0, 1, 1, 1])); // Output: 3
console.log(maxConsecutiveOnes([1, 1, 0, 1, 0, 1, 1, 1, 0])); // Output: 3
console.log(maxConsecutiveOnes([0, 0])); // Output: 0
console.log(maxConsecutiveOnes([1, 1, 1, 1, 1, 1])); // Output: 6
console.log(maxConsecutiveOnes([1, 1, 1, 1, 1, 0, 1, 0, 1, 0])); // Output: 5