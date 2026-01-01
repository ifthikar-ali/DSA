function findLargestNumber(arr){
    let largest = -Infinity; // handle negative number
    if(arr.length === 0){ // handle empty array
        return -1;
    } else {
        for(let i=0; i<arr.length;i++){
            if(arr[i]>largest){
                largest = arr[i];
            }
        }
        return largest;
    }
}
let arr=[10,2,4,5,-2,18]; // Input Array
let result = findLargestNumber(arr);
console.log(result); // Output: 18

/**
 * Return the largest finite numeric value in an array.
 * - Returns `null` for an empty array or when no finite numbers are present.
 * Time: O(n), Space: O(1)
 * @param {Array} arr
 * @returns {number|null}
 */
/**
function findLargestNumber(arr) {
  if (!Array.isArray(arr)) throw new TypeError('Expected an array');
  let found = false;
  let largest = -Infinity;

  for (const v of arr) {
    if (typeof v !== 'number' || !Number.isFinite(v)) continue;
    if (!found || v > largest) {
      largest = v;
      found = true;
    }
  }

  return found ? largest : null;
}

// Example
const arr = [10, 2, 4, 5, -2, 18];
console.log(findLargestNumber(arr)); // 18
 */