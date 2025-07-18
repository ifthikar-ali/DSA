var buySell = function(arr){
    /* BruteForce Solution
    let buyDay=-1;
    let sellDay=-1;
    let maxProfit = -1;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>arr[i] && (arr[j]-arr[i])> maxProfit){
                maxProfit=arr[j]-arr[i];
                buyDay=i+1;
                sellDay=j+1;
            }
        }
    }
    return [maxProfit,buyDay,sellDay];
    */
   /* Solution 2: Based on the selling day we need to check the minimumPrice and maximumProfit*/ 
   let min =arr[0];
   let maxProfit=0;
   for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
    if((arr[i]-min)>maxProfit){
        maxProfit=arr[i]-min;
    }
   }
   return maxProfit;
}

console.log(buySell([7,1,5,3,6,4])); // Output: 5
console.log(buySell([7,5,3,2]));// Output: 0