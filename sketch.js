var x;

var uterus1X = 0;
var uterus1Y = 100;

var boob2X = 670;
var boob2Y = 150;

var purse3X = 0;
var purse3Y = 200;

var heels4X = 670;
var heels4Y = 250;

var bell5X = 0;
var bell5Y = 300;

var img;

function preload() {
  uterus = loadImage("assets/uterus1.png");
  boob = loadImage("assets/boob2.png");
  purse = loadImage("assets/purse3.png");
  heels = loadImage("assets/heels4.png");
  bell = loadImage("assets/bell5.png");
}

function mouseDragged() {
  if (mouseX > uterus1X - 50 && mouseX < uterus1X + 50) {
    if (mouseY > uterus1Y - 50 && mouseY < uterus1Y + 50) {
      uterus1X = mouseX;
      uterus1Y = mouseY;
    }
  }
  if (mouseX > boob2X - 50 && mouseX < boob2X + 50) {
    if (mouseY > boob2Y - 50 && mouseY < boob2Y + 50) {
      boob2X = mouseX;
      boob2Y = mouseY;
    }
  }
  if (mouseX > purse3X - 50 && mouseX < purse3X + 50) {
    if (mouseY > purse3Y - 50 && mouseY < purse3Y + 50) {
      purse3X = mouseX;
      purse3Y = mouseY;
    }
  }
  if (mouseX > heels4X - 50 && mouseX < heels4X + 50) {
    if (mouseY > heels4Y - 50 && mouseY < heels4Y + 50) {
      heels4X = mouseX;
      heels4Y = mouseY;
    }
  }
  if (mouseX > bell5X - 50 && mouseX < bell5X + 50) {
    if (mouseY > bell5Y - 50 && mouseY < bell5Y + 50) {
      bell5X = mouseX;
      bell5Y = mouseY;
    }
  }
}

let bg;
let y = 0;

function setup() {
  bg = loadImage("assets/operation.jpg");
  createCanvas(720, 400);
}

function draw() {
  background(bg);

  y++;
  if (y > height) {
    y = 0;
  }

  if (mouseX < 50 && mouseY < 50) {
    cursor("assets/tweezers.jpg");
  }

  image(uterus, uterus1X, uterus1Y, 50, 50);
  image(boob, boob2X, boob2Y, 50, 50);
  image(purse, purse3X, purse3Y, 50, 50);
  image(heels, heels4X, heels4Y, 50, 50);
  image(bell, bell5X, bell5Y, 50, 50);

  if (mouseX > 160 && mouseX < 210) {
    if (mouseY > 350 && mouseY < 400) {
      fill(0);
      text("Which will you pick?", 100, 150);
    }
  }
  if (mouseX > 350 && mouseX < 600) {
    if (mouseY > 100 && mouseY < 400) {
      fill(0);
      text("When will it change?", 100, 150);
    }
  }
  if (mouseX > 300 && mouseX < 510) {
    if (mouseY > 250 && mouseY < 300) {
      fill(0);
      text("Dont mess up?", 100, 150);
    }
  }
}
