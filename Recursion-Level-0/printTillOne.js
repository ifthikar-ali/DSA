function printTillOne(n){
    if(n<1) return;
    console.log(n);
    printTillOne(n-1);
}

printTillOne(10);
