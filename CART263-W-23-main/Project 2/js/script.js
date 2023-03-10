//Defining global variables

let table;
let dataPoints = [];

//Loading our CSV as a table
function preload() {
  table = loadTable("recdrugs.csv", "csv");
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  //Go through each row and column
  for (let r = 1; r < table.getRowCount(); r++) {
    let substance = table.getString(r, 0);
    let physicalHarm = parseFloat(table.getString(r, 1));
    let dependence = parseFloat(table.getString(r, 2));
    let socialHarm = parseFloat(table.getString(r, 3));

    console.log(table.getString(0, 2));
    dataPoints.push(
      new DataPoint(substance, physicalHarm, dependence, socialHarm)
    );
  }
}

//change in order of substances -> shape
//look into icons and background, also 1 topic
// draw graph x3 to show each category independently
//then dont have all substance names or numbers and just show names if you hover. look into

//Class to define objects
class DataPoint {
  constructor(substance, physicalHarm, dependence, socialHarm) {
    this.Substance = substance;
    this.PhysicalHarm = physicalHarm;
    this.Dependence = dependence;
    this.SocialHarm = socialHarm;
  }

  drawBasic() {
    stroke(200, 200, 200);
    strokeWeight(4);
    beginShape();
    //Physical Harm Rep
    fill(200, 200, 200, 8);
    rect(
      -225,
      -270,
      table.getString(1, 2) * 10,
      table.getString(1, 2) * 10,
      10
    );
    //Social Harm Rep
    stroke(90, 230, 220);
    fill(90, 230, 220, 8);
    rect(200, -270, table.getString(1, 2) * 10, table.getString(1, 2) * 10, 10);

    //Dependence Rep
    stroke(90, 220, 130);
    fill(200, 200, 200, 8);
    rect(50, -280, table.getString(1, 2) * 10, table.getString(1, 2) * 10, 10);
  }
  drawTitle() {
    noStroke();
    fill(0);
    textSize(15);
    textAlign(CENTER, CENTER);
    text(table.getString(0, 1), -210, -280);
    text(table.getString(0, 2), 0, -280);
    text(table.getString(0, 3), 210, -280);
  }
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  //Defining shape/circular radar graph variables
  let noVertices = dataPoints.length;
  console.log(dataPoints.length);
  let angleIncrement = 360 / noVertices;

  // Draw axis lines
  stroke(200);
  strokeWeight(1);
  //Loop draw lines = "noVerticies" or draw no of lines from 0 - whatever about of rows
  for (let i = 0; i < noVertices; i++) {
    //Draw lines in a circle)
    let angle = i * angleIncrement;
    let x = cos(angle) * (150 * 1.5);
    let y = sin(angle) * (150 * 1.5);
    line(0, 0, x, y);
    push();
    stroke(200);
    strokeWeight(1);
    noFill();
    ellipse(0, 0, 56 * 2, 56 * 2);
    ellipse(0, 0, 56 * 4, 56 * 4);
    ellipse(0, 0, 56 * 6, 56 * 6);
    ellipse(0, 0, 56 * 8, 56 * 8);

    pop();
  }

  // Draw data Physical Harm
  stroke(200, 200, 200);
  strokeWeight(4);
  beginShape();
  fill(200, 200, 200, 70);
  for (let i = 0; i < noVertices; i++) {
    let angle = i * angleIncrement;
    let value = dataPoints[i].PhysicalHarm;
    let x = cos(angle) * (value * 50 * 1.5);
    let y = sin(angle) * (value * 50 * 1.5);
    vertex(x, y);
  }
  endShape(CLOSE);

  // Draw data Dependence Harm
  stroke(90, 220, 130);
  strokeWeight(4);
  beginShape();
  noFill();
  fill(90, 220, 130, 70);
  for (let i = 0; i < noVertices; i++) {
    let angle = i * angleIncrement;
    let value = dataPoints[i].Dependence;
    let x = cos(angle) * (value * 50 * 1.5);
    let y = sin(angle) * (value * 50 * 1.5);
    vertex(x, y);
  }
  endShape(CLOSE);

  // Draw data Social Harm
  stroke(90, 230, 220);
  strokeWeight(4);
  beginShape();
  noFill();
  fill(90, 230, 220, 70);
  for (let i = 0; i < noVertices; i++) {
    let angle = i * angleIncrement;
    let value = dataPoints[i].SocialHarm;
    let x = cos(angle) * (value * 50 * 1.5);
    let y = sin(angle) * (value * 50 * 1.5);
    vertex(x, y);
  }
  endShape(CLOSE);

  // Draw data point labels

  noStroke();
  fill(0);
  textSize(10);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < noVertices; i++) {
    let angle = i * angleIncrement;
    let x = cos(angle) * 170 * 1.5;
    let y = sin(angle) * 170 * 1.5;
    text(dataPoints[i].Substance, x, y);
  }

  // Labels for ratings
  noStroke();
  fill(0);
  textSize(8);
  textAlign(CENTER, CENTER);
  text("3.00", 10, -224);
  text("2.25", 10, -168);
  text("1.50", 10, -112);
  text("0.75", 10, -55);
  text("0.00", 10, -8);

  for (var i = 0; i < dataPoints.length; i++) {
    dataPoints[i].drawBasic();
    dataPoints[i].drawTitle();
  }
}

/* THIS IS SUPPOSED TO BE 20 SIDED POLYGON CALL FUNCTION BUT NOT WORKIE
function polygon(x, y, radius, npoints) {
  let uhh = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += uhh) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
*/

//Object constructor refrence

// let table;
// let points = [];
// function preload() {
//   table = loadTable("EVA_Data.csv", "csv", "header");
// }
// function setup() {
//   createCanvas(800, 800);
//   background(0);
//   for (var r = 0; r < table.getRowCount(); r++) {
//     // Cycle through each row of the table
//     points[r] = new DataPoint(
//       table.getString(r, 1),
//       table.getString(r, 2),
//       table.getString(r, 4),
//       table.getString(r, 3),
//       table.getString(r, 0)
//     );
//     // Pass through the values in each row
//   }
// }
// class DataPoint {
//   constructor(country, name, duration, ID) {
//     // Add each data point to the object
//     this.country = country;
//     this.duration = duration;
//     this.name = name;
//     this.ID = ID;
//     this.x;
//     this.y;
//   }
//   drawBasic() {
//     this.x = random(width);
//     this.y = random(height);
//     noStroke();
//     ellipse(random(width), random(height), int(this.duration) * 3);
//   }
//   drawCircle() {
//     this.radius = 150;
//     this.t = 0;
//     this.angle = map(this.ID, 0, table.getRowCount(), 0, 1) * Math.PI * 2;
//     this.x = Math.cos(this.angle) * this.radius + width / 2;
//     this.y = Math.sin(this.angle) * this.radius + height / 2;
//     noStroke();
//     fill(0, 200, 20, 40);
//     ellipse(this.x, this.y, int(this.duration) * 3);
//     fill(0, 100, 200);
//     textSize(5);
//     push();
//     if (this.angle > Math.PI / 2 && this.angle < Math.PI * 1.5) {
//       this.t = textWidth(this.name);
//       fill(255, 0, 0);
//       translate(this.x, this.y);
//       rotate(this.angle + Math.PI);
//     } else {
//       translate(this.x, this.y);
//       rotate(this.angle);
//     }
//     text(this.name, 0 - this.t, 0);
//     pop();
//   }
// }

// function draw() {
//   background(0);
//   for (var i = 0; i < points.length; i++) {
//     points[i].drawBasic();
//     points[i].drawCircle();
//   }
// }
