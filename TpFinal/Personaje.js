class Personaje {
  constructor() {
      this.posX=100
      this.posY=windowHeight/2
      this.ancho=100
      this.largo=200
      this.imagen=loadImage("assets/Odiseo.png")
  }
  actualizar() {
    this.mover()
  }
  dibujar() {
    this.actualizar()
      image(this.imagen,this.posX, this.posY-75, this.ancho,this.largo)
  }
  
  mover() {
    if (this.okIzquierda) {
      if(this.posY>300){
        this.posY-=5
      }
    }
    if (this.okDerecha) {
      if(this.posY<750){
        this.posY+=5
      }
    }
  }
  keyPressed() {
    if (keyCode==UP_ARROW) {
      this.okIzquierda=true
    }
    if (keyCode==DOWN_ARROW) {
      this.okDerecha=true
    }
  }
  keyReleased() {
    if (keyCode==UP_ARROW) {
      this.okIzquierda=false
    }
    if (keyCode==DOWN_ARROW) {
      this.okDerecha=false
    }
  }
}
