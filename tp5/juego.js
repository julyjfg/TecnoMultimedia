class Juego {
  constructor() {
    this.estado=new Estado()
    this.personaje=new Personaje()
  }
  play(){
    //this.estado.cambioDeEstado()
    background(127)
    this.personaje.dibujar()
  }
  mousePressed(){
  this.estado.mousePressed()
  }
  keyPressed(){
  this.personaje.keyPressed()
  }
}
