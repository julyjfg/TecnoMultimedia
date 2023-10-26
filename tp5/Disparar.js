class Disparar {
  constructor(posX,posY) {
    this.posXBalaConPersonaje=0
      this.posYBalaConPersonaje=0
      this.posYBala=0
      this.balasX=[]
      for (let i=0; i<this.balasX.length; i++) {
      balasX[i]=windowWidth
    }
    this.recargar=true
      this.hit=false
      this.disparando=false
      this.tam=20
  }
  dibujar(posX,posY) {
    this.posXBalaConPersonaje=posX
    this.posYBalaConPersonaje=posY
    this.posXBala=this.posXBalaConPersonaje
    this.posYBala=this.posYBalaConPersonaje 
      this.disparo()
      for (let i = 0; i < this.balasX.length; i++) {
      push();
      noStroke();
      fill(255);
      ellipse(this.balasX[i], this.posYBala, this.tam);
      pop();
    }
  }

  disparo() {

    
      if (this.disparando && this.recargar) {
      this.balasX.push(this.posXBala+50)
        this.recargar = false
    }
    for (let i=0; i<this.balasX.length; i++) {
      this.balasX[i]+=20
        if (this.balasX[i]<=0) {
        balasX.splice(i, 1)
      }
      if (this.balasX.length>0 && this.balasX[i]>=windowWidth) {
        this.balasX.shift()//elimina la bala que sale de la pantalla
          this.recargar=true//permite disparar la siguiente
      }
    }
    print("Cantidad de balas:", this.balasX.length)
  }
  keyPressed() {
    if (key==" ") {
      this.disparando=true
        print("BANG")
    }
  }

  keyReleased() {
    if (key==" ") {
      this.disparando=false
        print("ALTO EL FUEGO")
    }
  }
}
