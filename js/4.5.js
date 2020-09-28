const readlineSync = require("readline-sync");
let a=[4, 1];
let b=[1,1];

console.log(calcDistance(a,b));

function calcDistance(a,b){
    //Pythagore mon pote
    let x=Math.abs(b[0]-a[0]);  //x dist
    let y=Math.abs(b[1]-a[1]);  //y dist
    return Math.sqrt(x**2+y**2); //Pythagore
}