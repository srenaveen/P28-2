const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,tree,stone,ground;
var launch;
var m1,m2,m3,m4,m5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,650,820,10);
	boy = new Boy(150,550,200,200);
	tree = new Tree(600,400,400,600);
	stone = new Stone(80,400,50,50);
  launch = new SlingShot(stone.body,{x:110,y:600});
  m1 = new Mango(600,400,30,30);
  stone.depth = tree.depth;
  stone.depth = stone.depth+1;




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  boy.display();
  tree.display();
  stone.display();
  
 
}
function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})    
}
function mouseReleased() {
   launch.fly();
  }



