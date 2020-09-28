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
               console.log("true");
               return;
           }else{console.log("false")}
    }
}
let rectangleA=new rectangle(0,5,5,10);
let rectangleB=new rectangle(0,5,4,2);
rectangleA.collides(rectangleB);
