class Juego {

  constructor() {
    this.okFinalTiempo=false
      this.cantEnemigos=0
      this.enemigosEliminados=0
      this.interfaz=new Interfaz(90)
      this.personaje=new Personaje()
      this.disparo=new Disparar(this.personaje.posX, this.personaje.posX)
      this.enemigos=[]
      this.okEscaparon=false
      this.cantVidas=5
      this.sonido=loadSound('RageofSparta.wav')
      this.sonido.setVolume(0.4)
  }

  reinciarJuego() {
    this.crearEnemigos()
      this.disparo.reiniciarEnemigosEliminados()
      this.cantVidas=5
      this.interfaz.resetear()
      this.disparo.enemigosEliminados=0
      this.okFinalTiempo=false
      this.okEscaparon=false
  }
  dibujar(pantallas) {
    if (pantallas==12) {
      if (this.enemigos==null) {
        this.crearEnemigos()
      } else {
        if (this.enemigos.length>0) {
          this.personaje.dibujar()
            this.disparo.dibujar(this.personaje.posX, this.personaje.posY)
            for (let i=0; i<=this.cantEnemigos; i++) {
            this.enemigos[i].dibujar()
              if (this.enemigos[i].escapo) {
              this. eliminarEnemigo(i)
                this.cantVidas--
            } else if (dist(this.disparo.balaX, this.disparo.balaY, this.enemigos[i].posX, this.enemigos[i].posY)<this.disparo.tam) {
              this. enemigoMuerto(i)
                this.disparo.eliminarDisparo()
                this.disparo.actualizarEnemigosEliminados()
            }
          }
          this.interfaz.dibujar(this.disparo.enemigosEliminados, this.cantVidas)
        } else {
          this.crearEnemigos()
        }
        if (this.interfaz.termino()) {
          this.okFinalTiempo=true
            this.sonido.stop()
            this.disparo.eliminarDisparo()
        } else if (this.cantVidas==0) {
          this.okEscaparon=true
            this.sonido.stop()
            this.disparo.eliminarDisparo()
        }
      }
    }
  }
  crearEnemigos() {
    this.cantEnemigos=5
      for (let i=0; i<=this.cantEnemigos; i++) {
      this.enemigos[i]=new Enemigo()
    }
  }
  eliminarEnemigo(num) {

    this.enemigos.splice(num, 1)
      this.cantEnemigos--
  }
  enemigoMuerto(num) {
    this.enemigos[num].muerte()
      this.enemigos.splice(num, 1)
      this.cantEnemigos--
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
