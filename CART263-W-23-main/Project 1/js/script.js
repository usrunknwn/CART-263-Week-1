/**
pong
Damian
*/

"use strict";
/*
let p1Score = 0; 
let p2Score = 0;
let Paddle1Y;
let Paddle2Y;
let paddleSpeed = 5;
let paddleHeight = 30;

let cposteam1;

var ballX =0; 
var ballY = 0;
 var ballSize = 10; 
 var BallSpeedX;
 var BallSpeedY;

function setup() {
    createCanvas(500,500);


    Paddle1Y = height/2;
    Paddle2Y = height/2;
    SpawnBall();

}

function draw() {
background(100);
 paddleTeam1();
 paddleTeam2();
 ballMove();
 handleScore();
 movePaddle();

}

function handleScore(){
    if(ballX >= width){
        p1Score++;
        SpawnBall();
    } else if(ballX <= 0){
        p2Score++;
        SpawnBall();
    }
    print("SCORE" + p1Score + "" + p2Score);
}

function paddleTeam1(){
    fill(0,255,0);
    rect(10,Paddle1Y,10,paddleHeight);
}

function paddleTeam2(){
    fill(255,0,0);
    rect(width-10,Paddle2Y,10,paddleHeight);
}

function SpawnBall(){
    ellipseMode(CENTER);
    ballX = width/2;
    ballY = height/2;
    BallSpeedX = -3;
    BallSpeedY = 6;

    if(p1Score >= 10 || p2Score >= 10){
        BallSpeedX = 0;
        BallSpeedY = 0;
    }
}

function ballMove(){
    circle(ballX, ballY, ballSize);

    ballX += BallSpeedX;
   // ballY += BallSpeedY;
//creating a box saying less than these coordinates and more than coordinates 
    if(ballY >= 490 || ballY <= 10){
        BallSpeedY *= -1;
    }
    if(ballX>=490 && ballY >= Paddle2Y && ballY <= Paddle2Y + paddleHeight){
        BallSpeedX *= -1;
    }  
    if(ballX<=10 && ballY >= Paddle1Y && ballY <= Paddle1Y + paddleHeight){
        BallSpeedX *= -1;
    }
}

/*
function keyPressed(){
    if(keyCode == Up_ARROW){
        paddle2Y -= paddleSpeed;
    } else if (keyCode == DOWN_ARROW){
        paddle2Y += paddleSpeed;
    } else if (keyCode == 87){
        paddle1Y -= paddleSpeed;
    } else if (keyCode == 83){
        paddle1Y += paddleSpeed;
    }
 
}
*/

var change = 1;
var diam = 30;
var t;

var tf = false;

let ball = []; // Declare array
function setup() {
  createCanvas(1000, 1000);
  for (let i = 0; i < 500; i++) {
    ball[i] = new Particle();
  }
  t = 0;
}

function draw() {
  
  background(110, 112, 115);
  for (let i = 0; i < ball.length; i++) {
    ball[i].move();
    ball[i].display();
    //showing the ball values
  }
 

  beginLayer();
  stroke(0, 18);
  fill(18, 18, 18);

  var x1 = width * noise(t + 0);
  var x2 = width * noise(t + 25);
  var x3 = width * noise(t + 35);
  var x4 = width * noise(t + 45);
  var y1 = height * noise(t + 55);
  var y2 = height * noise(t + 65);
  var y3 = height * noise(t + 75);
  var y4 = height * noise(t + 85);

  // diameter change
  /*
  diam += change;
  if (diam > 30) {
    change = -change;
  } else if (diam < 20) {
    change = -change;
  }
*/
  stroke(0, 18);
  fill(50, 50, 50);
  rect(x1, y1, diam, diam, 5);
  rect(x1, y1, diam, diam, 5);
  stroke(0, 18);
  fill(70, 60, 60);
  rect(x2, y2, diam, diam, 5);
  rect(x1, y1, diam, diam, 5);
  stroke(0, 18);
  fill(80, 80, 80);
  rect(x3, y3, diam, diam, 5);
  rect(x1, y1, diam, diam, 5);
  stroke(0, 18);
  fill(70, 60, 60);
  rect(x4, y4, diam, diam, 5);
  rect(x1, y1, diam, diam, 5);

  t += 0.0007;
  endLayer();
}

function mousePressed() {
  background(110, 112, 115);
  for (let i = 0; i < ball.length; i++) {
    ball[i].move();
    ball[i].display();

    //showing the ball values
  }
}

class Particle {
  // constuctor is first instance called once (class setup)
  constructor() {
    this.x = random(height);
    this.y = random(width);
    this.speed = 5;
    this.diam = 30;
    //changing size of balls, diameter and speed arent definied because only for this instance (they are like let statements)

    this.timeAlive = 0;
  }
  move() {
    // each time move function operates time alive goes up by a value (time)
    this.timeAlive += 0.01;
  }
  display() {
    //changes color based on location
    noStroke();
    //* time.alive because its changing independent var by the time elapsed
    fill(0, 30 - this.timeAlive, 0);
    rect(this.x, this.y, this.diam, 90, 10);

    // diameter change
    this.diam += change;
    if (this.diam > 50) {
      change = -change;
    } else if (this.diam < 0) {
      change = -change;
    }
  }
}
