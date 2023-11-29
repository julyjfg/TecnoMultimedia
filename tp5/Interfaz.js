class Interfaz {
  constructor() {
    this.hit=0
      this.posX=(windowWidth/2)-150
      this.posY=90
      this.ancho=550
      this.largo=150
      this.angulo=200
      this.okTiempo=false
      this.segundos=30
      this.intervalo=30
      this.minutos=1
      this.tiempoEnPantalla=0
  }
  actualizar() {
    this.segundos=30
      this.intervalo+=30
      this.minutos=1
      this.tiempoEnPantalla=0
      this.okTiempo=false
      this.Hit=0
  }
  dibujar(golpes) {
      this.okHit=golpes
      push()
      fill(90)
      rect(this.posX-490, this.posY, this.ancho, this.largo, this.angulo)
      pop()
      this.tiempo()
      this.contadorDeHit(golpes)
    }
  contadorDeHit(golpes) {
    this.hit=golpes
      push()
      fill(255)
      textSize(80)
      text(this.hit,this.posX-400, this.posY+20)
      pop()
  }
  tiempo() {
    if (!this.okTiempo) {
      this.segundos=this.intervalo-int(millis()/1000)
        this.tiempoEnPantalla=nf(this.minutos, 2)+":"+nf(this.segundos, 2)
        push()
        fill(255)
        textSize(80)
        text(this.tiempoEnPantalla, this.posX-600, this.posY+20)
        pop()
        if (this.segundos==0 && this.minutos==0) {
        this.okTiempo=true
      } else if (this.segundos==0) {
        if (this.minutos>0) {
          this.minutos--
            this.intervalo+=60
        } else {
          this.minutos=0
            this.intervalo+=60
        }
      }
    }
  }
}
