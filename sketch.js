const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,tree;
var stone;
var boyImage,boy;
var launcher;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
 boyImage = loadImage("images/boy.png");	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,height,1200,20);
    tree = new Tree(790,700);

	stone = new Stone(150,300,25,25);

	boy = createSprite(185,647,10,10);
	boy.addImage(boyImage);
	boy.scale = 0.08;
	
	mango1 = new Mango(660, 310, 25);
	mango2 = new Mango(730, 230, 25);
	mango3 = new Mango(850, 370, 25);
	mango4 = new Mango(800, 300, 25);
	mango5 = new Mango(890, 280, 25);
	mango6 = new Mango(730, 370, 25);
	mango7 = new Mango(825, 200, 25);
	mango8 = new Mango(950, 350, 25);

    launcher=new Launcher(stone.body,{x:140,y:600});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  textSize(25);
  stroke("blue")
  text("Press the Spacebar to get a second Chance to Play!",100 ,70);
  
 ground.display();
 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 
 launcher.display();
 stone.display();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
 detectCollision(stone,mango8);


 drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    launcher.fly();
}

function detectCollision(lstone,lmango){
 mangoBodyPosition = lmango.body.position
 stoneBodyPosition = lstone.body.position
 
 var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r){
	   Matter.Body.setStatic(lmango.body,false);
   }
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcher.attach(stone.body);
	}
}