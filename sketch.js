
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var score

var survivalTime;

var gameOver, gameOverImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
//creating Monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  survivalTime = 0;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  
  background(255);

  if(ground.x<0){
     ground.x = ground.width/2;
     
     }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  obstacle();
  
  if(foodGroup.isTouching(monkey)){
     foodGroup.destroyEach();
     
     }

  
  
  drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
}
function food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    
    banana.lifetime = 200;
    
    foodGroup.add(banana);
  }
  
}

function obstacle() {
  if (frameCount % 300 === 0) {
    var stone = createSprite(400,310,40,10);
    stone.addImage(obstacleImage);
    stone.scale = 0.2;
    stone.velocityX = -5;
    
    stone.lifetime = 200;
    
    obstacleGroup.add(stone);
  }
  
}

