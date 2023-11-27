class Fondos{
constructor(){
this.imagenes=[];
this.generarImagenes()
}

imagenesfond(pos){
  return this.imagenes[pos];
}

generarImagenes(){
   for (let i = 0; i < 28; i++) {
      this.imagenes[i] = loadImage("data/imagen"+i+".jpeg");
   }
}
}
