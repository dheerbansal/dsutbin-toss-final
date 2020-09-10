var  ball1, obstacle1,obstacle2,obstacle3,ground, dustbinIMG, slingshot, obstacle4,dustbin, slingshot
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render

function preload(){
	dustbinIMG = loadImage("dustbingreen.png");
}


function setup() {
	createCanvas(1200, 800);

    engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(100,50,50);

	obstacle1 = new Target(835,720,20,120);
	obstacle1.visible = false
	//obstacle1.shapeColor = "white";
	obstacle2 =new Target(920,790,150,20);
	obstacle2.visible = false
	obstacle4 = new Target(400,500,30,20)
	//obstacle2.shapeColor = "white";
	obstacle3 = new Target(1000,720,20,150);
	obstacle3.visible = false
	//obstacle3.shapeColor = "white";

	dustbin = createSprite(950,700,400,750);
	dustbin.addImage(dustbinIMG);
	dustbin.scale = 0.6
	
	ground = new Ground(600,790,1200,20);
	ground.shapeColor = "purple";

	slingshot = new SlingShot(300,600,ball1.body)

	

	var render = Render.create({
		element:document.body,
		engine: engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	});
	Engine.run(engine);
  
}

function draw() {
Engine.update(engine)
  rectMode(CENTER);
  background("white");
  //ellipse();
  

  //keyPressed();

  ground.display();
  ball1.display();
  slingshot.display();
 // line(ball1.body.position.x,ball1.body.position.y,obstacle4.body.position.x,obstacle4.body.position.y)

  //slingshot.display();
  
 // obstacle1.display();
  //obstacle2.display();
  //obstacle3.display();
  
 
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   slingshot.fly();
}




