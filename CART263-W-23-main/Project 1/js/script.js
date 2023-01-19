/**
pong
Damian
*/

"use strict";

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

function movePaddle(){
    if(keyIsDown(UP_ARROW)){
        Paddle2Y -= paddleSpeed;
    }
    if(keyIsDown(DOWN_ARROW)){
        Paddle2Y += paddleSpeed;
    }

  if(keyIsDown(87)){
        Paddle1Y -= paddleSpeed;
    }
    if(keyIsDown(83)){
        Paddle1Y += paddleSpeed;
    }
}

function drawScore(){
    textSize(50);
    textAlign(CENTER);
    text(p1Score + "-" + p2Score, wudth/2, 100);
}

