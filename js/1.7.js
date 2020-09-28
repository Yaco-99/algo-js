const readlineSync = require("readline-sync");

let a=  parseInt(readlineSync.question('enter your shoe size : '));
let b = parseInt(readlineSync.question('enter your birth year : '));

console.log((a*2+5)*50-b+1766);