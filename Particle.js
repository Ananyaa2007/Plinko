class Particle{
    constructor(x,y,r){
    //DEFINING REQUIRED OPTONS//
        var options={
            restitution : 0.4
        } 
        this.r = r;
    //CREATING THE CIRCULAR BODY//
        this.body = Bodies.circle(x,y,this.r,options);
    //GIVING RANDOM COLOURS TO THE PARTICLES//
        this.color = color(random(0,255), random(0,255), random(0,255));
    //ADDING THE BODY TO THE WORLD CREATED USING THE PHYSICS ENGINE//
        World.add(world,this.body)
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
        stroke("black");
    //GIVING THE COLOURS//
        fill(this.color);
    //DEFINING THE MODE THE BODY//
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}