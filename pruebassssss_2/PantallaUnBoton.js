class PantallaUnBoton {
  constructor(imgFondo, botX, botY, pantsig, textoBot, lineas) {
    this.imgFondo = imgFondo;
    this.ancho= 600;
    this.alto = 600;
    this.botX = botX;
    this.botY = botY;
    this.pantsig = pantsig;
    this.boton = new Boton(this.botX, this.botY, 180, 50, textoBot);
    //this.texto = new Texto (textoY, linea1, linea2, linea3);
    this.texto = lineas
  }

  dibujar() {
    image(this.imgFondo, 0, 0, this.ancho, this.alto);
    push()
    fill(0)
    textSize(20)
    text(this.texto,width/2,height/2)
    pop()
    this.boton.dibujar();
  
  }
  click() {
    if (this.boton.click()) {
      console.log(this.pantsig);
      return this.pantsig;
    }
    return false;
  }
}
