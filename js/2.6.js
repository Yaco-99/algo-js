const readlineSync = require("readline-sync");

let day= 0;
while(day<1||day>7){
    day=  parseInt(readlineSync.question('enter a number between 1 and 7 : '));
    if(day<1||day>7){
        console.log('Quick math');
    }else{break;}  
}

switch (day){
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('Wednesday my dude');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}