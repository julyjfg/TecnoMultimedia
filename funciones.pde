void cargarListas(PImage[] imagenes,String[] textos){
  for(int i=0;i<=12;i++){
    imagenes[i]=cargarImagen(i);
    textos[i]=cargarTextos(i);
  }
}

  }
}
PImage cargarImagen(int pos){
  PImage imagen=null;
  switch (pos){
  case 0:
   imagen=loadImage("imagen0.jpg");
  break;
   case 1:
   imagen=loadImage("imagen1.jpg");
  break;
   case 2:
 imagen=loadImage("imagen2.jpg");
  break;
   case 3:
   imagen=loadImage("imagen3.jpg");
  break;
   case 4:
  imagen=loadImage("imagen4.jpg");
  break;
   case 5:
   imagen=loadImage("imagen5.jpg");
  break;
   case 6:
   imagen=loadImage("imagen6.jpg");
  break;
   case 7:
  imagen=loadImage("imagen7.jpg");
  break;
   case 8:
   imagen=loadImage("imagen8.jpg");
  break;
   case 9:
   imagen=loadImage("imagen9.jpg");
  break;
   case 10:
   imagen=loadImage("imagen10.jpg");
  break;
   case 11:
   imagen=loadImage("imagen11.jpg");
  break;
     case 12:
   imagen=loadImage("imagen12.jpg");
  break;
  }
  return imagen;
}

String cargarTexto(int pos){
  String texto=" ";
  switch (pos){
  case 0:
   texto="0";
  break;
   case 1:
   texto="0";
  break;
   case 2:
 texto="0";
  break;
   case 3:
   texto="0";
  break;
   case 4:
  texto="0";
  break;
   case 5:
   texto="0";
  break;
   case 6:
   texto="0";
  break;
   case 7:
  texto="0";
  break;
   case 8:
   texto="0";
  break;
   case 9:
   texto="0";
  break;
   case 10:
   texto="0";
  break;
   case 11:
   texto="0";
  break;
     case 12:
   texto="0";
  break;
  }
  return texto;
}
