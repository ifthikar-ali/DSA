var binarySearch = function (arr, target) {
  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 < p2) {
    let middle = Math.floor((p2 + p1) / 2);
    if (target === arr[middle]) {
      return middle;
    } else if (target < arr[middle]) {
      p2 = middle - 1;
      middle = Math.floor(p2 / 2);
    } else if (target > arr[middle]) {
      p1 = middle + 1;
      middle = Math.floor(p2 + middle / 2);
    }
  }
};
console.log(binarySearch([-1, 2, 3, 5, 9, 11], 9));
