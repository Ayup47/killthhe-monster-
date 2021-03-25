const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var hero;

function preload() {

}

function setup() {
  createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;
 
    ground = new Ground(400,440,800,10);
    
    hero = new Hero(200,170,50);





  }

function draw() {
  background(0);
  Engine.update(engine);
  
  ground.display();
  hero.display();
}

