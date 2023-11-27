class Disparar {
  constructor(posX, posY) {
    this.enemigosEliminados=0
      this.balaX=[]
      this.balaY=[]
      this.recargar=true
      this.disparando=false
      this.tam=100
      this.hit=false
      this.bala=loadImage("assets/Arrow.png")
  }
  dibujar(posX, posY) {
    this.posXBalaConPersonaje = posX
      this.posYBalaConPersonaje=posY
      this.disparo()
    for (let i = 0; i < this.balaX.length; i++) {
      push()
        noStroke()
        fill(255)
        image(this.bala,this.balaX[i], this.balaY[i], this.tam)
        pop()
    }
  }
  actualizarEnemigosEliminados() {
    this.enemigosEliminados++
  }
  reiniciarEnemigosEliminados(){
  this.enemigosEliminados=0
  }
  disparo() {

    if (this.disparando && this.recargar) {
      this.balaX.push(this.posXBalaConPersonaje)
        this.balaY.push(this.posYBalaConPersonaje)
        this.recargar = false
    }

    for (let i = this.balaX.length - 1; i >= 0; i--){
    for (let i = this.balaY.length - 1; i >= 0; i--){
      this.balaX[i] += 25
        if (this.balaX[i] <= 0 || this.balaX[i] >= windowWidth) {
        this.balaX.splice(i, 1)
          this.balaY.splice(i, 1)
          this.recargar = true
      }
    }
    }
  }
eliminarDisparo(){
 for (let i = this.balaX.length - 1; i >= 0; i--){
   for (let i = this.balaY.length - 1; i >= 0; i--){
    this.balaX.splice(i, 1)
    this.balaY.splice(i, 1)
    this.recargar = true
   }
 }  
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
