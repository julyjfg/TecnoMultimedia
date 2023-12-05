class Aventura {
  constructor() {
    this.fondos= new Fondos()
      this.botones=new Botones()
      this.juego= new Juego()
      this.textos=new Textos()
      this.pantallas=0
  }
  dibujar() {
    this.fondos.cargarFondos(this.pantallas)
      this.botones.cargarBotones(this.pantallas)
      this.juego.dibujar(this.pantallas)
      this.textos.cargarTextos(this.pantallas, this.juego.disparo.enemigosEliminados)
      if (this.juego.okFinalTiempo) {
      this.pantallas++
        this.juego.okFinalTiempo=false
    } else if (this.juego.okEscaparon) {
      this.pantallas=14
        this.juego.okEscaparon=false
    }
  }
  cambioDePantallas() {
    switch(this.pantallas) {
    case 0:
      if (this.botones.okIniciarAvent) {
        this.pantallas=2
          this.botones.okIniciarAvent=false
          this.botones.colorBotonIniciarAvent=color(255)
          this.botones.colorTextoIniciarAvent=color(0)
      } else if (this.botones.okCreditos) {
        this.pantallas=1
          this.botones.colorBotonCreditos=color(255)
          this.botones.colorTextoCreditos=color(0)
          this.botones.okCreditos=false
      }
      break
      case 1:
      if (this.botones.okInicio) {
        this.pantallas=0
          this.botones.okInicio=false
          this.botones.colorBotonInicio=color(255)
          this.botones.colorTextoInicio=color(0)
      }
      break
      case 2:
      if (this.botones.okSiguiente) {
        this.pantallas++
          this.botones.okSiguiente=false
          this.botones.colorBotonSiguiente=color(255)
          this.botones.colorTextoSiguiente=color(0)
      }
      break
      case 3:
      if (this.botones.okSiguiente) {
        this.pantallas++
          this.botones.okSiguiente=false
          this.botones.colorBotonSiguiente=color(255)
          this.botones.colorTextoSiguiente=color(0)
      }
      break
      case 4:
      if (this.botones.okDesicionA) {
        this.pantallas++
          this.botones.okDesicionA=false
          this.botones.colorBotonDesicionA=color(255)
          this.botones.colorTextoDesicionA=color(0)
      } else if (this.botones.okDesicionB) {
        this.pantallas=6
          this.botones.colorBotonDesicionB=color(255)
          this.botones.colorTextoDesicionB=color(0)
          this.botones.okDesicionB=false
      }
      break
      case 5:
      if (this.botones.okVolver) {
        this.pantallas--
          this.botones.okVolver=false
          this.botones.colorBotonVolver=color(255)
          this.botones.colorTextoVolver=color(0)
      } else if (this.botones.okReiniciar) {
        this.pantallas=2
          this.botones.colorBotonReiniciar=color(255)
          this.botones.colorTextoReiniciar=color(0)
          this.botones.okReiniciar=false
      }
      break
      case 6:
      if (this.botones.okSiguiente) {
        this.pantallas++
          this.botones.okSiguiente=false
          this.botones.colorBotonSiguiente=color(255)
          this.botones.colorTextoSiguiente=color(0)
      }
      break
      case 7:
      if (this.botones.okSiguiente) {
        this.pantallas++
          this.botones.okSiguiente=false
          this.botones.colorBotonSiguiente=color(255)
          this.botones.colorTextoSiguiente=color(0)
      }
      break
      case 8:
      if (this.botones.okDesicionA) {
        this.pantallas=10
          this.botones.okDesicionA=false
          this.botones.colorBotonDesicionA=color(255)
          this.botones.colorTextoDesicionA=color(0)
      } else if (this.botones.okDesicionB) {
        this.pantallas++
          this.botones.colorBotonDesicionB=color(255)
          this.botones.colorTextoDesicionB=color(0)
          this.botones.okDesicionB=false
      }
      break
      case 9:
      if (this.botones.okVolver) {
        this.pantallas--
          this.botones.okVolver=false
          this.botones.colorBotonVolver=color(255)
          this.botones.colorTextoVolver=color(0)
      } else if (this.botones.okReiniciar) {
        this.pantallas=2
          this.botones.colorBotonReiniciar=color(255)
          this.botones.colorTextoReiniciar=color(0)
          this.botones.okReiniciar=false
      }
      break
      case 10:
      if (this.botones.okSiguiente) {
        this.pantallas++
          this.botones.okSiguiente=false
          this.botones.colorBotonSiguiente=color(255)
          this.botones.colorTextoSiguiente=color(0)
      }
      break
      case 11:
      if (this.botones.okJuego) {
        this.pantallas++
          this.juego.reinciarJuego()
          this.botones.okJuego=false
          this.botones.colorBotonJuego=color(255)
          this.botones.colorTextoJuego=color(0)
      }
      break
      case 13:
      if (this.botones.okInicio) {
        this.pantallas=0
          this.botones.okInicio=false
          this.botones.colorBotonInicio=color(255)
          this.botones.colorTextoInicio=color(0)
      }
      break
      case 14:
      if (this.botones.okReiniciarJuego) {
        this.pantallas=12
          this.juego.reinciarJuego()
          this.botones.okReiniciarJuego=false
          this.botones.colorBotonReiniciarJuego=color(255)
          this.botones.colorTextoReiniciarJuego=color(0)
      }
      break
    }
  }
  keyPressed() {
    this.juego.keyPressed()
  }
  keyReleased() {
    this.juego.keyReleased()
  }
  mouseMoved() {
    this.botones.mouseMoved(this.pantallas)
  }
  mousePressed() {
    this.cambioDePantallas()
  }
}
