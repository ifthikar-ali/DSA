var mergeTheSortedArray = function (nums1, nums2, m, n) {
    /* Approach 1 :
    append nums 2 element in nums1 and nums1.sort();    
    */
  /* Approach 2 time= O(n+m); Space= O(m)   
  let nums1Copy = nums1.splice(0, m);
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    if ((nums1Copy[p1] < nums2[p2] && p1 < m) || p2 >= n) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
  */
  /* Approach 3 without using extra space time= O(n+m); */
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = n + m - 1; i >= 0; i--) {
    if (p2 < 0) { // Corner Case If P2 is out of bound
      break;
    }
    if ((nums1[p1] > nums2[p2] && p1 >= 0)) { // Corner Case If P1 is out of bound
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
};

console.log(mergeTheSortedArray([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3)); // Output: [1,2,2,3,5,6]
console.log(mergeTheSortedArray([1],[],1,0));// Output:[1]
console.log(mergeTheSortedArray([0],[1],0,1));// Output:[1]
console.log(mergeTheSortedArray([0],[1],1,1));// Output:[0,1]
