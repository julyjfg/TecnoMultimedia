let juego
  let personaje
  function setup() {
  createCanvas(windowWidth, windowHeight)
    juego= new Juego()
    personaje = new Personaje()
}


function draw() {
  background(127)
    personaje.dibujar()
}

function keyPressed() {
  personaje.keyPressed()
}
function keyReleased() {
  personaje.keyReleased()
}
