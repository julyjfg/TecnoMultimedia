class Juego {
  constructor() {
    this.estado= new Estado()

  }
  play(){
    this.estado.cambioDeEstado()
  }
  mousePressed(){
  this.estado.mousePressed()
  }
  mouseMoved(){
  this.estado.mouseMoved()
  }
  keyPressed(){
  this.estado.keyPressed()
  }
  keyReleased(){
  this.estado.keyReleased()
  }
}
