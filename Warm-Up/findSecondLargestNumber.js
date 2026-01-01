function findSecondLargestNumber(arr){
    let largest = -Infinity; // handle negative number
    let secondLargest= -Infinity // handle negative number
    if(arr.length === 0){ // handle empty array
        return -1;
    } else {
        for(let i=0; i<arr.length;i++){
            if(arr[i]>largest){ // element > largest and secondLargest
                secondLargest = largest;
                largest = arr[i];
            }
            /* 
            To check largest < element > secondLargest.
            arr[i] !== largest will check duplicate check of largest number.
            */
            else if(arr[i]>secondLargest && arr[i] !== largest){
                secondLargest = arr[i];
            }
        }
        return secondLargest;
    }
}
let arr=[10,2,4,5,-2,18,18]; // Input Array
let result = findSecondLargestNumber(arr);
console.log(result); // Output: 10

/**
 * Return the second largest *distinct* finite number in an array.
 * Returns `null` if there are fewer than two distinct finite numbers.
 * Time: O(n), Space: O(1)
 */
/**
function findSecondLargestNumber(arr) {
  if (!Array.isArray(arr)) throw new TypeError('Expected an array');

  let largest = -Infinity;
  let second = -Infinity;
  let foundSecond = false;

  for (const v of arr) {
    if (typeof v !== 'number' || !Number.isFinite(v)) continue;
    if (v > largest) {
      second = largest;
      largest = v;
      if (second !== -Infinity) foundSecond = true;
    } else if (v > second && v !== largest) {
      second = v;
      foundSecond = true;
    }
  }

  return foundSecond ? second : null;
}
   */