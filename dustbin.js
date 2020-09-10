class Dustbin{
    constructor(x,y,width,hight){
     var options = {
         restitution:2.0,
         isStatic:true
     } 
     this.body = Bodies.rectangle(x,y,width,options)
     this.width = width;
     this.height = height;
     World.add(world, this.body)
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        imageMode(CENTER);
        pop();
    }
}