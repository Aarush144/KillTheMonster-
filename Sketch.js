const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// world and engine 
var engine, world;

// boxes 
var box1, box2, box3,box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, 
box18, box19, box20, box21, box22,box23, box24, box25, box26, box27,box28,box29,box30;


var hero,monster,rope,ground;
var bg;


// load images function 
function preload() {
  bg = loadImage("gamingbackground2.png");
}



function setup() {
  // canvas 
  createCanvas(windowWidth, windowHeight);


  // creating engine 
  engine = Engine.create();
  // world
  world = engine.world;

  // ground 
  ground = new Ground(600, windowHeight-50, windowWidth-400, 20);

  // hero and villan 
  hero = new Hero(200,400,250);
  monster = new Monster(1100,550,300);

  // sling 
  rope = new Rope(hero.body, { x: 500, y: 50 });

  // 1st row 
  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box23 = new Box(900, 100, 70, 70);
  box24 = new Box(900, 100, 70, 70);

  //------------------------------------------------------------

  // 2nd row
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(800, 100, 70, 70);
  box25 = new Box(800, 100, 70, 70);
  box26 = new Box(800, 100, 70, 70);
  
  // -----------------------------------------------
 
  //3rd row
  box12 = new Box(700, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box27 = new Box(700, 100, 70, 70);
  box28 = new Box(700, 100, 70, 70);

 // --------------------------------------------

 // 4th row
  box17 = new Box(600, 100, 70, 70);
  box18 = new Box(600, 100, 70, 70);
  box19 = new Box(600, 100, 70, 70);
  box20 = new Box(600, 100, 70, 70);
  box21 = new Box(600, 100, 70, 70);
  box22 = new Box(600, 100, 70, 70);
  box29 = new Box(600, 100, 70, 70);
  box30 = new Box(600, 100, 70, 70);

}




function draw() {

  // backgroud 
  background(bg);

  // updating engie 
  Engine.update(engine);

  // ground 
  ground.display();

  // displaying all blocks 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();      
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();      
  box28.display();
  box29.display();
  box30.display();
    

  // hero villan and rope 
  hero.display();
  rope.display();
  monster.display();

}



// function 
function mouseDragged() {
//postion of hero's body in hand of mouse 
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});

}