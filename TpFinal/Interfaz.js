class Interfaz {
  constructor(tiempoTotal) {
    this.hit=0
      this.posX=(windowWidth/2)-150
      this.posY=100
      this.ancho=850
      this.largo=295
      this.angulo=200
      this.tiempoTotal=tiempoTotal
      this.timepoInicio=millis()
      this.hud=loadImage("assets/hud.png")
      this.reloj=loadImage("assets/reloj.png")
      this.esqueleto=loadImage("assets/esqueleto.png")
      this.corazon=loadImage("assets/corazon.png")
  }

  dibujar(golpes, vidas) {
      image(this.hud,this.posX-835, this.posY-115, this.ancho, this.largo)
      image(this.reloj,this.posX-720, this.posY-30,100,90)
      image(this.esqueleto,this.posX-445, this.posY-20,100,90)
      image(this.corazon,this.posX-265,this.posY-20,100,90)
      this.tiempo()
      this.corazones(vidas)
      this.contadorDeHit(golpes)
  }
  corazones(vidas) {
    push()
      fill(255)
      textSize(70)
      text(vidas, this.posX-150, this.posY+50)
      pop()
  }

  contadorDeHit(golpes) {
    this.hit=golpes
      push()
      fill(255)
      textSize(70)
      text(this.hit, this.posX-315, this.posY+50)
      pop()
  }
  tiempo() {
    let transcurrido= (millis()-this.tiempoInicio) / 1000
      let restante = this.tiempoTotal - transcurrido

      if (restante>0) {
      push()
        fill(255)
        textSize(70)
        text(nf(floor(restante / 60), 2) + ":" + nf(floor(restante % 60), 2), this.posX-540, this.posY+50)
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
