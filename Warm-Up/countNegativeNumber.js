// Count Negative Numbers in an Array

function CountNegative(arr) {
  let count = 0;
  if (arr.length === 0) { // handle empty array
    return count;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        count++;
      }
    }
    return count;
  }
}
let arr=[2, 5, -1, 1, -6, 5, -8];
let result = CountNegative(arr); // Output: 3
console.log(result);



/**
 * Count negative numbers in an array.
 * - Ignores non-numeric elements (e.g., strings, objects, NaN, Infinity).
 * - Returns 0 for non-array input.
 * Time: O(n), Space: O(1)
 * @param {Array} arr
 * @returns {number}
 */
/** 
function countNegativeNumbers(arr) {
  if (!Array.isArray(arr)) return 0; // or throw new TypeError('Expected an array')
  let count = 0;
  for (const v of arr) {
    if (typeof v === 'number' && Number.isFinite(v) && v < 0) count++;
  }
  return count;
}

// Example
const arr = [2, 5, -1, 1, -6, 5, -8];
console.log(countNegativeNumbers(arr)); // 3
*/