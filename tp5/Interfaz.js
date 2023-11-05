class Interfaz {
  constructor() {
    this.hit=0
      this.posX=windowWidth/2
      this.posY=90
      this.ancho=1500
      this.largo=150
      this.angulo=200
      this.okTiempo=false
      this.segundos=31
      this.intervalo=31
      this.minutos=1
      this.tiempoEnPantalla=0
  }
  actualizar() {
    this.segundos=31
      this.intervalo+=31
      this.minutos=1
      this.tiempoEnPantalla=0
      this.okTiempo=false
      this.Hit=0
  }
  dibujar(golpes) {
      this.okHit=golpe
      push()
      fill(90)
      rect(this.posX, this.posY, this.ancho, this.largo, this.angulo)
      pop()
      this.tiempo()
      this.contadorDeHit(golpes)
    }
  }
  contadorDeHit(golpes) {
    this.hit=golpes
      push()
      fill(255)
      textSize(80)
      text(this.hit, 110, 310)
      pop()
  }
  tiempo() {
    if (!this.okTiempo) {
      this.segundos=this.intervalo-int(millis()/1000)
        this.tiempoEnPantalla=nf(this.minutos, 2)+":"+nf(this.segundos, 2)
        push()
        fill(255)
        textSize(80)
        text(this.tiempoEnPantalla, 110, 110)
        pop()
        if (this.segundos==0 && this.minutos==0) {
        this.okTiempo=true
      } else if (this.segundos==0) {
        if (this.minutos>0) {
          this.minutos--
            this.intervalo+=59
        } else {
          this.minutos=0
            this.intervalo+=31
        }
      }
    }
  }
}
