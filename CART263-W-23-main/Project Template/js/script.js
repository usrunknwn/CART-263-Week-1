/**
Pong
Damian Larice

This is a tic tac toe game created on p5js for CART 263 project 1
*/

"use strict";

var clicks = 0;

let reset;
let p1score =0;
let p2score =0;


let p1;
let p2;

let xscore;
let oscore;

let size;
var square = "white"; 
var state = [square, square, square, square, square, square, square, square, square];




function preload() {


}




function setup() {
  
  createCanvas(1500, 1500);
  size = width / 3;


  background(220);
  var index = 0; 
  for (var row = 0; row < 3; row++) {
    for (var column = 0; column < 3; column++) {
      // 1 big black square with many white squares
        fill(state[index]);
        rect(column*size, row*size, size, size);
        index = index + 1;
    }
  }
  push();
  reset = createButton('reset');
  reset.size(200,100);
  reset.style("font-family", "Bodoni");
  reset.style("font-size", "48px");
  reset.position(0, 0);
  reset.mousePressed(changeBG);
  pop();

  push();
  xscore = createButton('X SCORE');
  xscore.size(200,150);
  xscore.style("font-family", "Bodoni");
  xscore.style("font-size", "48px");
  xscore.position(250, 0);
  xscore.mousePressed(changeP1S);
  pop();

  push();
  oscore = createButton('O SCORE');
  oscore.size(200,150);
  oscore.style("font-family", "Bodoni");
  oscore.style("font-size", "48px");
  oscore.position(500, 0);
  oscore.mousePressed(changeP2S);
  pop();



  


}



function draw() {

}


function mousePressed(){
  
  clicks++;
  if (clicks%2 ){
    textSize(400);
    fill(0,0,0);
    textAlign(CENTER, CENTER);
    text('X', mouseX,mouseY);
  } else {
    textSize(400);
    fill(0,0,0);
    textAlign(CENTER, CENTER);
    text('O', mouseX,mouseY);
  }
 

}

function  changeBG(){
  var index = 0; 
  for (var row = 0; row < 3; row++) {
    for (var column = 0; column < 3; column++) {
      // 1 big black square with many white squares
        fill(state[index]);
        rect(column*size, row*size, size, size);
        index = index + 1;
    }
  }
}

function changeP1S(){
  p1score = p1score+1;
  xscore.html(p1score);

}

function changeP2S(){
  p2score = p2score+1;
  oscore.html(p2score);

}