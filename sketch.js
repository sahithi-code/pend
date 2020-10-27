
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.





bobObject1=new paper(140,250,30)
bobObject2=new paper(170,250,30)
bobObject3 = new paper(200,250,30)
bobObject4=new paper(230,250,30)
bobObject5=new paper(260,250,30)

roof = new Ground(200,50,150,20)
	Engine.run(engine);

rope1 = new rope(bobObject1.body,roof.body)	
}


function draw() {
  rectMode(CENTER);
  background(179,190,181);
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();


  roof.display();
  rope.display();

  drawSprites();}
 



