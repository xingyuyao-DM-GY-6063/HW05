let second;
let minute;
let hour;
function star(x, y, w, c) {
  let r = w / 2;
  push();
  translate(x, y);

  line(c, -c, r, 0);
  line(c, c, r, 0);

  line(-c, c, 0, r);
  line(c, c, 0, r);

  line(-c, -c, -r, 0);
  line(-c, c, -r, 0);

  line(-c, -c, 0, -r);
  line(c, -c, 0, -r);
  pop();
}

function setup() {
  let second = 0;
  let minute = 0;
  let hour = 0;
  rectMode(CENTER);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  angleMode(DEGREES);
  let second = int(millis() / 1000);
  let minute = int(second / 60);
  let hour = int(minute / 60);

  let sa = second * 6;
  let ma = minute * 6;
  let ha = hour * 15;

  background(133, 58, 27);
  translate(windowWidth / 2, windowHeight / 3); // The center point
  strokeWeight(5);

  // secend
  push();
  stroke(6, 170, 170);
  fill(6, 170, 170);
  rotate(sa);
  star(0, 0, 80, 100); // Draw a star
  pop();

  // minute
  push();
  stroke(237, 217, 96);
  noFill();
  rotate(ma);
  triangle(-50, 50, 0, -50, 50, 50); // draw a triangle
  pop();

  // hour
  push();
  stroke(237, 217, 96);
  noFill();
  strokeWeight(5);
  rotate(ha);
  rect(0, 205, 10, 400, 20);
  pop();

  //central ellipse
  push();
  stroke(6, 170, 170);
  noFill();
  ellipse(0, 10, 30, 30);
  pop();
}
