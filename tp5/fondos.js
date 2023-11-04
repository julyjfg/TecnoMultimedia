class Fondos {
  constructor() {
    this.inicio=loadImage("assets/Inicio.png")
      this.ganaste=loadImage("assets/Ganaste.png")

      this.posXBoton=windowWidth/2
      this.posYBoton=windowHeight/2 + 200
      this.ancho=200
      this.alto=90
      this.colorBoton=color(175, 23, 23)
      this.colorTexto=color(255)

      this.okBoton=false
  }
  fondoInicio() {
    image(this.inicio, 0, 0, width, height)
      push()
      textSize(100)
      fill(255, 0, 0)
      text("La trampa de Odiseo", windowWidth/2, windowHeight/2-400)
      pop()
      push()
      fill(this.colorBoton)
      noStroke()
      rect(this.posXBoton, this.posYBoton, this.ancho, this.alto)
      pop()
      push()
      fill(this.colorTexto)
      textSize(50)
      text("Iniciar", this.posXBoton, this.posYBoton+10)
      pop()
  }
  fondoGanaste() {
    image(this.ganaste, 0, 0, width, height)
      push()
      textSize(100)
      fill(255, 0, 0)
      text("No ha sobrevivido ningun pretendiente\nla paz vuelve a Itaca", windowWidth/2, windowHeight/2-400)
      pop()
      push()
      fill(this.colorBoton)
      noStroke()
      rect(this.posXBoton, this.posYBoton, this.ancho, this.alto)
      pop()
      push()
      fill(this.colorTexto)
      textSize(50)
      text("Reiniciar", this.posXBoton, this.posYBoton+10)
      pop()
  }
  mouseMoved() {
    if ((mouseX>this.posXBoton-this.ancho/2)&&(mouseX<+this.posXBoton+this.ancho/2)&&(mouseY>this.posYBoton-this.alto/2)&&(mouseY<this.posYBoton+this.alto/2)) {
      print("Boton Iniciar Activo")
        this.okBoton=true
        this.colorBoton=color(27, 203, 60)
    } else {
      this.okBoton=false
        this.colorBoton=color(175, 23, 23)
    }
  }
}
