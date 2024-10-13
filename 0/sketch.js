let second;
let minute;
let hour;


function setup() {
  let second = 0;
  let minute = 0;
  let hour = 0;
  rectMode(CENTER);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  angleMode(DEGREES); 
  let second = int(millis()/1000);
  let minute = int(second/60);
  let hour = int(minute/60);

  let sa = second * 6;
  let ma = minute * 6;
  let ha = hour * 15;

  background(180, 140, 140);
  translate(windowWidth / 2, windowHeight / 2); // 中心点为屏幕中心

  strokeWeight(3); // 设置描边粗细

  // 秒
  push();
  stroke(255, 204, 0); // 描边颜色
  fill(255, 102, 102); // 填充颜色
  rotate(sa);
  ellipse(0, 0, 150, 150); // 绘制椭圆形
  pop();
  
  // 分
  push();
  stroke(100, 255, 100);
  fill(102, 153, 255);
  rotate(ma);
  triangle(-75, 50, 0, -100, 75, 50); // 绘制三角形
  pop();

  // -秒
  push();
  stroke(255, 50, 150);
  fill(200, 100, 255);
  rotate(-sa);
  ellipse(0, 0, 80, 80); // 绘制较小的椭圆形
  pop();

  // 小时
  push();
  stroke(200, 200, 255);
  fill(50, 255, 200);
  strokeWeight(8); // 更粗的描边
  rotate(ha);
  rect(0, 0, 10, 400, 20); // 细长的矩形
  pop();
  
  // 中心圆
  push();
  stroke(0);
  fill(0, 150, 150);
  ellipse(0, 0, 30, 30); // 中心的固定圆
  pop();
}

