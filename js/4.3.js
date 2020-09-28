const readlineSync = require("readline-sync");

let arr=[];

let n = parseInt(readlineSync.question('How much random number ? : '));
console.log(multiRand(n));

function rand10(n){
    return Math.floor(Math.random()*11);
}

function multiRand(n){
    for(let i=0;i<n;i++){
        arr.push(rand10());
    }
    return arr;
}