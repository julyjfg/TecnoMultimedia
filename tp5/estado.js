class Estado {

  constructor() {
    this.pantalla=0
      this.fondos= new Fondos()
      this.interfaz=new Interfaz()
      this.personaje=new Personaje()
      this.disparo=new Disparar(this.personaje.posX,this.personaje.posX)
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
        this.interfaz.dibujar()
        this.personaje.dibujar()
        this.disparo.dibujar(this.personaje.posX,this.personaje.posY)
        this.enemigo[2].dibujar()
        if(dist(this.disparo.posXBala,this.disparo.posYBala,this.enemigo[2].posX,this.enemigo[2].posX)<this.disparo.tam){
      print("hit")
        }
        if (this.interfaz.okTiempo) {
          this.pantalla=2
            this.interfaz.actualizar()
        }
      break
      case 2:
      this.fondos.fondoGanaste()
    }
  }
  mousePressed() {
         if ((this.fondos.okBoton) && (this.pantalla=0)) {
      this.pantalla=1
    }
    if ((this.fondos.okBoton) && (this.pantalla=2)) {
      this.pantalla=1
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
