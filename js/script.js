let x = 300;

let dx = 5;

let y = 250;

let dy = 3;

let count1 = 0;

let count2 = 0;

let a = 1;

let y1 = 175;

let y2 = 175;

let platform_speed = 15;

function setup() {
  createCanvas(900, 500);
}

function draw() {
  background("#2E2E2E");

  //ball
  fill("#00FF40");
  ellipse(x, y, 40, 40);

  //left platform
  rect(20, y1, 30, 150);

  if (y > y1 && y < y1 + 150 && x < 50 && x > 30) {
    dx = -dx;
  }

  //right platform
  rect(width - 50, y2, 30, 150);

  if (y > y2 && y < y2 + 150 && x > width - 50 && x < width - 30) {
    dx = -dx;
  }
  if (x > width + 50) {
    count1 = count1 + 1;
    x = width / 2;
    y = height / 2;
  }

  if (x < 0) {
    count2 = count2 + 1;
    x = width / 2;
    y = height / 2;
  }

  if (y < 0 || y > height) {
    dy = -dy;
  }

  fill("#00FF40");
  textSize(50);
  text(count1, 150, 75);

  fill("#00FF40");
  textSize(50);
  text(count2, width - 150, 75);

  if (y > height + 50) {
    dy = 0;
    dx = 0;
    fill("#00FF40");
    textSize(50);
    text("GAME OVER!", 100, 275);
  }

  y = y + dy;
  x = x + dx;
}

function keyPressed() {
  if (keyCode == "87") {
    y1 = y1 - platform_speed;
  } else if (keyCode == "83") {
    y1 = y1 + platform_speed;
  }

  if (keyCode == UP_ARROW) {
    y2 = y2 - platform_speed;
  } else if (keyCode == DOWN_ARROW) {
    y2 = y2 + platform_speed;
  }
}
