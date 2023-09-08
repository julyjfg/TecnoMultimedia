let pantallas

let fondo =[]
let botonInicio
let botonCreditos

let okTiempo 
let okVidas
let okArriba
let okAbajo
let okIzquierda
let okDerecha
let okGano
let disparar 
let recarga = true
let enemigosActivos

let posXDelJugador
let posYDelJugador
let posXDelDisparo
let posYDelDisparo

let velocidadFondo
let posXDelFondo

let posXDatos
let posYDatos

let w, h
let tamanio,ancho, alto

let vidas = []
let enemigos= []

let tiempoEnPantalla
let segundos 
let minutos
let intervalo

let colorBoton,colorTexto

 
let cuenta 
let balasX = []

function preload(){//carga de imagenes
fondo= loadImage("./data/fondo.jpg")
}


function setup() {   
  pantallas=1
  
    w=window.innerWidth
    h=window.innerHeight

    tamanio=100
    ancho=100
    alto=50

    posXDelJugador=100
    posYDelJugador=500
    
    velocidadFondo=3
    posXDelFondo=0
 
 

    okVidas=false
    okTiempo=false
    okGano=false
    disparar=false
    recargar=true
    
    

    minutos=2
    intervalo=60
    segundos=0
    tiempoEnPantalla="3:00"
    
    textSize(100)
    textAlign(CENTER)
    rectMode(CENTER)
   imageMode(CENTER)
    
    for(let i=0; i<balasX.length;i++){
      balasX[i]= windowWidth
    }
    for (let i=1;i<=3;i++){
      enemigos[i]=i
    }
    
    createCanvas(w, h)
    fondo.resize(w,h)
}

function draw() {
  image(fondo,0,0)
  programa()
}

//function preload() {
//      posXDelJugador=100
//    posYDelJugador=500
 
    

//    colorBoton=255
//    colorTexto=0

//    okVidas=false
//    okTiempo=false
//    okGano=false
//    disparar=false
//    recargar=true
    
    

//    minutos=2
//    intervalo=60
//    segundos=0
//    tiempoEnPantalla="3:00"
    
   
//}
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
  disparar=true
  }
  if((key=="r")||(key=="R")){
  preload()
    pantallas=2

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
  disparar=false
  }
}
