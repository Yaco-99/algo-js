const readlineSync = require("readline-sync");

let arr=[2,1,3,5,4];

minMax(arr);

function minMax(array){
    console.log("max = "+Math.max(...array));
    console.log("min = "+Math.min(...array));
}