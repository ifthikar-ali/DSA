/* 
==Problem Statement==
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
==Solution==
We need to use 2 pointer to solve this problem 
*/
var removeElement = function(arr,val) {
    let x=0; //pointer-1 to check elements
    for(let i=0;i<arr.length;i++){ // pointer-2 to iterator through the array
        if(arr[i]!=val){
            arr[x]=arr[i]; // replacing the element in expected position
            x++;
        }
    }
    return x;
}
console.log(removeElement([1,1,2,2,3,3,3,4,5,7,7,8],3)); // Output: 9
console.log(removeElement([1,1,2,2,3,3,3,4],2)); // Output: 6
console.log(removeElement([-3,-3,-1,1,4],-3)); // Output: 3
console.log(removeElement([3,2,2,3],3)); // Output: 2