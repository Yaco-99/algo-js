const readlineSync = require("readline-sync");

let min=  parseInt(readlineSync.question('enter your min number : '));
let max=  parseInt(readlineSync.question('enter your max number : '));
if(min>max){
    console.log("Your don't understand anything you donkey ! ")
    return;
}
let current=  parseInt(readlineSync.question('enter your current number : '));

if(current>min&&current<max){
    console.log("current = "+current);
    return;
}else{console.log("current isn't between min and max..."); return;};

