class Ground{
    constructor(x,y,width,height){
        //DEFINING REQUIRED OPTONS//
        var options = {
          'isStatic': true,
          'density' : 0.5
        }
        this.width = width;
        this.height = height;
         //CREATING RECTANGULAR BODY//
        this.body = Bodies.rectangle(x,y,width,height,options);
         //ADDING THE BODY TO THE WORLD CREATED USING THE PHYSICS ENGINE// 
        World.add(world,this.body);
     }

     display(){
        //STORING THE POSITION IN VARIABLE//
         var pos = this.body.position;
        //GIVING THE COLOUR TO THE BODY//
         fill("black");
        //GIVING THE STROKE COLOUR //
         stroke("black");
        //GIVING THE STROKE THICKNESS[WEIGHT]//
         strokeWeight(3);
         //DEFINING THE BODY MODE//
         rectMode(CENTER);
         rect(pos.x,pos.y,this.width,this.height);
     }
}