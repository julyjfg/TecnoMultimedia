class Estado {

  constructor() {
    this.pantalla=0
      this.fondos= new Fondos()
  }
  cambioDeEstado() {
    switch(this.pantalla) {
    case 0:
      this.fondos.fondoInicio()
        break
      case 1:
      this.fondos.fonodoJuego()
        break
      case 2:
      this.fondos.fondoGanaste()
        break
      case 3:
      this.fondos.fondoPerdiste()
        break
      case 4:
      this.fondos.fondoCreditos()
        break
    }
  }
  mousePressed() {
    this.pantalla++
      if (this.pantalla>4) {
      this.pantalla=1
    }
  }
}
