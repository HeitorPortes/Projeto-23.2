
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle1=60;
var angle2=120;
var angle3=180;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options={
		isStatic: true
	}

	var block_options={
		isStatic: true
	}

	var rotator_options={
		isStatic: true
	}

	var particle_options={
		restitution:0.4,
		friction:0.02
	}

	//plane
	plane = Bodies.rectangle(400,700,800,20,plane_options);
	World.add(world,plane);

	//block
	block1 = Bodies.rectangle(150,450,200,30,block_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(650,450,200,30,block_options);
	World.add(world,block2);

	//rotator

	rotator1 = Bodies.rectangle(400,200,30,200,rotator_options);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(400,200,30,200,rotator_options);
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(400,200,30,200,rotator_options);
	World.add(world,rotator3);

	//particle
	particle1 = Bodies.circle(300,10,10,particle_options);
	World.add(world,particle1);

	particle2 = Bodies.circle(330,10,10,particle_options);
	World.add(world,particle2);

	particle3 = Bodies.circle(360,10,10,particle_options);
	World.add(world,particle3);

	particle4 = Bodies.circle(390,10,10,particle_options);
	World.add(world,particle4);

	particle5 = Bodies.circle(420,10,10,particle_options);
	World.add(world,particle5);

	

	Engine.run(engine);

	rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() {
  
  background("cyan");

  Engine.update(engine);

  //plane
  rect(plane.position.x,plane.position.y,800,20);

  //block
  rect(block1.position.x,block1.position.y,200,30);

  rect(block2.position.x,block2.position.y,200,30);

  //rotator
  Matter.Body.rotate(rotator1,angle1);
  push();
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle1) 
  rect(0,0,30,200);
  pop();
  angle1+=2

  Matter.Body.rotate(rotator2,angle2);
  push();
  translate(rotator2.position.x, rotator2.position.y);
  rotate(angle2) 
  rect(0,0,30,200);
  pop();
  angle2+=4

  Matter.Body.rotate(rotator3,angle3);
  push();
  translate(rotator3.position.x, rotator3.position.y);
  rotate(angle3) 
  rect(0,0,30,200);
  pop();
  angle3+=6

  //particle
  ellipse(particle1.position.x,particle1.position.y,10);

  ellipse(particle2.position.x,particle2.position.y,10);

  ellipse(particle3.position.x,particle3.position.y,10);

  ellipse(particle4.position.x,particle4.position.y,10);

  ellipse(particle5.position.x,particle5.position.y,10);
  
  drawSprites();
 
}



