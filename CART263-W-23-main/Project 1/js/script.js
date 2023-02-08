/**
Project 1 Lost In the Forest 
Damian
*/

"use strict";
//VARIABLES
var change = 1;
var diam = 30;
var t;
var timealiive = 0;
var breath = 0;
var dark = 0;

var tf = false;
let ball = []; // Declare array

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 500; i++) {
    ball[i] = new Particle();
  }
  t = 0;
}

function draw() {
  background(30, 35, 35);
  /*
  for (let i = 0; i < ball.length; i++) {
    ball[i].move();
    ball[i].display();
    //showing the ball values
  }
*/
  //FOG: from https://genekogan.com/code/p5js-perlin-noise/
  for (var x = 0; x < width; x += 10) {
    for (var y = 0; y < height; y += 10) {
      var c = 70 * noise(0.01 * x, 0.01 * y) + timealiive;
      fill(c);
      rect(x, y, 10, 10);
    }
  }
  //CHANGE IN COLOR
  timealiive += 0.03;

  print(c);


  beginLayer();

  stroke(0, 18);
  fill(18, 18, 18);

  // X&Y CHANGE: defining how x and y changes overtime
  var x1 = width * noise(t + 0);
  var x2 = width * noise(t + 25);
  var x3 = width * noise(t + 35);
  var x4 = width * noise(t + 45);
  var y1 = height * noise(t + 55);
  var y2 = height * noise(t + 65);
  var y3 = height * noise(t + 75);
  var y4 = height * noise(t + 85);

  // diameter change
  breath += 0.02;
  diam += change;
  if (diam > 10 + breath) {
    change = -change;
  } else if (diam < 10) {
    change = -change;
  }
  //COLOR CHANGE
  dark += 0.03;

  //TREE BRANCH: defining square rec values and inputting the change in x and y val
  stroke(0, 18);
  fill(55-dark, 55-dark, 55-dark);
  rect(x1, y1, diam, diam, 5);
  rect(x1, y1, diam, diam, 5);
  stroke(0, 18);
  fill(63-dark, 55-dark, 50-dark);
  rect(x2, y2, diam, diam, 5);
  rect(x1, y1, diam, diam, 5);
  stroke(0, 18);
  fill(80-dark, 80-dark, 80-dark);
  rect(x3, y3, diam, diam, 5);
  rect(x1, y1, diam, diam, 5);
  stroke(0, 18);
  fill(53-dark, 55-dark, 50-dark);
  rect(x4, y4, diam, diam, 5);
  fill(53-dark, 50-dark, 50-dark);
  rect(x1, y1, diam, diam, 5);

  //SPEED OF BRANCH
  t += 0.002;
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
