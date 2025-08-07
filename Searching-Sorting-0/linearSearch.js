var linearSearch = function (arr, target) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([2, 4, 9, 5, 3], 3));
