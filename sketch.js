const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, bg;
var ground;
var astronaut, astronautIMG;
var monster,monsterIMG;
var rock,rockIMG;

function preload() {
    bg = loadImage("Space.jpg");
   // astronautIMG = loadImage("Images/Astronaut.png");
    //monsterIMG = loadImage("Images/Monster.png");
    //rockIMG = loadImage("Images/Rock.jpg");

}

function setup(){
    var canvas = createCanvas(1600,displayHeight);
    engine = Engine.create();
    world = engine.world;
    astronaut = new Astronaut(200,200,30,30);

    if (mousePressedOver(ground)){
        console.log("qwerty");
    }

    monster = new Monster(1400,200,10,10);
    
   // monster.scale = 0.5
   //astronaut.addImage(astronautIMG);
    ground = new Ground(600,height,1900,20);
    
//display height is 766
//display width is 1366
}

function draw(){
background(bg);
Engine.update(engine);




ground.display();
monster.display();

//   display's for objects

astronaut.display();

}

/*function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

    if(keyCode===32){

        slingshot.attach(bird.body);

    }

}*/

function mousePressed(){
    rock = new Rock(mouseX,mouseY,30);

}
