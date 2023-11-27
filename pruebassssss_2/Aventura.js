class Aventura {
  constructor() {
    this.pantallas = [];
    this.imagen= new Fondos()
    this.textos=new texto(()=>{

    this.pantallas[0] =  new PantallaDosBotones(this.imagen.imagenesfond(23), 100, 100, 300, 360, 1, 23, "COMENZAR", "CREDITOS",this.textos.cargarTextos(23));
    this.pantallas[1] = new PantallaUnBoton(this.imagen.imagenesfond(0), 100, 100, 2, "SIGUIENTE",this.textos.cargarTextos(0));
    this.pantallas[2] = new PantallaUnBoton(this.imagen.imagenesfond(1), 100, 100, 3, "SIGUIENTE",this.textos.cargarTextos(1));
    this.pantallas[3] = new PantallaUnBoton(this.imagen.imagenesfond(2), 100, 100, 4, "SIGUIENTE",this.textos.cargarTextos(2));
    this.pantallas[4] = new PantallaDosBotones(this.imagen.imagenesfond(3), 100, 100, 300, 360, 5, 18, "A", "B",this.textos.cargarTextos(3));//si elijo B fin de segundo camino
    this.pantallas[5] = new PantallaDosBotones(this.imagen.imagenesfond(5), 100, 100, 300, 360, 6, 19, "A", "B",this.textos.cargarTextos(5));//si elijo B camino tres
    //sigo camino A
    this.pantallas[6] = new PantallaUnBoton(this.imagen.imagenesfond(6), 100, 100, 7, "SIGUIENTE",this.textos.cargarTextos(6));
    this.pantallas[7] = new PantallaUnBoton(this.imagen.imagenesfond(7), 100, 100, 8, "SIGUIENTE",this.textos.cargarTextos(7));
    this.pantallas[8] = new PantallaUnBoton(this.imagen.imagenesfond(8), 100, 100, 9, "SIGUIENTE",this.textos.cargarTextos(8));
    this.pantallas[9] = new PantallaDosBotones(this.imagen.imagenesfond(9), 100, 100, 300, 360, 10, 22, "A", "B",this.textos.cargarTextos(9));//si elijo B camino cuatro
    //sigo camino A
    this.pantallas[10] = new PantallaUnBoton(this.imagen.imagenesfond(10), 100, 100, 11,"SIGUIENTE",this.textos.cargarTextos(10));
    this.pantallas[11] = new PantallaUnBoton(this.imagen.imagenesfond(11), 100, 100, 12, "SIGUIENTE",this.textos.cargarTextos(11));
    this.pantallas[12] = new PantallaUnBoton(this.imagen.imagenesfond(13), 100, 100, 13, "SIGUIENTE",this.textos.cargarTextos(13));
    this.pantallas[13] = new PantallaUnBoton(this.imagen.imagenesfond(14), 100, 100, 14, "SIGUIENTE",this.textos.cargarTextos(14));
    this.pantallas[14] = new PantallaUnBoton(this.imagen.imagenesfond(15), 100, 100, 15, "SIGUIENTE",this.textos.cargarTextos(15));
    this.pantallas[15] = new PantallaUnBoton(this.imagen.imagenesfond(16), 100, 100, 16, "SIGUIENTE",this.textos.cargarTextos(16));
    this.pantallas[16] = new PantallaUnBoton(this.imagen.imagenesfond(17), 100, 100, 17, "SIGUIENTE",this.textos.cargarTextos(17));
    this.pantallas[17] = new PantallaUnBoton(this.imagen.imagenesfond(22), 100, 100, 0, "REINICIAR",this.textos.cargarTextos(22));//reiniciar fin primer camino
    this.pantallas[18] = new PantallaUnBoton(this.imagen.imagenesfond(18), 100, 100, 0, "REINICIAR",this.textos.cargarTextos(18));//reiniciar fin segundo camino
    
    this.pantallas[19] = new PantallaUnBoton(this.imagen.imagenesfond(25), 100, 100, 20, "SIGUIENTE",this.textos.cargarTextos(25));//camino tres
    this.pantallas[20] = new PantallaUnBoton(this.imagen.imagenesfond(26), 100, 100, 21, "SIGUIENTE",this.textos.cargarTextos(26));
    this.pantallas[21] = new PantallaUnBoton(this.imagen.imagenesfond(27), 100, 100, 0, "REINICIAR",this.textos.cargarTextos(27));//fin camino tres
    
    this.pantallas[22] = new PantallaUnBoton(this.imagen.imagenesfond(20), 100, 100, 0, "REINICIAR",this.textos.cargarTextos(20));//fin camino cuatro
    
    this.pantallas[23] = new PantallaUnBoton(this.imagen.imagenesfond(24), 100, 100, 0, "INICIO",this.textos.cargarTextos(24));//creditos
    //this.pantallas[24] = new PantallaUnBoton(this.imagen.imagenesfond()[24], 100, 100, 25);
    //this.pantallas[25] = new PantallaUnBoton(this.imagen.imagenesfond()[25], 100, 100, 26);
    //this.pantallas[26] = new PantallaUnBoton(this.imagen.imagenesfond()[26], 100, 100, 27);
    //this.pantallas[27] = new PantallaUnBoton(this.imagen.imagenesfond()[27], 100, 100, 27);
    //this.pantallas[28] = new PantallaUnBoton(this.imagen.imagenesfond()[28], 100, 100, 27);

    //this.pantallas[2] = new PantallaUnBoton(this.imagen.imagenesfond()[2],boton);

    });
    this.pantallaActual = 0;
  }
  dibujar() {
    print(this.texto.cargarTextos(1));
    if (this.pantallaActual >= 0) {
      this.pantallas[this.pantallaActual].dibujar();
    }
    //if (this.pantallaActual==0) {
    //  this.pantallas[this.pantallaActual].dibujar();
    //} else if (this.pantallaActual!=1 || this.pantallaActual!=3){
    //  this.objpantallaDosBotones[this.pantallaActual].dibujar();
    //} else{
    //  this.pantallas[this.pantallaActual].dibujar();
    //}
  }
  click() {
    //this.pantallas[this.pantallaActual].click();
    this.pantallaActual = this.pantallas[this.pantallaActual].click();
    //let siguientePantalla = this.pantallas[this.pantallaActual].click(bot);
    //if (siguientePantalla !== undefined) {
    // this.pantallaActual = siguientePantalla;
    //}
    console.log(this.pantallas);
  }

}
