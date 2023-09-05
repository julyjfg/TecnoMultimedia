function programa() {
  background(127)
    switch(pantallas) {
  case 1:
    text("Pantalla Inicio", windowWidth/2, windowHeight/2)
      break
    case 2:
    text("Pantalla Juego", windowWidth/2, windowHeight/2)
      personaje()
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

function personaje() {
  if (okIzquierda) {
    posXDelJugador-=1.5
  }
  if (okDerecha) {
    posXDelJugador+=1.5
  }
  if (okArriba) {
    posYDelJugador-=1.5
  }
  if (okAbajo) {
    posYDelJugador+=1.5
  }
  fill(0)
    rect(posXDelJugador, posYDelJugador, tamanio, tamanio/2)

    disparo()
}

function disparo() {
  if (okDisparo) {
    for (let i=0; i<balasX.length; i++) {
      balasX[i]-= 10
        if (balasX[i]<=width) {
        balasX.splice(i, 1)
      }
      circle(width/2, balasX[i], 20)
    }
  }
}
