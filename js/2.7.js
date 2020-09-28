const readlineSync = require("readline-sync");

let n= parseInt(readlineSync.question('enter a number : '));
let sum= 0;
let newNumber=0;

for(let i=0;i<n;i++)
{
    newNumber=parseInt(readlineSync.question('enter a new number : '));
    sum=sum+newNumber;
}
console.log(sum);