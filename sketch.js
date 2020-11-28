
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//creating variables
var groundObject; 
var boy, boyImg;
var treeObj, stoneObj;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var launcherObj;

function preload(){
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies:
	groundObject = new Ground(width/2, 700, width, 100);

	boy = createSprite(200, 620);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	stoneObj = new Stone(150, 560, 60, 40);

	mango1 = new Mango(800, 200, 50);
	mango2 = new Mango(900, 300, 50);
	mango3 = new Mango(780, 270, 50);
	mango4 = new Mango(700, 320, 50);
	mango5 = new Mango(880, 180, 50);
	mango6 = new Mango(1000, 350, 50);
	mango7 = new Mango(960, 220, 50);
	mango8 = new Mango(820, 330, 50);

	treeObj = new Tree(850, 680);

	launcherObj = new Launcher(stoneObj.body, {x: 150, y: 560});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#87ceeb");
  
  textSize(25);
  text("Press Space to Get Another Chance to Play! :)", 50, 50);

  groundObject.display();
  boy.display();
  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  launcherObj.display();

  //we are putting the detectCollision function into use for all mangoes
  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  detectCollision(stoneObj, mango6);
  detectCollision(stoneObj, mango7);
  detectCollision(stoneObj, mango8);


  drawSprites();
 
}

//when mouse is dragged, stone will be following x of mouse and y of mouse so user can launch stone
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY});
}

//when mouse is released, the stone will no longer be in the boy's hand
function mouseReleased(){
	launcherObj.fly();
}

//when the "space" key is pressed, the stone will go back to the boy's hand
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:150, y:560})
		launcherObj.attach(stoneObj.body);
	}
}

//here we are creating a function where when the stone collides with a mango, the mango will fall down
function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	  if (distance <= lmango.r + lstone.r){
		  Matter.Body.setStatic(lmango.body, false);
	  }
}
