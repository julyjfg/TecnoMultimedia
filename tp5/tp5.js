/*
Julian Ferrari Goñi
93052/3
https://youtu.be/FAGbTAg2T_E
*/


let juego

  function setup() {
  createCanvas(windowWidth, windowHeight)
    rectMode(CENTER)
    textAlign(CENTER)
    juego= new Juego()
}

function draw() {
  juego.play()
}
function keyPressed() {
  juego.keyPressed()
}
function keyReleased() {
  juego.keyReleased()
}
function mousePressed() {
  juego.mousePressed()
}

function mouseMoved() {
  juego.mouseMoved()
}
