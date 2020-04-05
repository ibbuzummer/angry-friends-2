const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig2,pig3;
var backgroundImg,platform;
var bird, slingshot,spring;

var gameState = "onSling";

var score = 0;
var pigboss="sprites/pigboss.png";
var terrorist="sprites/terrorist.png";
var skull="sprites/skull.png";
var pirate="sprites/pirate.png";
var bird="sprites/x.png";

function preload() {
     backgroundImg = loadImage("sprites/school.png");

    }

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350,pigboss);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220,skull);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    pig2 = new Pig(600,320,terrorist);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
  
    pirate = new Bird(200,50,pirate);
    slingshot = new SlingShot(pirate.body,{x:200, y:50});
    
    bird = new Bird(550,50,bird);
    spring = new Spring(bird.body,{x:550, y:150});
    
}

function draw(){
    background(125);
    background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("green")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();   
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    pig2.display();
    pig2.score();
    
    pirate.display();
    platform.display();
    
    bird.display();
    slingshot.display();
    spring.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(pirate.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(pirate.body);
       gameState="onSling";
    }
}

