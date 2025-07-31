function powerOfTwo(n) {
  if (n === 1) {
    return true;
  } else if (n < 1 || n % 2 !== 0) {
    return false;
  }
  return powerOfTwo(n / 2);
}

console.log(powerOfTwo(8)); // Output: true
console.log(powerOfTwo(6)); // Output: false
console.log(powerOfTwo(0)); // Output: false
