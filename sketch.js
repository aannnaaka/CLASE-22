//Coloca el nombre del motor, mundo y cuerpos del motor fisico
const Engine = 
const World = 
const Bodies = 
const Constraint = 
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;

function preload() {

//carga la imagen del fondo
  backgroundImg = ("");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

//crea la torre y agrégala al mundo

}

function draw() {
  
//coloca el fondo
  
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  

  push();
  imageMode(CENTER);

 //crea una imagen normal para la torre 
 
  pop();  
}
