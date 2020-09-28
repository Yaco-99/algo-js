const readlineSync = require("readline-sync");

let name=  readlineSync.question('enter your name : ');
console.log('3 more question to go !');
let firstname= readlineSync.question('enter your firstname : ');
console.log('2 more question to go !');
let city= readlineSync.question('enter your city : ');
console.log('1 more question to go !');
let eat= readlineSync.question('What is your favorite meal ? : ');
console.log('Here is your story');

console.log(name+' '+firstname+" the lord of "+city+' wanted to eat '+eat+' but fell of a clif.');