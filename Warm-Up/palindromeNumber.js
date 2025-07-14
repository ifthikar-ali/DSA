var isPalindrome = function (x) {
  let num = x; // To make a copy of the original number
  if (num < 0) return false; // To handle negative number
  else if (num == 0) return true; // To handle 0 as a input
  else {
    let reverse = 0;
    while (num > 0) {
      reverse = reverse * 10 + (num % 10); // to get a last digit
      num = Math.floor(num / 10); // to modify the n value
    }
    return x == reverse;
  }
};

console.log(isPalindrome(123)); // Output: false
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-1234)); // Output: false
console.log(isPalindrome(0)); // Output: true