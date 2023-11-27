class Enemigo {
  constructor() {
    this.posX=300
      this.carriles=[200,250,300,350,400,450,500,550,600,650,700,750]
      this.posY=random(this.carriles)
      this.tam=50
      this.largo=100
      this.escapo=false
      this.imagen=loadImage("assets/pretendiente.png")
  }
  actualizar() {
    this.movimiento()
  }
  dibujar() {
    this.actualizar()
      image(this.imagen,this.posX, this.posY, this.tam,this.largo)
      if (this.posX>windowWidth) {
      this.escapo=true
    }
  }
  movimiento() {
    this.posX+=random(0.5, 5.5)
  }
}
