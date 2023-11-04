class Estado {

  constructor() {
    this.pantalla=0
      this.enemigosEliminados=0
      this.fondos= new Fondos()
      this.interfaz=new Interfaz()
      this.personaje=new Personaje()
      this.disparo=new Disparar(this.personaje.posX, this.personaje.posX)
      this.enemigo=[]
      for (let i=0; i<=5; i++) {
      this.enemigo[i]=new Enemigo()
    }
  }

  cambioDeEstado() {
    switch(this.pantalla) {
    case 0:
      this.fondos.fondoInicio()
        break
      case 1:
      background(127)
        if (this.enemigo.length==0) {
        // Todos los enemigos han sido eliminados, crea nuevos enemigos.
        this.enemigo = [];
        for (let i = 0; i < 5; i++) {
          this.enemigo[i] = new Enemigo();
        }
      }
      this.interfaz.dibujar()
        this.personaje.dibujar()
        this.disparo.dibujar(this.personaje.posX, this.personaje.posY, this.enemigo,this.enemigosEliminados)
        for (let i=0; i<=5; i++) {
        this.enemigo[i].dibujar()
      }
      if (this.interfaz.okTiempo) {
        this.pantalla=2
          this.interfaz.actualizar()
      }
      break
      case 2:
      this.fondos.fondoGanaste()
        break
    }
  }
  mousePressed() {
    if ((this.fondos.okBoton) && (this.pantalla=0)) {
      this.pantalla=1
    }
    if ((this.fondos.okBoton) && (this.pantalla=2)) {
      this.pantalla=1
      this.enemigosEliminados=0
    }
  }
  mouseMoved() {
    this.fondos.mouseMoved()
  }
  keyPressed() {
    this.personaje.keyPressed()
      this.disparo.keyPressed()
  }
  keyReleased() {
    this.personaje.keyReleased()
      this.disparo.keyReleased()
  }
}
