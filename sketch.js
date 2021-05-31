const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

var bg;
var boy;

function preload(){
  bgImage = loadImage("snow3.jpg");
}


function setup() {
  createCanvas(1280,605);
  engine = Engine.create();
  world = engine.world;
 
 
  bg = createSprite(640,300,1280,605);
  bg.addImage("cold",bgImage);
  
  boy = createSprite(300,250,70,70);

  snow = new Snow(600,0,20,20);

  

  
}

function draw() {
  background(255);
  Engine.update(engine);
  
  snow.display();

  drawSprites();
}