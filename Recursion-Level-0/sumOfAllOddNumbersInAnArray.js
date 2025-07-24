let arr = [2, 4, 6, 7, 10, 5];
function sumOfElementsInAnArray(n) {
    let isOdd = arr[n] % 2 != 0;
    if(n==0){
        return isOdd ? arr[n] : 0;
    }
    return (isOdd ? arr[n] : 0) + sumOfElementsInAnArray(n-1);
}

console.log(sumOfElementsInAnArray(arr.length - 1)); // Output: 12
