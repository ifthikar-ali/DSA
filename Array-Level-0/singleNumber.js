/*

 */
var singleNumber = function (arr) {
/* Solution 1 with hashMap 
  let hashMap ={}
  for(let i=0;i < arr.length;i++){
    if(!hashMap[arr[i]]){
        hashMap[arr[i]] = 1;
    }
    else{
        hashMap[arr[i]] ++;
    }
  }
  for(let i=0;i < arr.length;i++){
    if(hashMap[arr[i]] == 1){
        return arr[i];
    }
  }
*/
// Solutin 2: using XOR operation
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
};

console.log(singleNumber([1, 2, 3, 4, 4, 3, 1])); // Output: 2
console.log(singleNumber([0])); // Output: 0
console.log(singleNumber([0, 1, 0])); // Output: 1
