function programa() {
  background(127)
    switch(pantallas) {
  case 1:
    inicio()
      break
    case 2:
    instrucciones()
      break
    case 3:
    juego()
      break
    case 4:
    pantallaGano()
      break
    case 5:
    pantallaPerdio()
      break
    case 6:
    creditos()
      break
  }
  
}
function juego() {
  fondoEnMovimiento()
    interfaz()
    enemigos()
    personaje()
}

function personaje() {
  if (okIzquierda) {
    posXDelJugador-=3.5
  }
  if (okDerecha) {
    posXDelJugador+=3.5
  }
  if (okArriba) {
    posYDelJugador-=3.5
  }
  if (okAbajo) {
    posYDelJugador+=3.5
  }
  push()
    scale(1)
    image(nave, posXDelJugador, posYDelJugador)
    disparo(posXDelJugador, posYDelJugador)
    pop()
}

function disparo(posX, posY) {
  posYDelDisparo=posY

    if (disparar == true && recarga == true) {
    balasX.push(posX+50)
      cuenta = 0
      recarga = false
  }
  for (let i = 0; i < balasX.length; i++) {
    balasX[i]+= 20
      if (balasX[i] <= 0) {
      balasX.splice(i, 1)
    }
    if (!okHit) {
      push()
        noStroke()
        fill(234, 47, 47)
        ellipse(balasX[i], posYDelDisparo, 20, 20)
        posXDelDisparo=balasX[i]
        pop()
    }
  }
  cuenta++
    if (cuenta >= 30) {
    recarga = true
  }
  print("Cantidad de balas:", balasX.length)
}

function fondoEnMovimiento() {
    posXDelFondo-=5
    if (posXDelFondo<=-width) {
    posXDelFondo=0
  }
    push()
    scale(2)
    image(fondo, posXDelFondo, 0)
    image(fondo,posXDelFondo+width,0)
    image(fondo,posXDelFondo+width*2,0)
    pop()
}

function interfaz() {
  if (!okVidas) {
    push()
      fill(255, 127)
      noStroke()
      rect(0, 0, 1000, 200, 20)
      pop()
      tiempo()
      corazones()
      if (okTiempo) {
      pantallas=4
    }
  } else {
    pantallas=5
      print("perdiste")
  }
}

function tiempo() {
  if (!okTiempo) {
    segundos = intervalo-int(millis()/1000)
      timempoEnPantalla = nf(minutos, 2)+":"+nf(segundos, 2)
      push()
      textSize(40)
      text(timempoEnPantalla, 385, 65)
      pop()
      if ((segundos==0)&&(minutos==0)) {
      okTiempo=true
    } else if (segundos == 0) {
      if (minutos>0) {
        minutos--
          intervalo+=10
      } else {
        minutos=0
          intervalo+=10
      }
    }
  }
}
function corazones() {
  let x=25
    let y=50
    for (let i= 0; i<vidas.length; i++) {
    if (okDanio) {
      vidas.splice(i, 1)
        cantVidas--
    }
    if (cantVidas>0) {
      okDanio=false
        push()
        scale(0.09)
        translate(400, 400)
        image(vidas[i], x, y)
        pop()
        x+=1000
    } else {
      pantallas=5
    }
  }
}
function enemigos() {

  for (let i = 0; i < 10; i++) {

    if (enemigosX[i] > width) {
      //obstaculosY[i] = random(-100, 0)


      enemigosVel[i] = -enemigosVel[i]
    }
    if (enemigosX[i] < 0) {

      enemigosX[i] =  width
        enemigosVel[i] = enemigosVel[i]*-1
    }
    enemigosX[i]+=enemigosVel[i]
      if (posXDelJugador > enemigosX[i]  && posXDelJugador < enemigosX[i] +  tam[i] &&
      posYDelJugador > enemigosY[i] && posYDelJugador < enemigosY[i] +   tam[i]
      ) {
      fill(0)
        if ( desaparecer[i]  == false) {
        okDanio=true
          contHit++
      }
      desaparecer[i] = true
    }
    if (dist(posXDelDisparo, posYDelDisparo, enemigosX[i], enemigosY[i])<20) {
      fill(0)
        if ( desaparecer[i]  == false) {
        okHit=true
          contHit++
          print(contHit)
      }
      okHit=false
        desaparecer[i] = true
    } else {
      fill(255)
    }
    if (desaparecer[i] == true) {
    } else {
      push()
        image(naveEnemiga, enemigosX[i], enemigosY[i])
        pop()
    }
    if (desaparecer[i] == true && contHit==10) {
      iniciar()
        contHit=0
    }
  }
}
function iniciar() {

  for (let i = 0; i < 10; i++) {
    enemigosY[i] = random(100, window.innerHeight)
      enemigosVel[i] =  random(5, 10)
      enemigosX[i] =  window.innerWidth
      desaparecer[i] = false
      tam[i] = 50
  }
}

function inicio() {
  push()
    scale(2)
    image(fondoInicial, 0, 0)
    pop()
    push()
    scale(0.3)
    translate(2300, 1525)
    image(botonInicio, 800, 440)
    pop()
    push()
    scale(0.3)
    translate(2250, 1825)
    image(botonInstrucciones, 850, 540)
    pop()
    push()
    scale(0.3)
    translate(2220, 1825)
    image(botonCreditos, 895, 940)
    pop()
    push()
    fill(80, 234, 99)
    text("guardian \nof\nthe earth", 925, 120)
    pop()
}
function instrucciones() {
  push()
    scale(1)
    translate(900, 500)
    image(fondoInstrucciones, 0, 0)
    pop()
    push()
    scale(0.3)
    translate(2300, 1525)
    image(botonMenu, 795, 740)
    pop()
    push()
    textSize(50)
    fill(80, 234, 99)
    text("Movimiento: WASD", 925, 210)
    pop()
    push()
    textSize(50)
    fill(80, 234, 99)
    text("Ataque: Space", 925, 350)
    pop()
    push()
    textSize(50)
    fill(80, 234, 99)
    text("Objetivo: Sobrevivir a la invacion", 925, 510)
    pop()
}

function creditos() {
  push()
    scale(0.5)
    translate(1900, 1000)
    image(fondoCreditos, 0, 0)
    pop()
    push()
    fill(80, 234, 99)
    textSize(50)
    text("Programador: Julian Ferrari Goñi", 925, 210)
    pop()
    push()
    textSize(40)
    fill(80, 234, 99)
    text("Diseño: Julian Ferrari Goñi", 925, 410)
    pop()
    push()
    scale(0.3)
    translate(2300, 1525)
    image(botonMenu, 795, 740)
    pop()
}
function pantallaGano() {
  push()
    scale(0.5)
    translate(1900, 1000)
    image(ganasteFondo, 0, 0)
    pop()
    push()
    fill(80, 234, 99)
    textSize(90)
    text("La invacion ha sido destruida\nEl mundo descansa en paz", 925, 120)
    pop()
    push()
    scale(0.3)
    translate(2300, 1525)
    image(botonMenu, 795, 740)
    pop()
    push()
    textSize(20)
    fill(80, 234, 99)
    text("Pulsa R para reiniciar el juego", 925, 920)
    pop()
}

function pantallaPerdio() {
  push()
    scale(0.5)
    translate(1900, 1000)
    image(perdisteFondo, 0, 0)
    pop()
    push()
    fill(80, 234, 99)
    textSize(90)
    text("El mundo ha sido invadido\nLa humanidad esta perdida", 925, 120)
    pop()
    push()
    scale(0.3)
    translate(2300, 1525)
    image(botonMenu, 795, 740)
    pop()
    push()
    textSize(20)
    fill(80, 234, 99)
    text("Pulsa R para reiniciar el juego", 925, 920)
    pop()
}


function interaccionDeBotones() {
  if (pantallas==1) {
    if ((mouseX>posXBotonIniciar-anchoBoton/2)&&(mouseX<+posXBotonIniciar+anchoBoton/2)&&(mouseY>posYBotonIniciar-altoBoton/2)&&(mouseY<posYBotonIniciar+altoBoton/2)) {
      print("Boton Iniciar Activo")
        okIniciar=true
    } else {
      okIniciar=false
    }
    if ((mouseX>posXBotonCreditos-anchoBoton/2)&&(mouseX<+posXBotonCreditos+anchoBoton/2)&&(mouseY>posYBotonCreditos-altoBoton/2)&&(mouseY<posYBotonCreditos+altoBoton/2)) {
      print("Boton Credito Activo")
        okCreditos=true
    } else {
      okCreditos=false
    }
    if ((mouseX>posXBotonInstrucciones-anchoBoton/2)&&(mouseX<+posXBotonInstrucciones+anchoBoton/2)&&(mouseY>posYBotonInstrucciones-altoBoton/2)&&(mouseY<posYBotonInstrucciones+altoBoton/2)) {
      print("Boton Intrucciones Activo")
        okInstrucciones=true
    } else {
      okInstrucciones=false
    }
  }
  if ((pantallas==6)||(pantallas==4)||(pantallas==5)||(pantallas==2)) {
    if ((mouseX>posXBotonMenu-anchoBoton/2)&&(mouseX<+posXBotonMenu+anchoBoton/2)&&(mouseY>posYBotonMenu-altoBoton/2)&&(mouseY<posYBotonMenu+altoBoton/2)) {
      print("Boton Menu Activo")
        okMenu=true
    } else {
      okMenu=false
    }
  }
}

function activacionDeBotones() {
  if (okIniciar) {
    pantallas=3
      okIniciar=false
  }
  if (okCreditos) {
    pantallas=6
      okCreditos=false
  }
  if (okInstrucciones) {
    pantallas=2
      okInstrucciones=false
  }
  if (okMenu) {
    recargarDatos()
      pantallas=1
      okMenu=false
  }
}

function recargarDatos() {
  for (let i=0; i<3; i++) {
    vidas[i]=loadImage("./data/corazon.png")
  }
  velocidadFondo=3
    posXDelFondo=0

    cantVidas=3

    posXDelJugador=100
    posYDelJugador=500

    okVidas=false
    okTiempo=false
    okGano=false
    okDanio=false
    disparar=false
    recargar=true
    okCreditos=false
    okIniciar=false
    okHit=false

    iniciar()
    contHit=0
    minutos=2
    intervalo=59+int(millis()/1000)
    segundos=59
    tiempoEnPantalla="3:00"
}
