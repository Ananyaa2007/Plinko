class Division{
    constructor(x,y,w,h){
//DEFINING REQUIRED OPTONS//
        var options = {
            isStatic : true
        }
    //CREATING RECTANGULAR BODY//
         this.body = Bodies.rectangle(x,y,w,h,options);
         this.w = w;
         this.h = h;
     //ADDING THE BODY TO THE WORLD CREATED USING THE PHYSICS ENGINE// 
         World.add(world,this.body);
    }

    display(){
        //STORING THE POSITION IN VARIABLE//
        var pos = this.body.position;
        //DEFINING THE BODY MODE//
        rectMode(CENTER);
        //GIVING THE COLOUR TO THE BODY//
        fill("black");
         //GIVING THE STROKE COLOUR //
        stroke("black");
        rect(pos.x,pos.y,this.w,this.h);
    }
}