function programa() {
  background(127)
    switch(pantallas) {
  case 1:
    text("Pantalla Inicio", windowWidth/2, windowHeight/2)

      break
    case 2:
    fondoEnMovimiento()
    juego()
      break
    case 3:

      text("Pantalla Gano", windowWidth/2, windowHeight/2)
      break
    case 4:
    text("Pantalla Perdio", windowWidth/2, windowHeight/2)
      break
    case 5:
    text("Pantalla Creditos", windowWidth/2, windowHeight/2)
      break
  }
}
function juego() {
  personaje()
}

function personaje() {
  if (okIzquierda) {
    posXDelJugador-=2.5
  }
  if (okDerecha) {
    posXDelJugador+=2.5
  }
  if (okArriba) {
    posYDelJugador-=2.5
  }
  if (okAbajo) {
    posYDelJugador+=2.5
  }
  push()
    fill(120)
    rect(posXDelJugador, posYDelJugador, tamanio, tamanio/2)
    disparo(posXDelJugador, posYDelJugador)
    pop()
}

function disparo(posX, posY) {
  posXDelDisparo=posX+50
    posYDelDisparo=posY
    if (disparar==false) {
    ellipse(posXDelDisparo, posYDelDisparo, 20, 20)
  }
  if (disparar == true && recarga == true) {
    balasX.push(posXDelDisparo)
      cuenta = 0
      recarga = false
  }
  for (let i = 0; i < balasX.length; i++) {
    balasX[i]+= 20
      if (balasX[i] <= 0) {
      balasX.splice(i, 1)
    }
    //circle(balasX[i], posY, 20)
    ellipse(balasX[i], posYDelDisparo, 20, 20)
  }
  cuenta++
    if (cuenta >= 30) {
    recarga = true
  }
  print("Cantidad de balas:", balasX.length)
 }
function fondoEnMovimiento(){
 push()
 scale(2)
  posXDelFondo-=5
  if(posXDelFondo<=-width){
  posXDelFondo=width
  } 
  image(fondo,posXDelFondo,0)
pop()
}
/*function tiempo() {
 if (!okTiempo) {
 segundos = intervalo-int(millis()/1000)
 timempoEnPantalla = nf(minutos, 2)+":"+nf(segundos, 2)
 text(timempoEnPantalla, 200, 200)
 if ((segundos==0)&&(minutos==0)) {
 okTiempo=true
 minutos=3
 intervalo+=10
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
 }*/
/*function enemigos(){
switch 
}
}*/
function botones() {
  switch (pantallas) {
  case 1:
    generarBoton(780, 610, ancho, alto, colorBoton, "Play", 780, 610, colorTexto)
      generarBoton(780, 710, ancho, alto, colorBoton, "Creditos", 780, 710, colorTexto)
      break
    case 3:
    break
  }
}

function generarBoton(posXBoton, posYBoton, ancho, alto, colorBoton, texto, posXText, posYText, colorTexto) {
  push()
    fill(colorBoton)
    stroke(10)
    rect(posXBoton, posYBoton, ancho, alto)
    textSize(tamTexto)
    fill(colorTexto)
    text(texto, posXText, posYText)
    pop()
}
