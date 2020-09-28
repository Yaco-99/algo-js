const readlineSync = require("readline-sync");
let c=0;
let arr=[];

do{
console.log("\n \n 1 - List all the pizza flavors \n 2 - Add a new pizza flavor \n 3 - Remove a pizza flavor \n 4 - Exit this program");
c = parseInt(readlineSync.question('Enter you choice : '));

switch (c){
    case 1:
        for(let elem of arr){
            console.log(elem);
        }
        break;
    case 2:
        let newFlavor = readlineSync.question('Enter the new pizza flavor : ');
        arr.push(newFlavor);
        break;
    case 3:
        let suprFlavor = readlineSync.question('Enter the pizza flavor you want to remove: ');
        let index=arr.findIndex((el)=>el==suprFlavor);
        arr.splice(index,1);
        break;
}
}while(c!=4);