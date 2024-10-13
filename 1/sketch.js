let snowflakes = []; // 存储所有的雪花
let coverProgress = 0; // 覆盖的进度

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); // 设置背景为黑色，雪花为白色

  // 生成新的雪花
  let t = frameCount / 60; // 更新时间
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // 在随机位置生成雪花
  }

  // 绘制所有雪花
  for (let flake of snowflakes) {
    flake.update(t); // 更新雪花的位置
    flake.display(); // 显示雪花
  }

  // 覆盖进度条，模拟雪逐渐覆盖
  fill(255, 255, 255, 150);
  noStroke();
  rect(0, 0, windowWidth, windowHeight * coverProgress); // 进度条逐渐填充

  // 当覆盖进度达到 100%，停止动画
  if (coverProgress >= 1) {
    noLoop(); // 停止 draw() 的循环
  }
}

// 雪花类
function snowflake() {
  this.posX = random(0, width);
  this.posY = random(-50, 0);
  this.size = random(2, 5);
  this.speed = random(0.5, 3);

  this.update = function(time) {
    this.posY += this.speed; // 雪花往下落
    // 重置雪花位置到顶部
    if (this.posY > height) {
      this.posY = random(-50, 0);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

// 模拟与他人对话并逐渐停止的过程
function mousePressed() {
  // 每次点击，覆盖的进度增加
  coverProgress += 0.1;
  if (coverProgress >= 1) {
    // 覆盖完成后停止对话
    noLoop();
  }
}


