const readlineSync = require("readline-sync");
let number = Math.floor(Math.random()*101);
let guess = 0;

do{
  console.log(number);
  guess =  parseInt(readlineSync.question('guess a number between 1 and 100 : '));
  if(guess==number){console.log("You win GG !"); break};
  guess<number ? console.log("too low") : console.log("too high");
}while(guess != number);

