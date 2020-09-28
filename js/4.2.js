const readlineSync = require("readline-sync");

let again = "y";

do{
    console.log(rand10());
    do{
    again = readlineSync.question('Do you want to continue ? y/n : ');
    }while(again !="y" && again !="n");
}while(again=="y");

function rand10(n){
    /* Math.random return a number between 0 and 1, *11 to make it from 0 to 10 and use math floor to
    avoid float. */
    return Math.floor(Math.random()*11);
}