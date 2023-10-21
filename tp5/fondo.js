class Fondos {
  constructor() {
  this.inicio=loadImage("assets/Inicio.png")
  this.juego=loadImage("assets/Juego.png")
  this.creditos=loadImage("assets/Creditos.png")
  this.ganaste=loadImage("assets/Ganaste.png")
  this.perdiste=loadImage("assets/Perdite.png")
  }
  fondoInicio() {
  image(this.inicio,0,0,width,height)
  }
  fonodoJuego() {
     image(this.juego,0,0,width,height)
  }
  fondoGanaste() {
     image(this.ganaste,0,0,width,height)
  }
  fondoPerdiste() {
     image(this.perdiste,0,0,width,height)
  }
  fondoCreditos(){
     image(this.creditos,0,0,width,height)
  }
}
