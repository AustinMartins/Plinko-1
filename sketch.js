const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var particle = [];
var division =[];
var plinko=[];

var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
	world = engine.world;

  ground1 = new Ground(200,790,400,10);
 
  for (var k = 0; k <=width;k=k+80){
    division.push(new Division(k,height*divisionHeight/2,10,divisionHeight));
  }

  for(j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,75));
  }

  for(j=15;j<=width-10;j=j+50){
    plinko.push(new Plinko(j,175));
  }

  /*for(j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,75));
  }*/

  Engine.run(engine);

}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  ground1.display();
  division.display();
  particles.display()
  plinko.display();


  drawSprites();

}
