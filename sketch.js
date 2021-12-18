var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost=createSprite(300,300)
  ghost.addImage("ghost",ghostImg)
  ghost.scale=0.5
}

function draw() {
  background(200);
  ghost.velocityY=ghost.velocityY+0.5
  if (keyDown("space")) {
    ghost.velocityY=-5
  }
  if (keyDown(RIGHT_ARROW)) {
    ghost.x=ghost.x+5
  }
  if (keyDown(LEFT_ARROW)) {
    ghost.x=ghost.x-5
  }
  if(tower.y > 400){
      tower.y = 300
    }
    spawnDoors()
    drawSprites()
}
function spawnDoors(){
  if (frameCount%240==0) {
    door=createSprite(Math.round(random(100,500)),-50)
    door.addImage(doorImg)
    door.velocityY=1
    door.lifetime=800
    doorsGroup.add(door)
    climber=createSprite(door.x,10)
    climber.addImage(climberImg)
    climber.velocityY=1
    climber.lifetime=800
    climbersGroup.add(climber)
  }
}
