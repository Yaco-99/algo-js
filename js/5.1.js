const readlineSync = require("readline-sync");

console.log(askTvSerie())

function askTvSerie(){
    let name=  readlineSync.question('What is your favorite serie name : ');
    let year= readlineSync.question('What is your favorite serie production year : ');
    let castNumber = parseInt(readlineSync.question('how mutch cast members do you want to add ? : '));
    let cast=[];
    for(let i=0; i<castNumber;i++){
        cast.push(readlineSync.question('Cast member name : ')); 
    }
    let data={
        "serie name":name,
        "production year":year,
        "cast members":cast,
    }
    return data;
}