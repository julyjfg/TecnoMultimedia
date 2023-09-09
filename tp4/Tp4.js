/*
Julian Ferrari Goñi
93052/3
https://youtu.be/CfinrwqMJZY
 */
let pantallas

  let fondoPrincipal
  let fondo =[]
  let nave
  let botonInicio
  let botonCreditos
  let botonVolver
  let botonMenu
  let botonInstrucciones
  let ganasteFondo
  let perdisteFondo
  let fondoCreditos
  let fondoInstrucciones
  let naveEnemiga

  let titulo

  let okTiempo
  let okVidas
  let okArriba
  let okAbajo
  let okIzquierda
  let okDerecha
  let okGano
  let okDanio
  let disparar
  let recarga = true
  let enemigosActivos
  let okCreditos
  let okIniciar
  let okInstrucciones
  let okMenu
  let okHit

  let contHit
  let posXDelJugador
  let posYDelJugador
  let posXDelDisparo
  let posYDelDisparo
  let posXBotonIniciar
  let posYBotonIniciar
  let posXBotonCreditos
  let posYBotonCreditos
  let posXBotonInstrucciones
  let posYBotonInstrucciones
  let posXBotonMenu
  let posYBotonMenu

  let velocidadFondo
  let posXDelFondo

  let posXDatos
  let posYDatos

  let w, h
  let tamanio, ancho, alto, anchoBoton, altoBoton

  let vidas = []
  let cantVidas


  let enemigosX= []
  let enemigosY=[]
  let enemigosVel=[]
  let desaparecer=[]
  let tam=[]

  let tiempoEnPantalla
  let segundos
  let minutos
  let intervalo
  let segundero

  let colorBoton, colorTexto


  let cuenta
  let balasX = []

  function preload() {//carga de imagenes
  titulo=loadFont("./data/Crang.ttf")
    fondoInicial=loadImage("./data/fondoInicio.png")
    botonCreditos=loadImage("./data/botonCreditos.png")
    botonInstrucciones=loadImage("./data/botonInstrucciones.png")
    botonVolver=loadImage("./data/botonVolver.png")
    botonMenu=loadImage("./data/botonMenu.png")
    fondo= loadImage("./data/fondo.jpg")
    nave=loadImage("./data/nave.png")
    naveEnemiga=loadImage("./data/naveEnemiga.png")
    ganasteFondo=loadImage("./data/ganaste.jpg")
    perdisteFondo=loadImage("./data/perdiste.jpg")
    fondoCreditos=loadImage("./data/fondoCreditos.jpg")
    botonInicio=loadImage("./data/botonStar.png")
    fondoInstrucciones=loadImage("./data/fondoInstrucciones.jpg")
    for (let i=0; i<3; i++) {
    vidas[i]=loadImage("./data/corazon.png")
  }
}


function setup() {

  pantallas=1

    cantVidas=3
    contHit=0
    w=window.innerWidth
    h=window.innerHeight

    tamanio=100
    ancho=100
    alto=50
    anchoBoton=220
    altoBoton=100

    posXDelJugador=100
    posYDelJugador=500

    posXBotonIniciar=936
    posYBotonIniciar=588

    posXBotonCreditos=927
    posYBotonCreditos=869

    posXBotonInstrucciones=929
    posYBotonInstrucciones=704

    posXBotonMenu=935
    posYBotonMenu=678

    velocidadFondo=3
    posXDelFondo=0



    okVidas=false
    okTiempo=false
    okGano=false
    okDanio=false
    disparar=false
    recargar=true
    okCreditos=false
    okIniciar=false
    okInstrucciones=false
    okMenu=false
    okHit=false



    minutos=2
    intervalo=59
    segundos=59
    tiempoEnPantalla="3:00"

    textSize(100)
    textFont(titulo)
    textAlign(CENTER)
    rectMode(CENTER)
    imageMode(CENTER)

    for (let i=0; i<balasX.length; i++) {
    balasX[i]= windowWidth
  }
  for (let i=1; i<=3; i++) {
    enemigos[i]=i
  }
  iniciar()
    createCanvas(w, h)
}

function draw() {
  programa()
}


function mousePressed() {
  print(mouseX, mouseY)

    activacionDeBotones()
}

function mouseMoved() {
  interaccionDeBotones()
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
  if (key==" ") {
    print("FUEGO!!!")
      disparar=true
  }
  if ((key=="r")||(key=="R")) {
    recargarDatos()
      pantallas=3
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
  if (key==" ") {
    print("ALTO EL FUEGO!!")
      disparar=false
  }
}
