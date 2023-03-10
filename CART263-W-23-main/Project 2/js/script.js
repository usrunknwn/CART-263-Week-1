//Defining global variables

let table;
let dataPoints = [];
let categoryNames = ["Physical Harm", "Dependence", "Social Harm"];

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
    fill(90, 200, 130, 8);
    rect(50, -280, table.getString(1, 2) * 10, table.getString(1, 2) * 10, 10);
  }
  //Drawing titles for each name 
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


//Call to draw the functions 
  for (var i = 0; i < dataPoints.length; i++) {
    dataPoints[i].drawBasic();
    dataPoints[i].drawTitle();
  }

}



