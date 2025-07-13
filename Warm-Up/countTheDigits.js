
/* Functon will return the count of digits */
function countDigits(num) {
    num = Math.abs(num); // To handle negative numbers
    if (num === 0) { // To check for 0 as a input
        return -1;
    }
    else {
        let count = 0;
        while (num > 0) {
            num = Math.floor(num / 10);
            count++;
        }
        return count;
    }
}
let result = countDigits(-145); // Output: 3
console.log(result);