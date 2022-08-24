var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var leftground,rightground
var button1,Button2
var hforce, vforce
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
	button1=createImg("right.png")
	button1.position(220,30)
	button1.size(50,50)
	button1.mouseClicked(hforce)

	button2=createImg("up.png")
    button2.position(20,30)
    button2.size(50,50)
    button2.mouseClicked(vforce)
  

	//Create the Bodies Here.
    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
    var ground_options={
		isStatic:true
	}

	ball = Bodies.circle(100,500,20,ball_options)
	World.add(world,ball)

	
    ground = Bodies.rectangle(400,600,800,30,ground_options)
    World.add(world,ground)
    
	leftground = Bodies.rectangle(500,550,30,100,ground_options)
    World.add(world,leftground)

	rightground = Bodies.rectangle(600,550,30,100,ground_options)
    World.add(world,rightground)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("gold")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,30)
  rectMode(CENTER)
  rect(leftground.position.x,leftground.position.y,30,100)
  rectMode(CENTER)
  rect(rightground.position.x,rightground.position.y,30,100)
  
  
 
}
function vforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-5})
  }

function hforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:0})
  }
  

