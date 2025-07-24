let arr=[2,4,6,8,10];
function sumOfElementsInAnArray(n){
    if(n==0) {
        return arr[n];
    }
    return arr[n]+ sumOfElementsInAnArray(n-1);
}

console.log(sumOfElementsInAnArray(arr.length-1)); // Output: 30  