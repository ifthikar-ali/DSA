function findLargestNumber(arr){
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
let result = findLargestNumber(arr);
console.log(result); // Output: 22