const readlineSync = require("readline-sync");
let n = parseInt(readlineSync.question('How much Fibonacci number do you want ? : '));
let arr=[0, 1];
let sum=1;
if(n==1){
    console.log(arr[0]);
    return;
}if(n==2){console.log(arr[1])};
for(let i=2;i<n;i++){
    sum=sum+arr[i-2];
    arr.push(sum);
}
console.log(arr);
