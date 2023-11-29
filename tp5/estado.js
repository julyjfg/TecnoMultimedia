class Estado {

  constructor() {
    this.pantalla=0
    this.okHit=false
    this.cantEnemigos=0
      this.enemigosEliminados=0
      this.fondos= new Fondos()
      this.interfaz=new Interfaz()
      this.personaje=new Personaje()
      this.disparo=new Disparar(this.personaje.posX, this.personaje.posX)
      this.enemigos=[]

  }

  cambioDeEstado() {
    switch(this.pantalla) {
    case 0:
      this.fondos.fondoInicio()
        break
      case 1:
      this.fondos.fondoJuego()
      if(this.enemigos==null){
        this.crearEnemigos()
      }else{
       if (this.enemigos.length>0) {
         this.personaje.dibujar()
        this.disparo.dibujar(this.personaje.posX, this.personaje.posY)
          for (let i=0; i<=this.cantEnemigos; i++) {
            this.enemigos[i].dibujar()
            if(dist(this.disparo.balaX,this.disparo.balaY,this.enemigos[i].posX,this.enemigos[i].posY)<this.disparo.tam){
              this. eliminarEnemigo(i)
              this.disparo.eliminarDisparo()
              this.disparo.actualizarEnemigosEliminados()
            }
          }
          this.interfaz.dibujar(this.disparo.enemigosEliminados)
        } else {
          this.crearEnemigos()
        }
          if (this.interfaz.okTiempo) {
            this.pantalla=2
            this.interfaz.actualizar()
        }
     }
      break
      case 2:
      this.fondos.fondoGanaste(this.disparo.enemigosEliminados)
        break
    }
  }
 crearEnemigos(){
   this.cantEnemigos=5
       for (let i=0; i<=this.cantEnemigos; i++) {
      this.enemigos[i]=new Enemigo()
    }
 }
 eliminarEnemigo(num){
    this.enemigos.splice(num, 1)
    this.cantEnemigos--
 }
  mousePressed() {
    if ((this.fondos.okBoton) && (this.pantalla=0)) {
      this.pantalla=1
      this.interfaz.actualizar()
      this.crearEnemigos()
      this.disparo.reiniciarEnemigosEliminados()
    }
    if ((this.fondos.okBoton) && (this.pantalla=2)) {
      this.pantalla=1
      this.interfaz.actualizar()
      this.crearEnemigos()
        this.disparo.reiniciarEnemigosEliminados()
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
