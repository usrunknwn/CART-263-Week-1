/**
Rec Drug CSV - Data Viz
Damian
*/

// let table;
// let points = [];
// let numPoints = 0;
// let angle = 0;

// function preload() {
//   table = loadTable("recdrugs.csv", "csv", "header");
// }

// function setup() {
//   createCanvas(800, 800);
//   background(200, 255, 200);
  
//   numPoints = table.getRowCount();
  
//   // Cycle through each row of the table
//   for (let r = 0; r < numPoints; r++) {
//     points[r] = new DataPoint(
//       table.getString(r, 0),
//       table.getNum(r, 1),
//       table.getNum(r, 2),
//       table.getNum(r, 3)
//     );
//   }
  
//   class DataPoint {
//     constructor(Substance, PhysicalHarm, Dependence, SocialHarm) {
//       // Add each data point to the object
//       this.Substance = Substance;
//       this.Dependence = Dependence;
//       this.PhysicalHarm = PhysicalHarm;
//       this.SocialHarm = SocialHarm;
//     }
//   }

//   // Define the center of the graph
//   let centerX = width / 2;
//   let centerY = height / 2;
  
//   // Define the radius of the graph
//   let radius = min(width, height) / 2 - 100;
  
//   // Draw the spider graph
//   push();
//   translate(centerX, centerY);
//   stroke(0);
//   strokeWeight(1);
//   noFill();
  
//   // Draw the axis lines
//   for (let i = 0; i < 4; i++) {
//     angle = i * TWO_PI / 4;
//     line(0, 0, radius * cos(angle), radius * sin(angle));
//   }
  
//   // Draw the labels
//   textAlign(CENTER, CENTER);
//   textSize(12);
//   for (let i = 0; i < 4; i++) {
//     angle = i * TWO_PI / 4;
//     let x = radius * cos(angle);
//     let y = radius * sin(angle);
//     text(points[0][i + 1], x, y - 20);
//   }
  
//   // Draw the data points
//   strokeWeight(5);
//   for (let i = 0; i < numPoints; i++) {
//     let dataPoint = points[i];
//     let values = [dataPoint.PhysicalHarm, dataPoint.Dependence, dataPoint.SocialHarm, dataPoint.PhysicalHarm];
//     let coords = [];
//     for (let j = 0; j < values.length; j++) {
//       angle = j * TWO_PI / 4 - HALF_PI;
//       let r = map(values[j], 0, 4, 0, radius);
//       let x = r * cos(angle);
//       let y = r * sin(angle);
//       coords.push([x, y]);
//     }
//     beginShape();
//     for (let j = 0; j < coords.length; j++) {
//       vertex(coords[j][0], coords[j][1]);
//     }
//     endShape(CLOSE);
//   }
//   pop();
// }
// Make a p5js radar graph from code using following csv data

// Substance,PhysicalHarm,Dependence,SocialHarm
// Heroin,2.78,3,2.54
// Cocaine,2.33,2.39,2.17
// Barbiturates,2.23,2.01,2
// Street Methadone,1.865,2.08,1.87
// Alcohol ,1.4,1.93,2.21
// Ketamine,2,1.54,1.69
// Benzodiacepines,1.63,1.83,1.65
// Amphetamine,1.81,1.67,1.5
// Tobacco,1.24,2.21,1.42
// Burenorphine,1.6,1.64,1.49
// Cannabis,0.99,1.51,1.5
// Solvents,1.28,1.01,1.52
// 4-MTA,1.44,1.3,1.06
// LSD,1.13,1.23,1.32
// Methylphenidate,1.32,1.25,0.97
// Anabolic steroids,1.45,0.88,1.13
// GHB,0.86,1.19,1.3
// Ecstasy,1.05,1.13,1.09
// Alkyl nitrites ,0.93,0.87,0.97
// Khat,0.5,1.04,0.85


// let table;
// function preload() {
//  table = loadTable("recdrugs.csv", "csv", "header");
// }
// function setup() {
//  createCanvas(500, 500);
// //  console.log(table.getRowCount() + " total rows in table");
// //  console.log(table.getColumnCount() + " total columns in table");
// //  console.log(table.getColumn("Substance"));
//  // use a nested for loop to cycle through the table's cells
//  for (var r = 0; r < table.getRowCount(); r++){
//  for (var c = 0; c < table.getColumnCount(); c++) {
//  console.log(table.getString(r, c));
//  }
//  }
// }

// //Put it into an object
//  for (var r = 0; r < table.getRowCount(); r++){ // Cycle through each row of the table
//  points[r] = new DataPoint(
//   table.getString(r, 1),
//  table.getString(r, 2),
//  table.getString(r, 1),
//  table.getString(r, 0));
//  // Pass through the values in each row
//  }
// class DataPoint {
//  constructor(Substance, PhysicalHarm, Dependence, SocialHarm){
//  // Add each data point to the object
//  this.Substance = Substance;
//  this.PhysicalHarm = PhysicalHarm;
//  this.Dependence = Dependence;
//  this.SocialHarm = SocialHarm;
//  this.x;
//  this.y;
//  }
// }
let table;
let dataPoints = [];

function preload() {
  table = loadTable("recdrugs.csv", "csv", "header");
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  for (let r = 0; r < table.getRowCount(); r++) {
    let substance = table.getString(r, 0);
    let physicalHarm = parseFloat(table.getString(r, 1));
    let dependence = parseFloat(table.getString(r, 2));
    let socialHarm = parseFloat(table.getString(r, 3));

    dataPoints.push(new DataPoint(substance, physicalHarm, dependence, socialHarm));
  }
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  let numVertices = dataPoints.length;
  let angleIncrement = 360 / numVertices;

  // Draw axis lines
  stroke(200);
  strokeWeight(1);
  for (let i = 0; i < numVertices; i++) {
    let angle = i * angleIncrement;
    let x = cos(angle) * (150*1.5);
    let y = sin(angle) * (150*1.5);
    line(0, 0, x, y);
    push();
  stroke(200);
  strokeWeight(1);
  noFill();
  ellipse(0, 0, 56*2, 56*2);
  ellipse(0, 0, 56*4, 56*4);
  ellipse(0, 0, 56*6, 56*6);
  ellipse(0, 0, 56*8, 56*8);
  
  pop();


  }
 


  // Draw data Physical Harm 
  stroke(200, 200, 200);
  strokeWeight(4);
  beginShape();
  fill(200, 200, 200, 70);
  for (let i = 0; i < numVertices; i++) {
    let angle = i * angleIncrement;
    let value = dataPoints[i].PhysicalHarm;
    let x = cos(angle) * (value * 50*1.5);
    let y = sin(angle) * (value * 50*1.5);
    vertex(x, y);
  }
  endShape(CLOSE);

  // Draw data Dependence Harm 
  stroke(90, 220, 130);
  strokeWeight(4);
  beginShape();
  noFill();
  fill(90, 220, 130, 70);
  for (let i = 0; i < numVertices; i++) {
    let angle = i * angleIncrement;
    let value = dataPoints[i].Dependence;
    let x = cos(angle) * (value * 50*1.5);
    let y = sin(angle) * (value * 50*1.5);
    vertex(x, y);
  }
  endShape(CLOSE);
   
  // Draw data Social Harm 
    stroke(90, 230, 220);
    strokeWeight(4);
    beginShape();
    noFill();
    fill(90, 230, 220, 70);
    for (let i = 0; i < numVertices; i++) {
      let angle = i * angleIncrement;
      let value = dataPoints[i].SocialHarm;
      let x = cos(angle) * (value * 50*1.5);
      let y = sin(angle) * (value * 50*1.5);
      vertex(x, y);
    }
    endShape(CLOSE);

  // Draw data point labels
  
  noStroke();
  fill(0);
  textSize(10);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < numVertices; i++) {
    let angle = i * angleIncrement;
    let x = cos(angle) * 170*1.5;
    let y = sin(angle) * 170*1.5;
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
class DataPoint {
  constructor(substance, physicalHarm, dependence, socialHarm) {
    this.Substance = substance;
    this.PhysicalHarm = physicalHarm;
    this.Dependence = dependence;
    this.SocialHarm = socialHarm;
  }
}


