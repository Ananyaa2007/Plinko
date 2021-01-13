class Plinko{
    constructor(x,y,r){
        //DEFINING REQUIRED OPTONS//
        var options={
            isStatic:true
        }
        //CREATING THE CIRCULAR BODY//
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        //ADDING THE BODY TO THE WORLD CREATED USING THE PHYSICS ENGINE//
        World.add(world,this.body);
    }
    display(){
         //STORING THE POSITION AND ANGLE IN VARIABLES//
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        //TRANSLATING THE POSITIONS//
        translate(pos.x,pos.y);
        //ROTATTING AT THE ANGLES//
        rotate(angle);
        //GIVING THE COLOUR TO THE BODY//
        fill("black");
        //GIVING THE STROKE COLOUR//
        stroke("black");
        //DEFINING THE BODY MODE//
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}