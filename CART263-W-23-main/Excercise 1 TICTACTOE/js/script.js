/**
Pong
Damian Larice

Week 3
*/

"use strict";
/* 

FIRST PRACTICE WITH TWO BALLS MOVING 

let ball = []; // Declare object
let ball2;
function setup() {
 createCanvas(400, 400);
 ball = new Particle();
 ball2 = new Particle();
}
function draw() {
 background(200, 50, 100);
 ball.move();
 ball2.move();
 ball.display();
 ball2.display();
}
class Particle {
 constructor() {
 this.x = random(height);
 this.y = random(width);
 this.speed = 5;
 }
  move() {
  
 this.x += random(-this.speed, this.speed);
 this.y += random(-this.speed, this.speed);
 }
 display() {
 ellipse(this.x, this.y, 10);
 }

 }
*/

/*

BALLS MOVING AROUND

let ball = []; // Declare array
function setup() {
 createCanvas(400, 400);
 for(let i = 0; i < 50; i++){
 ball[i] = new Particle();
 }
}
 
function draw() {
 background(200,50,100);
 for(let i = 0; i < ball.length; i++){
 ball[i].move();
  ball[i].display();
  //showing the ball values
  print(ball[i].x);
 }
}

class Particle {
 constructor() {
 this.x = random(height);
 this.y = random(width);
 this.speed = 5;
 //changing size of balls, diameter and speed arent definied because only for this instance (they are like let statements)
 this.diameter = random(50);
 }
  move() {
  
 this.x += random(-this.speed, this.speed);
 this.y += random(-this.speed, this.speed);
 }
 display() {
  //changes color based on location
  noStroke();
  fill(this.x, this.y, this.diameter);
 ellipse(this.x, this.y, this.diameter);
 }

 }

 */

/*

THIS IS THE PRACTICE WE DID IN CLASS:
 - WITH MAKING CHANGE OVER TIME IN COLOR
 - MAKING SHAKE WITH MOUSE Y & Y
 - CLICK DISSAPERE
 - SPACE MAKE APPEAR


let ball = []; // Declare array
function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 50; i++) {
    ball[i] = new Particle();
  }
}

function draw() {
  background(100, 50, 90);
  for (let i = 0; i < ball.length; i++) {
    ball[i].move();
    ball[i].display();
    //showing the ball values
  }
}

class Particle {
  constructor() {
    this.x = random(height);
    this.y = random(width);
    this.speed = 5;
    //changing size of balls, diameter and speed arent definied because only for this instance (they are like let statements)
    this.diameter = random(50);
    this.timeAlive = 0;
  }
  move() {
    // map changes range from canvas size to 1 - 10, then with random we make the speed change based on mouse x and y
    var x = map(mouseX, 0, width, 1, 10);
    var y = map(mouseY, 0, height, 1, 10);
    this.x += random(-x, x);
    this.y += random(-y, y);

    // each time move function operates time alive goes up by a value (time)
    this.timeAlive += 0.001;
  }
  display() {
    //changes color based on location
    noStroke();
    //* time.alive because its changing independent var by the time elapsed
    fill(
      this.x * this.timeAlive,
      this.y * this.timeAlive,
      this.diameter * this.timeAlive
    );
    ellipse(this.x, this.y, this.diameter);
  }
}

function mousePressed() {
  for (var i = 0; i < ball.length; i++) {
    var currentBall = ball[i];
    if (
      //if mouse potition is bigger than one of the ball right or left side for x and top and bottom for y but not past the diameter
      mouseX >= currentBall.x &&
      mouseX <= currentBall.x + currentBall.diameter &&
      mouseY >= currentBall.y &&
      mouseY <= currentBall.y + currentBall.diameter
    ) {
      //start at "i" and delete "1". Splice defines
      ball.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (keyCode == 32) {
    //push adds 1 into an array
    ball.push(new Particle());
  }
}
// touch screen personality, touch things to make dissapere
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
  /*
  background(110, 112, 115);
  for (let i = 0; i < ball.length; i++) {
    ball[i].move();
    ball[i].display();
    //showing the ball values
  }
  */
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
  diam += change;
  if (diam > 30) {
    change = -change;
  } else if (diam < 20) {
    change = -change;
  }

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
