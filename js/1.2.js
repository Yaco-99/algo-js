const readlineSync = require("readline-sync");

let name=  readlineSync.question('enter your name : ');
let firstname= readlineSync.question('enter your firstname : ');
let city= readlineSync.question('enter your city : ');

console.log('Your name is '+name+" "+firstname+" and you live in "+city);