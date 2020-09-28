const readlineSync = require("readline-sync");
let number=0;

while(number !=42){
    number=  parseInt(readlineSync.question('enter your favorite number ? : '));
    if(number !=42){
        console.log('are you sure ?');
    }else{console.log('nice'); return;}  
}