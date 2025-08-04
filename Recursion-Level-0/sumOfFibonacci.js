var sumOfFibonacci = function (n) {
  if (n <= 1) return n;
  return sumOfFibonacci(n - 1) + sumOfFibonacci(n - 2);
};

console.log(sumOfFibonacci(6)); //Output : 8
console.log(sumOfFibonacci(1)); //Output : 1
console.log(sumOfFibonacci(10)); //Output : 55
