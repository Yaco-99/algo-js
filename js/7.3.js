const readlineSync = require("readline-sync");
let n = parseInt(readlineSync.question('What number do you want ? : '));
arr=[];

for(let i=2;i<n;i++){
    if(n%i==0){
        arr.push(i);
    }
}
console.log(arr);
