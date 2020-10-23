const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;


var engine,world;
/*var box1;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
engine=Engine.create();
world=engine.world;
box1=new Box(100,100,30,30);

}

function draw() {
  background(0); 
  Engine.update(engine); 
  box1.display();
  //drawSprites();
}*/
//var angle=0;
var b1,ground1;
var bird1;
var bg;
var pig1,pig2;
var log1;
function preload()
{
  bg=loadImage("bg.png");

}
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
world=engine.world;
  b1=new Box(700,320,70,70);
  b2=new Box(920,320,70,70);
  ground1=new Ground(600,height,1200,20);
  bird1=new Bird(100,100);
  pig1=new Pig(810,350); 
  log1=new Log(810,260,300,PI/2);
  b3=new Box(700,240,70,70);
  b4=new Box(920,240,70,70);
  pig2=new Pig(810,220);
  log3=new Log(810,180,300,PI/2);
  b5=new Box(810,160,70,70);
  log4=new Log(760,120,150,PI/7);
  log5=new Log(870,120,150,-PI/7);
}
function draw() {
  background(bg);
 // translate(400,200);
 // rotate(angle)
 // rectMode(CENTER);
 // rect(0,0,100,50);
 // angle=angle+1;
 Engine.update(engine);
 b1.display();
 b2.display();
 ground1.display();
 bird1.display();
 log1.display();
 pig1.display();
 b3.display();
 b4.display();
 pig2.display();
 log3.display();
 log4.display();
 log5.display();
 b5.display();
}