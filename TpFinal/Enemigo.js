class Enemigo {
  constructor() {
    this.posX=300
      this.carriles=[300, 350, 400, 450, 500, 550, 600, 650, 700, 750]
      this.posY=random(this.carriles)
      this.tam=50
      this.largo=100
      this.escapo=false
      this.imagen=loadImage("assets/pretendiente.png")
      this.sonido=loadSound('assets/ugh-splat.wav')
      this.sonido.setVolume(0.2)
  }
  actualizar() {
    this.movimiento()
  }
  dibujar() {
    this.actualizar()
      image(this.imagen, this.posX, this.posY, this.tam, this.largo)
      if (this.posX>windowWidth) {
      this.escapo=true
    }
  }
  movimiento() {
    this.posX+=random(3.5, 5.5)
  }
  muerte() {
    if (!this.sonido.isPlaying()) {
      this.sonido.play()
    }
  }
}
