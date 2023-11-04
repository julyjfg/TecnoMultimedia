class Enemigo {
  constructor() {
    this.posX=300
      this.carriles=[200,300, 500, 600, 700]
      this.posY=random(this.carriles)
      this.tam=50
  }
  actualizar() {
    this.movimiento()
  }
  dibujar() {
    this.actualizar()
      ellipse(this.posX, this.posY, this.tam)
      if (this.posX>windowWidth) {
      this.posX=300
        this.posY=random(this.carriles)
    }
  }
  movimiento() {
    this.posX+=random(0.5, 5.5)
  }
}
