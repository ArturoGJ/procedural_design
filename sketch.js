let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  let n = random(1);
  diagonales(n, x, y);
  if (x > 400) {
    x = 0;
    y += 30;
  } else if(y > 400){
    background(220);
    x = 0;
    y = 0;
  } else
    x += 30;
}

function diagonales(n, x, y) {
  
  strokeWeight(2);
  if (n < 0.5) {
    line(x, y, x + 30, y + 30);
  } else {
    line(x + 30, y, x, y + 30);
  }
}

function cuadrados(n, x, y) {
  noStroke();
  if(n < 0.5){
    fill(0);
    rect(x, y, 30, 30);
  }else{
    fill(220);
    rect(x, y, 30, 30);
  }
}