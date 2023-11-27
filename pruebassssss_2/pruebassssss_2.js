let aventura;
let imgFondo = [];
let lineas = [];


function setup() {
  createCanvas(600, 600);
  aventura = new Aventura();
}

function draw() {
  aventura.dibujar();
}

function mousePressed() {
  aventura.click();
}
