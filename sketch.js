const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var ground1;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
  paperball = new paper(200,100,50);
  ground1 = new ground(300,690,1000,10);
  dustbin1 = new dustbin(550,625,10,100);
	dustbin2 = new dustbin(710,625,10,100);
	dustbin3 = new dustbin(630,680,170,10);
	Engine.run(engine);

}
function draw() {
  rectMode(CENTER);
  background(0);
  

  paperball.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
}
  
function keyPressed() {
if(keyCode ===UP_ARROW) {
 Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});
 Matter.Bodies.circle(x,y,radius,[options],[maxSides])
 
     }
}