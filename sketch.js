
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground,boy,tree,stone,bdg,string;
var m1,m2,m3,m4,m5,m6;

function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
	bdg = loadImage ("bdg.png")

}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (580,600,1500,10)
	stone = new Stone(120,500);


	m1=new Mango(800,250,6);
    m2=new Mango(950,250,6);
	m3=new Mango(900,200,7);
	m4=new Mango(950,160,8);
	m5=new Mango(1000,180,7);
	m6=new Mango(1100,300,6);
	m7=new Mango(1150,250,8);
	m8=new Mango(850,290,8);
	m9=new Mango(1050,260,8);
	m10=new Mango(900,150,7);
	m11=new Mango(1100,200,8);
	m12=new Mango(1000,120,8);

	string = new String(stone.body,{x:200 , y:440});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bdg);
	 
  if (keyIsPressed === true) {
	string.attach();
  }
  //imageMode (CENTER)
	image (boy ,150,350,250,350);
	image (tree,700,70,500,550);

	rectMode(CENTER);
  
	string.display();
	
	

	string.display();
	ground.display();
	stone.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	m7.display();
	m8.display();
	m9.display();
	m10.display();
	m11.display();
	m12.display();
	collision(stone,m1);
	collision(stone,m2);
	collision(stone,m3);
	collision(stone,m4);
	collision(stone,m5);
	collision(stone,m6);
	collision(stone,m7);
	collision(stone,m9);
	collision(stone,m10);
	collision(stone,m11);
	collision(stone,m12);
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function  mouseReleased(){
    string.fly();
}

function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}