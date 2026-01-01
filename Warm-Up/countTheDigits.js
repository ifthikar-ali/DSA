
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

/**
 * Count digits in the integer part of a number.
 * - Accepts finite numbers; returns 1 for 0.
 * - Ignores fractional part (counts digits of Math.trunc(abs(num))).
 * Time: O(d) where d = number of digits. Space: O(1).
 * @param {number} num
 * @returns {number}
 */
/**
function countDigits(num) {
  if (typeof num !== 'number' || !Number.isFinite(num)) return 0; // or throw
  let n = Math.abs(Math.trunc(num));
  if (n === 0) return 1;
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

 */