const readlineSync = require("readline-sync");

let a=  parseInt(readlineSync.question('enter the first number : '));
let b = parseInt(readlineSync.question('enter the second number : '));
let c = parseInt(readlineSync.question('enter the operator, 1 for addition, 2 for substraction, 3 for multiplication, 4 for division, 5 for modulo : '));

switch (c){
    case 1:
        console.log(addition(a,b));
        return addition(a,b);
    case 2:
        console.log(substraction(a,b));
        return substraction(a,b);
    case 3:
        console.log(multiplication(a,b));
        return multiplication(a,b);
    case 4:
        console.log(division(a,b));
        return division(a,b);
    case 5:
        console.log(modulo(a,b));
        return modulo(a,b);
}

function addition(a,b){
    return a+b;
}
function substraction(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}
function modulo(a,b){
    return a%b;
}