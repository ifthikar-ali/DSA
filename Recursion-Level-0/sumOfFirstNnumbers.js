function sumOfN(N){
    if(N==0) return 0;
    return N+sumOfN(N-1);
}

console.log(sumOfN(5)); // Output: 15