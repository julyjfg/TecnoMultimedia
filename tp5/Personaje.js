class Personaje {
  constructor() {
    this.posX=100
      this.posY=windowHeight/2
      this.tamanio=50
  }
  actualizar() {
    this.mover()
  }
  dibujar() {
    this.actualizar()
      rect(this.posX, this.posY, this.tamanio)
  }
  
  mover() {
    if (this.okIzquierda) {
      this.posY-=5
    }
    if (this.okDerecha) {
      this.posY+=5
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
