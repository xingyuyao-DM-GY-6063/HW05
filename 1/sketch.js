function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 180, 255);
}

let xPeriodSec = 8;
let rPeriodSec = 1;
let yPeriodSec = 0.8;
let xSpeed = 5;
let xposC = 0;

function draw() {
  background(0);
  //this ellipse represent the old
  let yA = height / 8;
  fill("darkred");
  let xposA = 4 * frameCount;
  ellipse(xposA % width, yA, 25);

  //this ellipse represent the excitement
  let xAmplitude = width;
  let xOffset = 0;
  let xPeriod = xPeriodSec * getTargetFrameRate();

  let rAmplitude = 150;
  let rOffset = 10;
  let rPeriod = rPeriodSec * getTargetFrameRate();

  let xB = xAmplitude * (sin((TWO_PI / xPeriod) * frameCount) + 1) * 0.5;

  let yB = (height * 2) / 6;

  let r = rAmplitude * (sin((TWO_PI / rPeriod) * frameCount) + 1) * 0.5;
  fill("red");
  ellipse(xB + xOffset, yB, r + rOffset);

  //this ellipse represent doubt
  let xPeriodSecD = 0.5;
  let yPeriodSecD = 0.5;
  let xPeriodD = xPeriodSecD * getTargetFrameRate();
  let xD = xAmplitude * (sin((TWO_PI / xPeriod) * frameCount) + 1) * 0.5;

  let yAmplitude = height / 6;
  let yOffsetD = (height * 4) / 6;

  let yPeriodD = yPeriodSecD * getTargetFrameRate();
  let yD = yAmplitude * (cos((TWO_PI / yPeriodD) * frameCount) + 1) * 0.5;
  fill("BlueViolet");
  ellipse(xD + xOffset, yD + yOffsetD, 100);

  //this ellipse represent the young
  let xC = xposC; // Let x position increment with time

  let yOffsetC = (height * 3) / 6;

  // Vertical Oscillation
  let yPeriod = yPeriodSec * getTargetFrameRate();
  let yC = yAmplitude * (sin((TWO_PI / yPeriod) * frameCount) + 1) * 0.5;

  fill("pink");
  ellipse(xC, yC + yOffsetC, 40);

  // As each frame increases, the realization moves to the right
  xposC += xSpeed;

  // Reset xposC back to the initial position when the circle is out of the screen
  if (xposC > width) {
    xposC = 0;
  }
}
