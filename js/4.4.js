const readlineSync = require("readline-sync");

let arr=[];

let n = parseInt(readlineSync.question('How much random number ? : '));
console.log(multiRand(n)+" average = "+average(arr)+" min = "+min(arr)+" max = "+max(arr));

function rand10(n){
    return Math.floor(Math.random()*11);
}

function multiRand(n){
    for(let i=0;i<n;i++){
        arr.push(rand10());
    }
    return arr;
}
function average(arr){
    let sum=arr.reduce((a,b)=> a+b, 0);
    return sum/arr.length;
}
function min(arr){
    return Math.min(...arr);
}
function max(arr){
    return Math.max(...arr);
}