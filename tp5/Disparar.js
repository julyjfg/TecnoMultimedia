class Disparar {
  constructor(posX, posY) {
    this.enemigosEliminados=0
      this.balaX=[]
      this.balaY=[]
      this.recargar=true
      this.disparando=false
      this.tam=20
      this.hit=false
  }
  dibujar(posX, posY, enemigos, hit) {
    this.posXBalaConPersonaje = posX
      this.posYBalaConPersonaje=posY
      this.disparo()
      for (let i = this.balaX.length - 1; i >= 0; i--) {
      for (let i = this.balaY.length - 1; i >= 0; i--) {
        for (let j = enemigos.length - 1; j >= 0; j--) {
          const distancia =dist(this.balaX[i],
            this.balaY[i],
            enemigos[j].posX,
            enemigos[j].posY
            )
            if (distancia < this.tam) {
            print("llegue")
              this.balaX.splice(i, 1)
              this.balaY.splice(i, 1)
              this.hit=true
              if (this.hit) {
              this.actualizarEnemigosEliminados()
                this.hit=false
            }
          }
        }
      }
    }
    // Dibuja las balas
    for (let i = 0; i < this.balaX.length; i++) {
      push()
        noStroke()
        fill(255)
        ellipse(this.balaX[i], this.balaY[i], this.tam)
        pop()
    }
  }
  actualizarEnemigosEliminados() {
    this.enemigosEliminados++
  }
  disparo() {

    if (this.disparando && this.recargar) {
      this.balaX.push(this.posXBalaConPersonaje)
        this.balaY.push(this.posYBalaConPersonaje)
        this.recargar = false
    }

    for (let i = this.balaX.length - 1; i >= 0; i--){
    for (let i = this.balaY.length - 1; i >= 0; i--){
      this.balaX[i] += 20
        if (this.balaX[i] <= 0 || this.balaX[i] >= windowWidth) {
        this.balaX.splice(i, 1)
          this.balaY.splice(i, 1)
          this.recargar = true
      }
    }
    }
    print("Cantidad de balas:", this.balaX.length)
  }

  keyPressed() {
    if (key === " ") {
      this.disparando = true
        print("BANG")
    }
  }

  keyReleased() {
    if (key === " ") {
      this.disparando = false
        print("ALTO EL FUEGO")
    }
  }
}
