//DEFINING THE REQUIRED CONSTANTS//
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//DEFINING THE REQUIRED VARIABLES//
var divisionHeight = 300;
var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,700);

  //CREATION OF THE WORLD WITHTHE HELP OF PHYSICS ENGINE//
  engine = Engine.create();
  world = engine.world;
  
  //CREATION OF THE GROUND USING THE Ground.js FILE
  ground = new Ground(229,690,500,20);

  //CREATING DIVISIONS//
  for(var k = 0; k<=width; k=k+80)
  {
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  //CREATING PLINKOS//
  for(var j = 75; j<=width; j = j + 120)
  {
      plinkos.push(new Plinko(j,75,20));
  }
  for(var j = 50; j <=width; j = j + 120)
  {
      plinkos.push(new Plinko(j,175,20));
  }
  for (var j = 75; j <=width; j=j+120) 
  {
  
     plinkos.push(new Plinko(j,275,20));
  }

   for (var j = 50; j <=width-10; j=j+120) 
  {
  
     plinkos.push(new Plinko(j,375,20));
  }

}

Engine.run(engine);

function draw() {
  background("royalblue");  
  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }

  for (var j = 0; j < particles.length; j++) {
      
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
  for (var i = 0; i < plinkos.length; i++) {
 
    plinkos[i].display();
    
  }
  
  //DISPLAYING THE GROUND USING THE Ground.js FILE
  ground.display();
}