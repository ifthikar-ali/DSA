/* 
==Problem Statement==
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
==Solution==
We need to use 2 pointer to solve this problem 
*/
var removeDuplicate = function(arr) {
    let x=0; //pointer-1 to check elements
    for(let i=0;i<arr.length;i++){ // pointer-2 to iterator through the array
        if(arr[i]>arr[x]){
            x++;
            arr[x]=arr[i]; // replacing the element in expected position
        }
    }
    return x+1;
}
console.log(removeDuplicate([1,1,2,2,3,3,3,4,5,7,7,8])); // Output: 7
console.log(removeDuplicate([1,1,2,2,3,3,3,4])); // Output: 4
console.log(removeDuplicate([-3,-3,-1,1,4])); // Output: 4