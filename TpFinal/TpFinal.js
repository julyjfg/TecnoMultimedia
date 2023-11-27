let app

  function setup() {
  createCanvas(windowWidth, windowHeight)
    rectMode(CENTER)
    textAlign(CENTER)
    app=new App()
}


function draw() {
  background(0)
    app.play()
}

function keyPressed() {
 app.keyPressed()
 }
 function keyReleased() {
 app.keyReleased()
 }
function mousePressed() {
  app.mousePressed()
}

function mouseMoved() {
 app.mouseMoved()
 }
