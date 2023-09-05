let pantallas
let okTiempo, okVidas, okArriba, okAbajo, okIzquierda, okDerecha,okDisparo
let posXDelJugador, posYDelJugador, posXDatos, posYDatos
let w, h
let tamanio
let vidas = []
let balasX= []
  function setup() {
    
    w=window.innerWidth
    h=window.innerHeight
    
    pantallas=1
    tamanio=100
    posXDelJugador=100
    posYDelJugador=400
    
    okTiempo=false
    okVidas=false
    
    textSize(100)
    textAlign(CENTER)
    
    for(let i=0; i<balasX.length;i++){
      balasX[i]= windowWidth
    }
    
    createCanvas(w, h)
}

function draw() {

  programa()
}

function mousePressed() {
  pantallas++
    print(mouseX, mouseY)
    if (pantallas==5) {
    pantallas=1;
  }
}
function keyPressed() {
  if ((key=="A")||(key=="a")) {
    okIzquierda=true
  }
  if ((key=="D")||((key=="d"))) {
    okDerecha=true
  }
  if ((key=="W")||((key=="w"))) {
    okArriba=true
  }
  if ((key=="S")||((key=="s"))) {
    okAbajo=true
  }
  if(key==" "){
  okDisparo=true
  }
}
function keyReleased() {
  if ((key=="A")||(key=="a")) {
    okIzquierda=false
  }
  if ((key=="D")||((key=="d"))) {
    okDerecha=false
  }
  if ((key=="W")||((key=="w"))) {
    okArriba=false
  }
  if ((key=="S")||((key=="s"))) {
    okAbajo=false
  }
  if(key==" "){
  okDisparo=false
  }
}
