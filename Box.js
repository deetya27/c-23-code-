class Box {
    constructor(x, y, w, h){
        var options = {restitution:1}
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.body = Bodies.rectangle(this.x, this.y, this.w, this .h, options );
        World.add(world,this.body);

    }
     display (){
         var pos = this.body.position;
         var angle = this.body.angle
         console.log(box2.body.angle)
         push()
         translate(pos.x,pos.y);
         rotate(angle);


         rectMode(CENTER);
         fill(255);
         rect(0,0,this.w, this.h);
         pop()

     }

}