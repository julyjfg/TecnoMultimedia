class Interfaz {
  constructor(tiempoTotal) {
    this.hit=0
      this.posX=(windowWidth/2)-150
      this.posY=90
      this.ancho=550
      this.largo=150
      this.angulo=200
      this.tiempoTotal=tiempoTotal
      this.timepoInicio=millis()
  }

  dibujar(golpes, vidas) {
      push()
      fill(90)
      rect(this.posX-490, this.posY, this.ancho, this.largo, this.angulo)
      pop()
      this.tiempo()
      this.corazones(vidas)
      this.contadorDeHit(golpes)
  }
  corazones(vidas) {
    push()
      fill(255)
      textSize(80)
      text(vidas, this.posX-300, this.posY+20)
      pop()
  }

  contadorDeHit(golpes) {
    this.hit=golpes
      push()
      fill(255)
      textSize(80)
      text(this.hit, this.posX-400, this.posY+20)
      pop()
  }
  tiempo() {
    let transcurrido= (millis()-this.tiempoInicio) / 1000
      let restante = this.tiempoTotal - transcurrido

      if (restante>0) {
      push()
        fill(255)
        textSize(80)
        text(nf(floor(restante / 60), 2) + ":" + nf(floor(restante % 60), 2), this.posX-600, this.posY+20)
        pop()
    }
  }
  termino() {
    return millis()-this.tiempoInicio>this.tiempoTotal*1000
  }
  resetear() {
    this.tiempoInicio=millis()
  }
}
