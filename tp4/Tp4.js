let pantallas
let okTiempo, okVidas, okArriba, okAbajo, okIzquierda, okDerecha,okDisparo, okGano
let posXDelJugador, posYDelJugador,posXDelDisparo, posYDelDisparo, posXDatos, posYDatos,posXBoton
let w, h
let tamanio,ancho, alto
let vidas = []
let balasX= []
let tiempoEnPantalla
let segundos 
let minutos
let intervalo
let colorBoton,colorTexto

function setup() {
    
   preload()
    
    textSize(100)
    textAlign(CENTER)
    rectMode(CENTER)
    ellipseMode(CENTER)
    
    for(let i=0; i<balasX.length;i++){
      balasX[i]= windowWidth
    }
    
    createCanvas(w, h)
}

function draw() {
  programa()
}

function preload() {
    pantallas=1
    
    w=window.innerWidth
    h=window.innerHeight

    tamanio=100
    ancho=100
    alto=50

    posXDelJugador=100
    posYDelJugador=500
    posXDelDisparo=posXDelJugador+50
    posYDelDisparo=500
    

    colorBoton=255
    colorTexto=0

    okVidas=false
    okTiempo=false
    okGano=false

    minutos=2
    intervalo=60
    segundos=0
    tiempoEnPantalla="3:00"
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
    print("FUEGO!!!")
  okDisparo=true
  }
  if((key=="r")||(key=="R")){
  pantallas=2
  preload()
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
    print("ALTO EL FUEGO!!")
  okDisparo=false
  }
}
