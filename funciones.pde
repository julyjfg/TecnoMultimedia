void historia(int pantallas) {
  image(listaImagenes[pantallas], 0, 0, 600, 600);
  botones(pantallas, listaTextos);
}

void cargarListas(PImage[] imagenes, String[] textos) {
  for (int i=0; i<=11; i++) {
    imagenes[i]=cargarImagen(i);
  }
  for (int j=0; j<=21; j++) {
    textos[j]=cargarTextos(j);
  }
}

PImage cargarImagen(int pos) {
  PImage imagen=null;
  switch (pos) {
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
  }
  return imagen;
}

String cargarTextos(int pos) {
  String texto=" ";
  switch (pos) {
  case 0:
    texto="La Odisea";
    break;
  case 1:
    texto="Iniciar";
    break;
  case 2:
    texto="Creditos";
    break;
  case 3:
    texto="Inicio";
    break;
  case 4:
    texto="Director";
    break;
  case 5:
    texto="Artista";
    break;
  case 6:
    texto="Programador";
    break;
  case 7:
    texto="Julian Ferrari Goñi";
    break;
  case 8:
    texto="Siguiente";
    break;
  case 9:
    texto="A";
    break;
  case 10:
    texto="B";
    break;
  case 11:
    texto="Reiniciar";
    break;
  case 12:
    texto="Volver";
    break;
  case 13:
    texto="Historia de pantalla 2";//Sinopsis Hist pantalla 2
    break;
  case 14:
    texto="Historia de pantalla 3";//Hist pantalla 3
    break;
  case 15:
    texto="Historia de pantalla 4";//Hist pantalla 4
    break;
  case 16:
    texto="Historia de pantalla 5";//Hist pantalla 5
    break;
  case 17:
    texto="Historia de pantalla 6";//Hist pantalla 6
    break;
  case 18:
    texto="Historia de pantalla 7";//Hist pantalla 7
    break;
  case 19:
    texto="Historia de pantalla 9";//Hist pantalla 8
    break;
  case 20:
    texto="Historia de pantalla 9";//Hist pantalla 9 Final
    break;
  case 21:
    texto="Historia de pantalla 10";//Hist pantalla 10 Final alternativo
    break;
  case 22:
    texto="Historia de pantalla 11";//Hist pantalla 11 Final alternativo
    break;
  }
  return texto;
}

void botones(int pantallas, String[] textos) {
  if (pantallas==0) {

    generarBoton(posXBotonIniciar, posYBotonIniciar, tamanioAnchoBotones, tamanioAltoBotones, radioDelBoton, tamanioTexto, textos[1]);
    generarBoton(posXBotonCreditos, posYBotonCreditos, tamanioAnchoBotones, tamanioAltoBotones, radioDelBoton, tamanioTexto, textos[2]);
  }
  if (pantallas==1) {
    generarBoton(posXBotonInicioDeCreditos, posYBotonInicioDeCreditos, tamanioAnchoBotones, tamanioAltoBotones, radioDelBoton, tamanioTexto, textos[3]);
  }
  if ((pantallas==2)||(pantallas==3)||(pantallas==5)||(pantallas==6)||(pantallas==7)) {

    generarBoton(posXBotonSiguiente, posYBotonSiguiente, tamanioAnchoBotones, tamanioAltoBotones, radioDelBoton, tamanioTexto, textos[8]);
  }
  if ((pantallas==4)||(pantallas==8)) {

    generarBoton(posXBotonA, posYBotonA, tamanioAnchoBotonesAYB, tamanioAltoBotonesAYB, radioDelBotonAYB, tamanioTexto, textos[9]);
    generarBoton(posXBotonB, posYBotonB, tamanioAnchoBotonesAYB, tamanioAltoBotonesAYB, radioDelBotonAYB, tamanioTexto, textos[10]);
  }
  if (pantallas==9) {

    generarBoton(posXBotonInicioFinal, posYBotonInicioFinal, tamanioAnchoBotones, tamanioAltoBotones, radioDelBoton, tamanioTexto, textos[3]);
  }
  if ((pantallas==10)||(pantallas==11)) {
    generarBoton(posXBotonReiniciar, posYBotonReiniciar, tamanioAnchoBotones, tamanioAltoBotones, radioDelBoton, tamanioTexto, textos[11]);
    generarBoton(posXBotonVolver, posYBotonVolver, tamanioAnchoBotones, tamanioAltoBotones, radioDelBoton, tamanioTexto, textos[12]);
  }
}
void generarBoton(int posX, int posY, int ancho, int alto, int radio, int tamTexto, String texto) {
  push();
  rectMode(CENTER);
  fill(colorBoton);
  rect(posX, posY, ancho, alto, radio);
  textAlign(CENTER);
  textSize(tamTexto);
  fill(colorTexto);
  text(texto, posX, posY);
  pop();
}

void botonPresionado() {
  if (pantallas == 0) {
    if (dist(mouseX, mouseY, posXBotonIniciar, posYBotonIniciar) < radioDelBoton) {
      pantallas= 2;
      println("Boton Iniciar Activado");
    } else if (dist(mouseX, mouseY, posXBotonCreditos, posYBotonCreditos) < radioDelBoton) {
      pantallas = 1;
      println("Boton Creditos Activado");
    }
  }
  if ((pantallas==1)||(pantallas==9)) {
    if (((dist(mouseX, mouseY, posXBotonInicioDeCreditos, posYBotonInicioDeCreditos) < radioDelBoton))||((dist(mouseX, mouseY, posXBotonInicioFinal, posYBotonInicioFinal) < radioDelBoton))) {
      pantallas=0;
    }
  }
  if ((pantallas==2)||(pantallas==3)||(pantallas==5)||(pantallas==6)||(pantallas==7)) {
    if (dist(mouseX, mouseY, posXBotonSiguiente, posYBotonSiguiente) < radioDelBoton) {
      pantallas++;
    }
  }
  if ((pantallas==4)||(pantallas==8)) {
    if ((dist(mouseX, mouseY, posXBotonA, posYBotonA) < radioDelBotonAYB)&&(pantallas==4)) {
      pantallas=11;
    }
    if ((dist(mouseX, mouseY, posXBotonA, posYBotonA) < radioDelBotonAYB)&&(pantallas==8)) {
      pantallas=10;
    }
    if (dist(mouseX, mouseY, posXBotonB, posYBotonB) < radioDelBotonAYB) {
      pantallas++;
    }
  }
  if ((pantallas==10)||(pantallas==11)) {
    if (dist(mouseX, mouseY, posXBotonReiniciar, posYBotonReiniciar) < radioDelBoton) {
      pantallas=0;
    }
    if ((dist(mouseX, mouseY, posXBotonVolver, posYBotonVolver) < radioDelBoton)&&(pantallas==11)) {
      pantallas=4;
    }
    if ((dist(mouseX, mouseY, posXBotonVolver, posYBotonVolver) < radioDelBoton)&&(pantallas==10)) {
      pantallas=8;
    }
  }
}
