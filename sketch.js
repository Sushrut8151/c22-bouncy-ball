const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var ball;
var myEngine,myWorld;


function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;
  //createSprite(400, 200, 50, 50);
 
  var ground_option = {
    isStatic : true
  }
 ground = Bodies.rectangle(200,390,400,10,ground_option);
  World.add(myWorld,ground);
  
  var ball_option = {
    restitution : 1.0
  }
  ball = Bodies.circle(200,100,40,ball_option);
  World.add(myWorld,ball);

  console.log(ground.position.x);
}


function draw() {
  background(0);  
  Engine.update(myEngine);

 rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
  
  
}