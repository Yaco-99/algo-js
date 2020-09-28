const readlineSync = require("readline-sync");
let data={};
askTvSerie(data);
console.log(randomizeCast(data));

function askTvSerie(){
    let name=  readlineSync.question('What is your favorite serie name : ');
    let year= readlineSync.question('What is your favorite serie production year : ');
    let castNumber = parseInt(readlineSync.question('how mutch cast members do you want to add ? : '));
    let cast=[];
    let i=0;
    for(i=0; i<castNumber;i++){
        cast.push(readlineSync.question('Cast member name : ')); 
    }
    data={
        "serie name":name,
        "production year":year,
        "cast":cast,
    }
    return data;
}
function randomizeCast(data){
    let temp=0;
    let length=data.cast.length;
    for(i=0;i<length;i++){
        let random=Math.floor(Math.random()*(length-1-i));
        temp=data.cast[length-1-i];
        data.cast[length-1-i]=data.cast[random];
        data.cast[random]=temp;
    }
    return data;
}