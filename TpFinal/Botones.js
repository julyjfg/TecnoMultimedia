class Botones {
  constructor() {
    this.posXIniciarAvent=width/2
      this.posYIniciarAvent=height/2+300
      this.colorBotonIniciarAvent=color(255)
      this.colorTextoIniciarAvent=color(0)
      this.okIniciarAvent=false

      this.posXIniciarJuego=width/2
      this.posYIniciarJuego=height-100
      this.colorBotonJuego=color(255)
      this.colorTextoJuego=color(0)
      this.okJuego=false


      this.posXReiniciarJuego=width/2
      this.posYReiniciarJuego=height-100
      this.colorBotonReiniciarJuego=color(255)
      this.colorTextoReiniciarJuego=color(0)
      this.okReiniciarJuego=false


      this.posXCreditos=width/2
      this.posYCreditos=height/2+400
      this.colorBotonCreditos=color(255)
      this.colorTextoCreditos=color(0)
      this.okCreditos=false

      this.posXSiguiente=width-100
      this.posYSiguiente=height-100
      this.colorBotonSiguiente=color(255)
      this.colorTextoSiguiente=color(0)
      this.okSiguiente=false

      this.posXReiniciar=width-100
      this.posYReiniciar=height-100
      this.colorBotonReiniciar=color(255)
      this.colorTextoReiniciar=color(0)
      this.okReiniciar=false


      this.posXVolver=100
      this.posYVolver=height-100
      this.colorBotonVolver=color(255)
      this.colorTextoVolver=color(0)
      this.okVolver=false


      this.posXInicio=width/2
      this.posYInicio=height/2+400
      this.colorBotonInicio=color(255)
      this.colorTextoInicio=color(0)
      this.okInicio=false

      this.posXDesicionA=width/2-200
      this.posYDesicionA=height/2
      this.colorBotonDesicionA=color(255)
      this.colorTextoDesicionA=color(0)
      this.okDesicionA=false


      this.posXDesicionB=width/2+200
      this.posYDesicionB=height/2
      this.colorBotonDesicionB=color(255)
      this.colorTextoDesicionB=color(0)
      this.okDesicionB=false


      this.ancho=100
      this.largo=50
      this.angulo=20
      this.anchoAB=50
      this.largoAB=50
      this.colorBoton=color(255)
      this.colorTexto=color(0)
  }
  cargarBotones(pantallas) {
    switch(pantallas) {
    case 0:
      this.botonIniciarAventura()
        this.botonCreditos()
        break;
    case 1:
      this.botonInicio()
        break;
    case 2:
      this.botonSiguiente()
        break;
    case 3:
      this.botonSiguiente()
        break;
    case 4:
      this.botonesDesiciones()
        break;
    case 5:
      this.botonVolver()
        this.botonReiniciar()
        break;
    case 6:
      this.botonSiguiente()
        break;
    case 7:
      this.botonSiguiente()
        break;
    case 8:
      this.botonesDesiciones()
        break;
    case 9:
      this.botonVolver()
        this.botonReiniciar()
        break;
    case 10:
      this.botonSiguiente()
        break;
    case 11:
      this.botonIniciarJuego()
        break;
    case 13:
      this.botonInicio()
        break;
    case 14:
      this.botonReiniciarJuego()
        break;
    }
  }
  botonIniciarAventura() {
    push()
      fill(this.colorBotonIniciarAvent)
      rect(this.posXIniciarAvent, this.posYIniciarAvent, this.ancho, this.largo, this.angulo)
      pop()
      push()
      fill(this.colorTextoIniciarAvent)
      textSize(20)
      text("Iniciar", this.posXIniciarAvent, this.posYIniciarAvent+5)
      pop()
  }
  botonIniciarJuego() {
    push()
      fill(this.colorBotonJuego)
      rect(this.posXIniciarJuego, this.posYIniciarJuego, this.ancho, this.largo, this.angulo)
      pop()
      push()
      fill(this.colorTextoJuego)
      textSize(20)
      text("Iniciar", this.posXIniciarJuego, this.posYIniciarJuego+5)
      pop()
  }
  botonesDesiciones() {
    push()
      fill(this.colorBotonDesicionA)
      rect(this.posXDesicionA, this.posYDesicionA, this.anchoAB, this.largoAB, this.angulo)
      pop()
      push()
      fill(this.colorTextoDesicionA)
      textSize(20)
      text("A", this.posXDesicionA, this.posYDesicionA+5)
      pop()
      push()
      fill(this.colorBotonDesicionB)
      rect(this.posXDesicionB, this.posYDesicionB, this.anchoAB, this.largoAB, this.angulo)
      pop()
      push()
      fill(this.colorTextoDesicionB)
      textSize(20)
      text("B", this.posXDesicionB, this.posYDesicionB+5)
      pop()
  }
  botonSiguiente() {
    push()
      fill( this.colorBotonSiguiente)
      rect(this.posXSiguiente, this.posYSiguiente, this.ancho, this.largo, this.angulo)
      pop()
      push()
      fill( this.colorTextoSiguiente)
      textSize(20)
      text("Siguiente", this.posXSiguiente, this.posYSiguiente+5)
      pop()
  }
  botonReiniciar() {
    push()
      fill( this.colorBotonReiniciar)
      rect(this.posXReiniciar, this.posYReiniciar, this.ancho, this.largo, this.angulo)
      pop()
      push()
      fill( this.colorTextoReiniciar)
      textSize(20)
      text("Reiniciar", this.posXReiniciar, this.posYReiniciar+5)
      pop()
  }
  botonReiniciarJuego() {
    push()
      fill(this.colorBotonReiniciarJuego)
      rect(this.posXReiniciarJuego, this.posYReiniciarJuego, this.ancho, this.largo, this.angulo)
      pop()
      push()
      fill(this.colorTextoReiniciarJuego)
      textSize(20)
      text("Reiniciar", this.posXReiniciarJuego, this.posYReiniciarJuego+5)
      pop()
  }
  botonVolver() {
    push()
      fill(this.colorBotonVolver)
      rect(this.posXVolver, this.posYVolver, this.ancho, this.largo, this.angulo)
      pop()
      push()
      fill(this.colorTextoVolver)
      textSize(20)
      text("Volver", this.posXVolver, this.posYVolver+5)
      pop()
  }
  botonCreditos() {
    push()
      fill( this.colorBotonCreditos)
      rect(this.posXCreditos, this.posYCreditos, this.ancho, this.largo, this.angulo)
      pop()
      push()
      fill(this.colorTextoCreditos)
      textSize(20)
      text("Creditos", this.posXCreditos, this.posYCreditos+5)
      pop()
  }
  botonInicio() {
    push()
      fill(this.colorBotonInicio)
      rect(this.posXInicio, this.posYInicio, this.ancho, this.largo, this.angulo)
      pop()
      push()
      fill(this.colorTextoInicio)
      textSize(20)
      text("Inicio", this.posXInicio, this.posYInicio+5)
      pop()
  }
  mouseMoved(pantallas) {
    switch(pantallas) {
    case 0:
      if ((mouseX>this.posXIniciarAvent-this.ancho/2)&&(mouseX<this.posXIniciarAvent+this.ancho/2)&&(mouseY>this.posYIniciarAvent-this.largo/2)&&(mouseY<this.posYIniciarAvent+this.largo/2)) {
        this.colorBotonIniciarAvent=color(178, 16, 19)
          this.colorTextoIniciarAvent=color(255)
          this.okIniciarAvent=true
      } else {
        this.colorBotonIniciarAvent=color(255)
          this.colorTextoIniciarAvent=color(0)
          this.okIniciarAvent=false
      }
      if ((mouseX>this.posXCreditos-this.ancho/2)&&(mouseX<this.posXCreditos+this.ancho/2)&&(mouseY>this.posYCreditos-this.largo/2)&&(mouseY<this.posYCreditos+this.largo/2)) {
        this.colorBotonCreditos=color(120, 50, 183)
          this.colorTextoCreditos=color(255)
          this.okCreditos=true
      } else {
        this.colorBotonCreditos=color(255)
          this.colorTextoCreditos=color(0)
          this.okCreditos=false
      }
      break;
    case 1:
      if ((mouseX>this.posXInicio-this.ancho/2)&&(mouseX<this.posXInicio+this.ancho/2)&&(mouseY>this.posYInicio-this.largo/2)&&(mouseY<this.posYInicio+this.largo/2)) {
        this.colorBotonInicio=color(30, 167, 93)
          this.colorTextoInicio=color(255)
          this.okInicio=true
      } else {
        this.colorBotonInicio=color(255)
          this.colorTextoInicio=color(0)
          this.okInicio=false
      }
      break;
    case 2:
      if ((mouseX>this.posXSiguiente-this.ancho/2)&&(mouseX<this.posXSiguiente+this.ancho/2)&&(mouseY>this.posYSiguiente-this.largo/2)&&(mouseY<this.posYSiguiente+this.largo/2)) {
        this.colorBotonSiguiente=color(41, 201, 50)
          this.colorTextoSiguiente=color(255)
          this.okSiguiente=true
      } else {
        this.colorBotonSiguiente=color(255)
          this.colorTextoSiguiente=color(0)
          this.okSiguiente=false
      }
      break;
    case 3:
      if ((mouseX>this.posXSiguiente-this.ancho/2)&&(mouseX<this.posXSiguiente+this.ancho/2)&&(mouseY>this.posYSiguiente-this.largo/2)&&(mouseY<this.posYSiguiente+this.largo/2)) {
        this.colorBotonSiguiente=color(41, 201, 50)
          this.colorTextoSiguiente=color(255)
          this.okSiguiente=true
      } else {
        this.colorBotonSiguiente=color(255)
          this.colorTextoSiguiente=color(0)
          this.okSiguiente=false
      }
      break;
    case 4:
      if ((mouseX>this.posXDesicionA-this.anchoAB/2)&&(mouseX<this.posXDesicionA+this.anchoAB/2)&&(mouseY>this.posYDesicionA-this.largoAB/2)&&(mouseY<this.posYDesicionA+this.largoAB/2)) {
        this.colorBotonDesicionA=color(129, 25, 37)
          this.colorTextoDesicionA=color(255)
          this.okDesicionA=true
      } else {
        this.colorBotonDesicionA=color(255)
          this.colorTextoDesicionA=color(0)
          this.okDesicionA=false
      }
      if ((mouseX>this.posXDesicionB-this.anchoAB/2)&&(mouseX<this.posXDesicionB+this.anchoAB/2)&&(mouseY>this.posYDesicionB-this.largoAB/2)&&(mouseY<this.posYDesicionB+this.largoAB/2)) {
        this.colorBotonDesicionB=color(129, 25, 37)
          this.colorTextoDesicionB=color(255)
          this.okDesicionB=true
      } else {
        this.colorBotonDesicionB=color(255)
          this.colorTextoDesicionB=color(0)
          this.okDesicionB=false
      }
      break;
    case 5:
      if ((mouseX> this.posXReiniciar-this.ancho/2)&&(mouseX< this.posXReiniciar+this.ancho/2)&&(mouseY> this.posYReiniciar-this.largo/2)&&(mouseY<this.posYReiniciar+this.largo/2)) {
        this.colorBotonReiniciar=color(41, 201, 50)
          this.colorTextoReiniciar=color(255)
          this.okReiniciar=true
      } else {
        this.colorBotonReiniciar=color(255)
          this.colorTextoReiniciar=color(0)
          this.okReiniciar=false
      }
      if ((mouseX> this.posXVolver-this.ancho/2)&&(mouseX< this.posXVolver+this.ancho/2)&&(mouseY> this.posYVolver-this.largo/2)&&(mouseY< this.posYVolver+this.largo/2)) {
        this.colorBotonVolver=color(201, 43, 45)
          this.colorTextoVolver=color(255)
          this.okVolver=true
      } else {
        this.colorBotonVolver=color(255)
          this.colorTextoVolver=color(0)
          this.okVolver=false
      }
      break;
    case 6:
      if ((mouseX>this.posXSiguiente-this.ancho/2)&&(mouseX<this.posXSiguiente+this.ancho/2)&&(mouseY>this.posYSiguiente-this.largo/2)&&(mouseY<this.posYSiguiente+this.largo/2)) {
        this.colorBotonSiguiente=color(41, 201, 50)
          this.colorTextoSiguiente=color(255)
          this.okSiguiente=true
      } else {
        this.colorBotonSiguiente=color(255)
          this.colorTextoSiguiente=color(0)
          this.okSiguiente=false
      }
      break;
    case 7:
      if ((mouseX>this.posXSiguiente-this.ancho/2)&&(mouseX<this.posXSiguiente+this.ancho/2)&&(mouseY>this.posYSiguiente-this.largo/2)&&(mouseY<this.posYSiguiente+this.largo/2)) {
        this.colorBotonSiguiente=color(41, 201, 50)
          this.colorTextoSiguiente=color(255)
          this.okSiguiente=true
      } else {
        this.colorBotonSiguiente=color(255)
          this.colorTextoSiguiente=color(0)
          this.okSiguiente=false
      }
      break;
    case 8:
      if ((mouseX>this.posXDesicionA-this.anchoAB/2)&&(mouseX<this.posXDesicionA+this.anchoAB/2)&&(mouseY>this.posYDesicionA-this.largoAB/2)&&(mouseY<this.posYDesicionA+this.largoAB/2)) {
        this.colorBotonDesicionA=color(129, 25, 37)
          this.colorTextoDesicionA=color(255)
          this.okDesicionA=true
      } else {
        this.colorBotonDesicionA=color(255)
          this.colorTextoDesicionA=color(0)
          this.okDesicionA=false
      }
      if ((mouseX>this.posXDesicionB-this.anchoAB/2)&&(mouseX<this.posXDesicionB+this.anchoAB/2)&&(mouseY>this.posYDesicionB-this.largoAB/2)&&(mouseY<this.posYDesicionB+this.largoAB/2)) {
        this.colorBotonDesicionB=color(129, 25, 37)
          this.colorTextoDesicionB=color(255)
          this.okDesicionB=true
      } else {
        this.colorBotonDesicionB=color(255)
          this.colorTextoDesicionB=color(0)
          this.okDesicionB=false
      }
      break;
    case 9:
      if ((mouseX> this.posXReiniciar-this.ancho/2)&&(mouseX< this.posXReiniciar+this.ancho/2)&&(mouseY> this.posYReiniciar-this.largo/2)&&(mouseY<this.posYReiniciar+this.largo/2)) {
        this.colorBotonReiniciar=color(41, 201, 50)
          this.colorTextoReiniciar=color(255)
          this.okReiniciar=true
      } else {
        this.colorBotonReiniciar=color(255)
          this.colorTextoReiniciar=color(0)
          this.okReiniciar=false
      }
      if ((mouseX> this.posXVolver-this.ancho/2)&&(mouseX< this.posXVolver+this.ancho/2)&&(mouseY> this.posYVolver-this.largo/2)&&(mouseY< this.posYVolver+this.largo/2)) {
        this.colorBotonVolver=color(201, 43, 45)
          this.colorTextoVolver=color(255)
          this.okVolver=true
      } else {
        this.colorBotonVolver=color(255)
          this.colorTextoVolver=color(0)
          this.okVolver=false
      }
      break;
    case 10:
      if ((mouseX>this.posXSiguiente-this.ancho/2)&&(mouseX<this.posXSiguiente+this.ancho/2)&&(mouseY>this.posYSiguiente-this.largo/2)&&(mouseY<this.posYSiguiente+this.largo/2)) {
        this.colorBotonSiguiente=color(41, 201, 50)
          this.colorTextoSiguiente=color(255)
          this.okSiguiente=true
      } else {
        this.colorBotonSiguiente=color(255)
          this.colorTextoSiguiente=color(0)
          this.okSiguiente=false
      }
      break;
    case 11:
      if ((mouseX> this.posXIniciarJuego-this.ancho/2)&&(mouseX< this.posXIniciarJuego+this.ancho/2)&&(mouseY> this.posYIniciarJuego-this.largo/2)&&(mouseY< this.posYIniciarJuego+this.largo/2)) {
        this.colorBotonJuego=color(50, 201, 43)
          this.colorTextoJuego=color(255)
          this.okJuego=true
      } else {
        this.colorBotonJuego=color(255)
          this.colorTextoJuego=color(0)
          this.okJuego=false
      }
      break;
    case 13:
      if ((mouseX>this.posXInicio-this.ancho/2)&&(mouseX<this.posXInicio+this.ancho/2)&&(mouseY>this.posYInicio-this.largo/2)&&(mouseY<this.posYInicio+this.largo/2)) {
        this.colorBotonInicio=color(30, 167, 93)
          this.colorTextoInicio=color(255)
          this.okInicio=true
      } else {
        this.colorBotonInicio=color(255)
          this.colorTextoInicio=color(0)
          this.okInicio=false
      }
      break;
    case 14:
if ((mouseX> this.posXReiniciarJuego-this.ancho/2)&&(mouseX< this.posXReiniciarJuego+this.ancho/2)&&(mouseY>this.posYReiniciarJuego-this.largo/2)&&(mouseY<this.posYReiniciarJuego+this.largo/2)) {
      this.colorBotonReiniciarJuego=color(201,43,48)
      this.colorTextoReiniciarJuego=color(255)
      this.okReiniciarJuego=true
} else {
      this.colorBotonReiniciarJuego=color(255)
      this.colorTextoReiniciarJuego=color(0)
      this.okReiniciarJuego=false
}
        break;
    }
  }
}
