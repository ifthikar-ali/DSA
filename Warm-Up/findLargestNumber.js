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
console.log(result); // Output: 22