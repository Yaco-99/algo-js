const readlineSync = require("readline-sync");

let a=  parseInt(readlineSync.question('enter the first number : '));
let b = parseInt(readlineSync.question('enter the second number : '));

console.log(a%b);
