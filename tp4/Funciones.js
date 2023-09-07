function programa() {
  background(127)
    switch(pantallas) {
  case 1:
    text("Pantalla Inicio", windowWidth/2, windowHeight/2)

      break
    case 2:
juego()
    break
    case 3:
    preload()
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
function juego(){
personaje()
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
  push()
  fill(120)
    rect(posXDelJugador, posYDelJugador, tamanio, tamanio/2)
    disparo()
pop()
    //disparo()
}

function disparo() {

  if (disparar == true && recarga == true) {

    //SI PRESIONO Y ESTA RECARGADA EL ARMA,
    //AGREGO VALORES AL ARREGLO CON 'push'
    // arreglo.push(valor)
    balasX.push(150) //AQUI AGREGAMOS OTRA CASILLA AL ARREGLO
      // 'balasY' , con el valor que querramos para el proximo proyectil

      cuenta = 0 // reiniciamos cuenta de recarga
      recarga = false //le 'recarga' sea 'false', para que no se pueda volver a disparar
  }

  // HACEMOS FOR PARA ANIMAR TODAS LAS balas
  for (let i = 0; i < balasX.length; i++) {
    // 10, podria ser velocidad de la bala, en una variable
    balasX[i]+=   10

      //Si la bala ya cumple su trayectoria, con splice() borramos ese casillero

      if (balasX[i] <= 0) {
 
      balasX.splice(i, 1)
    }
    
    circle(balasX[i],height/2, 20)
  } 
  cuenta++
    if (cuenta >= 30) {
    recarga = true
  }
  print("Cantidad de balas:", balasX.length)
}






























function disparo() {
 
  if (okDisparo) {
if(posXDelDisparo<window.innerWidth){
  posXDelDisparo+=1.5
}
 }
 ellipse(posXDelDisparo,posYDelDisparo,20,20)
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
