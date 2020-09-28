const readlineSync = require("readline-sync");

let a=  parseInt(readlineSync.question('enter the length of the rectangle : '));
let b = parseInt(readlineSync.question('enter the width od the rectangle : '));

console.log("The surface is "+calcSurface(a,b));

function calcSurface(length, width){
    return length*width;
}