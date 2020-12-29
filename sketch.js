var bullet,wall;
var speed,weight,thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83)
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2); 

}

function draw() {
  background("black");
    

  drawSprites();

}

function hasCollided(bullet,wall) {
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
  if (damage > 10) {
    wall.shapeColor = "red";
  }
  if (damage < 10) {
    wall.shapeColor = "green";
  }
}


