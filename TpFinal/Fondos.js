class Fondos {
  constructor() {
    this.imagenes=[]
    for(let i=0;i<=14;i++){
      this.imagenes[i]=loadImage("assets/imagen"+i+".png")
    }
  }
  cargarFondos(pantallas){
  switch(pantallas){
    case 0:
  image(this.imagenes[pantallas],0,0,width,height) //Fondo Inicio
  break
    case 1:
  image(this.imagenes[pantallas],0,0,width,height) //Fondo Creditos
  break
    case 2:
  image(this.imagenes[pantallas],0,0,width,height) //fondo aventura grafica
  break
    case 3:
  image(this.imagenes[pantallas],0,0,width,height) //fondo aventura grafica
  break
    case 4:
  image(this.imagenes[pantallas],0,0,width,height) //fondo aventura grafica Desicion
  break
    case 5:
  image(this.imagenes[pantallas],0,0,width,height) //fondo aventura grafica Final Alternativo
  break
    case 6:
  image(this.imagenes[pantallas],0,0,width,height) //fondo aventura grafica
  break
    case 7:
  image(this.imagenes[pantallas],0,0,width,height) //fondo aventura grafica
  break
    case 8:
  image(this.imagenes[pantallas],0,0,width,height) //fondo aventura grafica Desicion
  break
    case 9:
  image(this.imagenes[pantallas],0,0,width,height) //fondo aventura grafica Final Alternativo 
  break
    case 10:
  image(this.imagenes[pantallas],0,0,width,height) // fondo aventura grafica
  break
    case 11:
  image(this.imagenes[pantallas],0,0,width,height) // Fondo instrucciones juego
  break
  case 12:
  image(this.imagenes[pantallas],0,0,width,height) //fondo juego
  break
  case 13:
  image(this.imagenes[pantallas],0,0,width,height) //fondo final
  break
  case 14:
  image(this.imagenes[pantallas],0,0,width,height) // fondo perdiste
  break
  }
  }
}
