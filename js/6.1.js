class circle{
    constructor(xPos, yPos, radius){
        this.xPos=xPos;
        this.yPos=yPos;
        this.radius=radius;
    }
    move(xOffset, yOffset){
        this.xPos=this.xPos-xOffset;
        this.yPos=this.yPos-yOffset;
        console.log(this.xPos+"  "+this.yPos);
    }
    get surface(){
        return Math.PI*this.radius**2;
    }   
}
let test = new circle(5, 2, 3);
test.move(2,1);
console.log(test);
console.log(test.surface);