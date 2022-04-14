let bow, arrow, background, redB, greenB, blueB, arrowGroup;
let bowImage, arrowImage, green_balloonImage, red_balloonImage, blue_balloonImage, backgroundImage;
let score = 0;
let pontuacao = "Pontuação: ";
let edges, invisibleWall;
let gameState = "play";

function preload() {  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(400, 400);

  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5;

  invisibleWall = createSprite(377,200,0.5,400);
  invisibleWall.visible = false;

  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  redB = new Group();
  greenB = new Group();
  blueB = new Group();
  arrowGroup = new Group();
  
  edges = createEdgeSprites();
}

function draw() {
  drawSprites();

  if (gameState === "play") {
  scene.velocityX = -3;

  if (scene.x < 0){
    scene.x = scene.width/2;
  }

  bow.y = World.mouseY;

  if (bow.y <= 50) {
    bow.y = bow.height/2;
  } else if (bow.y >= 350) {
    bow.y = 350;
  }
 
  dificuldade();

  let select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 50 === 0) {
    if (select_balloon === 1) {
      redBalloon();
    } else if (select_balloon === 2) {
      greenBalloon();
    } else if (select_balloon === 3) {
      blueBalloon();
    } 
  }

  if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score +1;
  }

  if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score +1;
  } 

  if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score +1;
  }

  if (redB.isTouching(invisibleWall)) {
    score = score -1;
  }
  
  if (blueB.isTouching(invisibleWall)) {
    score = score -1;
  } 
  
  if (greenB.isTouching(invisibleWall)) {
    score = score -1;
  } 

  if (redB.isTouching(invisibleWall) && score <= 0) {
    gameState = "end";
  } 
  
  if (blueB.isTouching(invisibleWall) && score <= 0) {
    gameState = "end";
  } 
  
  if (greenB.isTouching(invisibleWall) && score <= 0) {
    gameState = "end";
  } 

  if (score <= 0) {
    score = 0;
  }

  text(pontuacao + score, 300,50);

 } else if (gameState === "end") {
   scene.velocityX = 0;
   redB.destroyEach();
   blueB.destroyEach();
   greenB.destroyEach();
   fill("black");
   text.scale = 5;
   text("GameOver!",190,180);
   fill("grey");
   text(pontuacao + score, 300,50);
 }
}

function redBalloon() {
  let red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 120;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  let blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 120;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  let green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 120;
  green.scale = 0.1;
  greenB.add(green);
}

function createArrow() {
  let arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 120;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}

function dificuldade() {

  if (keyDown("space") && World.frameCount % 70 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 80 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 81 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 82 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 83 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 84 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 85 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 86 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 87 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 88 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 89 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 90 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 91 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 92 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 93 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 94 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 95 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 96 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 97 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 98 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 99 === 0) {
    createArrow();  
  } else if (keyDown("space") && World.frameCount % 100 === 0) {
    createArrow();  
  } 
 }