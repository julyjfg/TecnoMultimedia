class Disparar {
  constructor(posX, posY) {

      this.balas=[]
      this.recargar=true
      this.hit=false
      this.disparando=false
      this.tam=20
  }
  dibujar(posX, posY, enemigos,enemigosEliminados) {
    this.posXBalaConPersonaje = posX
    this.posYBalaConPersonaje=posY


      this.disparo()

      for (let i = this.balas.length - 1; i >= 0; i--) {
      for (let j = enemigos.length - 1; j >= 0; j--) {
        if (dist(this.balas[i].x,
                  this.balas[i].y,
                  enemigos[j].posX,
                  enemigos[j].posY
                  )< this.tam) {
          this.balas.splice(i, 1)
          enemigos.splice(j, 1)
          // Incrementa el contador de enemigos eliminados en el Estado
          enemigosEliminados++
        }
      }
    }

    // Dibuja las balas
    for (let i = 0; i < this.balas.length; i++) {
      push()
      noStroke()
      fill(255)
      ellipse(this.balas[i].x, this.balas[i].y, this.tam)
      pop()
    }
  }

  disparo() {
    if (this.disparando && this.recargar) {
      this.balas.push( {x:this.posXBalaConPersonaje, y:this.posYBalaConPersonaje})
      this.recargar = false
    }

    for (let i = this.balas.length - 1; i >= 0; i--) {
      this.balas[i].x += 20
      if (this.balas[i].x <= 0 || this.balas[i].x >= windowWidth) {
        this.balas.splice(i, 1)
        this.recargar = true
      }
    }
    print("Cantidad de balas:", this.balas.length)
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
