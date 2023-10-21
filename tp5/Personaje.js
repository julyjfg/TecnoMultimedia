class Personaje {
  constructor() {
    this.posX=100
      this.posY=windowHeight/2
      this.tamanio=50
      this.okDisparo=false
      this.posYDelDisparo=0
      this.disparar=false
      this.balasX=[]
  }
  actualizar() {
    this.mover()
  }
  dibujar() {
    this.actualizar()
      rect(this.posX, this.posY, this.tamanio)
      print(this.posX,this.posY)
  }
  disparo(this.posX, this.posY) {
  this.posYDelDisparo=this.posY

    if (this.disparar == true && this.recarga == true) {
    this.balasX.push(this.posX+50)
      this.cuenta = 0
      this.recarga = false
  }
  for (let i = 0; i < this.balasX.length; i++) {
    this.balasX[i]+= 20
      if (this.balasX[i] <= 0) {
      this.balasX.splice(i, 1)
    }
    if (!this.okHit) {
      push()
        noStroke()
        fill(234, 47, 47)
        ellipse(this.balasX[i], this.posYDelDisparo, 20, 20)
        this.posXDelDisparo=balasX[i]
        pop()
    }
  }
  this.cuenta++
    if (this.cuenta >= 30) {
    this.recarga = true
  }
  print("Cantidad de balas:", this.balasX.length)
}

  mover() {
    if (this.okIzquierda) {
      this.posY-=5
    }
    if (this.okDerecha) {
      this.posY+=5
    }
    
  }
  keyPressed() {
    if (keyCode==UP_ARROW) {
      this.okIzquierda=true
    }
    if (keyCode==DOWN_ARROW) {
      this.okDerecha=true
    }
  }
  keyReleased() {
    if (keyCode==UP_ARROW) {
      this.okIzquierda=false
    }
    if (keyCode==DOWN_ARROW) {
      this.okDerecha=false
    }
  }
}
