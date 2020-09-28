const readlineSync = require("readline-sync");

let age=  parseInt(readlineSync.question('enter your age : '));

if(isAdult(age)){
    console.log("you are an adult");
}else {console.log("you are not yet an adult")}

function isAdult(a){
    return a>=18;
}