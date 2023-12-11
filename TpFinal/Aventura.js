class Aventura {
  constructor() {
    this.fondos= new Fondos()
      this.botones=new Botones()
      this.juego= new Juego()
      this.textos=new Textos()
      this.pantallas=0
      this.sonidoBoton=loadSound('assets/Boton.webm')
      this.sonidoAventura=loadSound('assets/Musica.webm')
      this.sonidoJuego=loadSound('assets/TheEndBegins.webm')
      this.sonidoJuego.setVolume(0.3)
      this.sonidoAventura.setVolume(0.6)
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
        this.activarSonidoBoton()
          this.activarSonidoAventura()
          this.pantallas=2
          this.botones.okIniciarAvent=false
          this.botones.colorBotonIniciarAvent=color(255)
          this.botones.colorTextoIniciarAvent=color(0)
      } else if (this.botones.okCreditos) {
        this.activarSonidoBoton()
          this.pantallas=1
          this.botones.colorBotonCreditos=color(255)
          this.botones.colorTextoCreditos=color(0)
          this.botones.okCreditos=false
      }
      break
      case 1:
      if (this.botones.okInicio) {
        this.activarSonidoBoton()
          this.pantallas=0
          this.botones.okInicio=false
          this.botones.colorBotonInicio=color(255)
          this.botones.colorTextoInicio=color(0)
      }
      break
      case 2:
      if (this.botones.okSiguiente) {
        this.activarSonidoBoton()
          this.pantallas++
          this.botones.okSiguiente=false
          this.botones.colorBotonSiguiente=color(255)
          this.botones.colorTextoSiguiente=color(0)
      }
      break
      case 3:
      if (this.botones.okSiguiente) {
        this.activarSonidoBoton()
          this.pantallas++
          this.botones.okSiguiente=false
          this.botones.colorBotonSiguiente=color(255)
          this.botones.colorTextoSiguiente=color(0)
      }
      break
      case 4:
      if (this.botones.okDesicionA) {
        this.activarSonidoBoton()
          this.pantallas++
          this.botones.okDesicionA=false
          this.botones.colorBotonDesicionA=color(255)
          this.botones.colorTextoDesicionA=color(0)
      } else if (this.botones.okDesicionB) {
        this.activarSonidoBoton()
          this.pantallas=6
          this.botones.colorBotonDesicionB=color(255)
          this.botones.colorTextoDesicionB=color(0)
          this.botones.okDesicionB=false
      }
      break
      case 5:
      if (this.botones.okVolver) {
        this.activarSonidoBoton()
          this.pantallas--
          this.botones.okVolver=false
          this.botones.colorBotonVolver=color(255)
          this.botones.colorTextoVolver=color(0)
      } else if (this.botones.okReiniciar) {
        this.activarSonidoBoton()
          this.detenerSonidoAventura()
          this.activarSonidoAventura()
          this.pantallas=2
          this.botones.colorBotonReiniciar=color(255)
          this.botones.colorTextoReiniciar=color(0)
          this.botones.okReiniciar=false
      }
      break
      case 6:
      if (this.botones.okSiguiente) {
        this.activarSonidoBoton()
          this.pantallas++
          this.botones.okSiguiente=false
          this.botones.colorBotonSiguiente=color(255)
          this.botones.colorTextoSiguiente=color(0)
      }
      break
      case 7:
      if (this.botones.okSiguiente) {
        this.activarSonidoBoton()
          this.pantallas++
          this.botones.okSiguiente=false
          this.botones.colorBotonSiguiente=color(255)
          this.botones.colorTextoSiguiente=color(0)
      }
      break
      case 8:
      if (this.botones.okDesicionA) {
        this.activarSonidoBoton()
          this.pantallas=10
          this.botones.okDesicionA=false
          this.botones.colorBotonDesicionA=color(255)
          this.botones.colorTextoDesicionA=color(0)
      } else if (this.botones.okDesicionB) {
        this.activarSonidoBoton()
          this.pantallas++
          this.botones.colorBotonDesicionB=color(255)
          this.botones.colorTextoDesicionB=color(0)
          this.botones.okDesicionB=false
      }
      break
      case 9:
      if (this.botones.okVolver) {
        this.activarSonidoBoton()
          this.pantallas--
          this.botones.okVolver=false
          this.botones.colorBotonVolver=color(255)
          this.botones.colorTextoVolver=color(0)
      } else if (this.botones.okReiniciar) {
        this.activarSonidoBoton()
          this.detenerSonidoAventura()
          this.activarSonidoAventura()
          this.pantallas=2
          this.botones.colorBotonReiniciar=color(255)
          this.botones.colorTextoReiniciar=color(0)
          this.botones.okReiniciar=false
      }
      break
      case 10:
      if (this.botones.okSiguiente) {
        this.activarSonidoBoton()
          this.pantallas++
          this.botones.okSiguiente=false
          this.botones.colorBotonSiguiente=color(255)
          this.botones.colorTextoSiguiente=color(0)
      }
      break
      case 11:
      if (this.botones.okJuego) {
        this.activarSonidoBoton()
          this.detenerSonidoAventura()
          this.activarSonidoJuego()
          this.pantallas++
          this.juego.reinciarJuego()
          this.botones.okJuego=false
          this.botones.colorBotonJuego=color(255)
          this.botones.colorTextoJuego=color(0)
      }
      break
      case 13:
      if (this.botones.okInicio) {
        this.activarSonidoBoton()
          this.detenerSonidoJuego()
          this.pantallas=0
          this.botones.okInicio=false
          this.botones.colorBotonInicio=color(255)
          this.botones.colorTextoInicio=color(0)
      }
      break
      case 14:
      if (this.botones.okReiniciarJuego) {
        this.activarSonidoBoton()
          this.detenerSonidoJuego()
          this.activarSonidoJuego()
          this.pantallas=12
          this.juego.reinciarJuego()
          this.botones.okReiniciarJuego=false
          this.botones.colorBotonReiniciarJuego=color(255)
          this.botones.colorTextoReiniciarJuego=color(0)
      }
      break
    }
  }
  activarSonidoBoton() {
    if (!this.sonidoBoton.isPlaying()) {
      this.sonidoBoton.play()
    }
  }
  activarSonidoAventura() {
    if (!this.sonidoAventura.isPlaying()) {
      this.sonidoAventura.play()
    }
  }
  detenerSonidoAventura() {
    if (this.sonidoAventura.isPlaying()) {
      this.sonidoAventura.stop()
    }
  }
  activarSonidoJuego() {
    if (!this.sonidoJuego.isPlaying()) {
      this.sonidoJuego.play()
    }
  }
  detenerSonidoJuego() {
    if (this.sonidoJuego.isPlaying()) {
      this.sonidoJuego.stop()
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
