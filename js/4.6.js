const readlineSync = require("readline-sync");
let stop=0;
let solution=1;
console.log(factorial(4));

function factorial(a){
    if(Math.abs(a)<=stop){
        console.log(solution)
        return solution
    }else{
        if(a<0){
            solution=-Math.abs(solution*(a+stop));
            stop++
            
        }else {
            solution=solution*(a-stop);
            stop++
        }
        factorial(a);
    }
}

/* function factorial(a){
    let solution=1;
    if(a==1||a==0){
        return solution;
    }
    for(let i=0;i<Math.abs(a);i++){
        if(a<0){
            solution=-Math.abs(solution*(a+i));
        }else {solution=solution*(a-i);}
    }
    return solution;
} */