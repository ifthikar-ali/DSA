/* 
==Problem Statement==
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
==Solution==
We need to swap element, since its in-place with 0(1) extra memory. 
*/




var reverseString = function(arr) {
    let n=arr.length;
    for(let i=0;i<(n/2);i++){ // we need to run the loop till half of the array.
        // Sawp(i,n-1-i)
        let temp = arr[i];
        arr[i]=arr[n-1-i];
        arr[n-1-i]=temp;
    }
    return arr;
}
console.log(reverseString(['a','k','s','h','a','y'])); // Output: [ 'y', 'a', 'h', 's', 'k', 'a' ]
console.log(reverseString(['i','f','t','h','i'])); // Output: [ 'i', 'h', 't', 'f', 'i' ]
