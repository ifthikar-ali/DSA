var moveZeros = function (arr) {
  /* Solution 1:  create a new array and shift the non- zeros elements and fill o till length of original array */
  /* Solution 2: In-Place shifting using 2 pointer 
  Note: I tried adding 0 after change arr[p]; like arr[i]=0 but it fail for the test csae [1,2,3,4,5] it will return [0,0,0,0,0]
   because we try to change the arr[i] value immediately after change arr[p].
  */
  let p = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[p] = arr[i];
      p++;
    }
  }
  for (let i = p; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
};
console.log(moveZeros([0, 1, 0, 3, 12])); // Output: [1,3,12,0,0]
console.log(moveZeros([0, 0, 0, 0, 0])); // Output: [0,0,0,0,0]
console.log(moveZeros([1, 2, 3, 4, 5])); // Output: [1,2,3,4,5]
