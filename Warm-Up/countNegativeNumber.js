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