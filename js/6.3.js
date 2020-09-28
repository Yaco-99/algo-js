class rectangle{
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos=topLeftXPos;
        this.topLeftYPos=topLeftYPos;
        this.width=width;
        this.length=length;
    }
    collides(otherRectangle){
        if(this.topLeftXPos<=otherRectangle.topLeftXPos+otherRectangle.length &&
           this.topLeftXPos+this.length>=otherRectangle.topLeftXPos &&
           this.topLeftYPos<=otherRectangle.topLeftYPos+otherRectangle.width &&
           this.topLeftYPos+this.width>=otherRectangle.topLeftYPos){
               return true;
           }else{return false};
    }
}
let arr=[];
let i=0;
for(i=0;i<1000;i++){
    let x=randomNbr();
    let y=randomNbr();
    let w=randomNbr();
    let l=randomNbr();
    arr.push(new rectangle(x,y,w,l));
}
for(i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[i].collides(arr[j])){
        console.log(JSON.stringify(arr[i])+"  did collide with "+JSON.stringify(arr[j]));
        break;
      }
    } 
}

function randomNbr(n){
   return Math.floor(Math.random()*1000);
}