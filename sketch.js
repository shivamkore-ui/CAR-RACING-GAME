var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;

var bronze, bronzeImg;
var gold, goldImg;
var silver, silverImg;
var f1, f1Img;
var f2,f2Img;

var passedFinish;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  bronzeImg = loadImage("images/bronze.png");
  goldImg = loadImage("images/gold.png");
  silverImg = loadImage("images/silver.png");
  f1Img = loadImage("images/f1.png");
  f2Img = loadImage("images/f1.png");

}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
  finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();

  var obstaclesXposition = random(200,950);
  var obstaclesYposition = random(-height*4, height)

  f1 = createSprite(obstaclesXposition, obstaclesYposition)
  f1.addImage(f1Img);

  f2 = createSprite(obstaclesXposition, obstaclesYposition)
  f2.addImage(f2Img);

}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
     console.log("End");
   }
 
   if(finishedPlayers === 4){
     game.end();
   }
  }
 
  
