var reverseInteger = function(x) {
    let num = Math.abs(x); // To make a copy of the original number
    let reverse = 0;
    while (num > 0) {
        reverse = reverse * 10 + (num % 10); // to get a last digit
        num = Math.floor(num / 10); // to modify the n value
    }
    let limit = Math.pow(2,31);
    if(reverse < -limit || reverse > limit) {
        return 0;
    }
    return (x<0)? -reverse : reverse;
};

console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(121)); // Output: 121
console.log(reverseInteger(-1234)); // Output: -4321
console.log(reverseInteger(982324427769)); // Output: 0
console.log(reverseInteger(0)); // Output: 0
