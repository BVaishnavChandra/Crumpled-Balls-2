
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground ;
var paperObject ;
var bin1, bin2 , bin3;
var Dustbin_image;

function preload()
{
	Dustbin_image = loadImage("dustbin.png")
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
 ground = new Ground(600,390,1300,15);
 
 paperObject = new Paper(150,220,45);

 bin1 = new Dustbin(1060,318,10,100);
 bin2 = new Dustbin(1002,375,180,10); 
 bin3 = new Dustbin(924,318,10,100);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
 
textSize(26);
fill("black");
stroke("black");
text("Crumpled ball-2" , 200 , 50);

textSize(26);
fill("black");
stroke("blue");
text("Made by :B.Vaishnav Chandra" , 700 , 50);

paperObject.display() ;


//bin1.display() ;
//bin2.display() ;
//bin3.display() ;

image(Dustbin_image , 820 , 180 , 350 , 240);


ground.display() ;


drawSprites();
 
}


function keyPressed(){
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:417,y:-405});
  }
}



