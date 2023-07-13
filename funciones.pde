void historia(int pantallas) {
  image(listaImagenes[pantallas], 0, 0, 600, 600);
  botones(pantallas, listaTextos);
  generarTextos(pantallas, listaTextos);
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
    texto="Odiseo, disfrazado como mendigo, se encuentra en el palacio de Ítaca.\n Observa con atención a los pretendientes que han \n estado abusando de su casa y su esposa. \n El aire está cargado de tensión y secretos.";//Hist pantalla 2
    break;
  case 14:
    texto="Penélope anuncia que el arco de Odiseo será el premio para\n quien pueda tensarlo y disparar una flecha\n a través de los aros de doce hachas.\n Los pretendientes se alborotan, discutiendo entre ellos \n mientras Odiseo permanece en silencio, vigilante.";//Hist pantalla 3
    break;
  case 15:
    texto="Odiseo quiere hacer la prueba. Los pretendientes se niegan a permitir \nque Odiseo intente la prueba del arco. Se burlan de él,\n menospreciando su apariencia de mendigo. Ahora elige.";//Hist pantalla 4
    break;
  case 16:
    texto="La sala se llena de risas y burlas mientras los pretendientes\n se mofan de Odiseo por su audacia. Lo ridiculizan y cuestionan\n su habilidad para manejar el arco y disparar la flecha.\n Odiseo, firme en su determinación,\n mantiene la calma y se prepara para demostrar su valía.";//Hist pantalla 5
    break;
  case 17:
    texto="Justo cuando Odiseo se acerca al arco, uno de los pretendientes,\n lleno de envidia y desdén, se interpone entre él y el objetivo.\n Penélope, interviniendo como anfitriona,\n exige que Odiseo tenga la oportunidad de probar la prueba,\n recordando su hospitalidad hacia el mendigo desconocido.";//Hist pantalla 6
    break;
  case 18:
    texto="Es el turno de Odiseo de intentar tensar el arco y disparar la flecha.\n La multitud observa con incredulidad. Todos los ojos\n están puestos en él, pero una sirvienta, en un momento de descuido,\n se encuentra en una encrucijada. Puedes decidir si la sirvienta es fiel a\n Odiseo o si prefiere traicionarlo murmurando su nombre en la cena.";//Hist pantalla 7
    break;
  case 19:
    texto="Con determinación y habilidad, Odiseo tensa el arco con facilidad y dispara la flecha con precisión /n a través de los aros de doce hachas. El silencio cae sobre la sala mientras todos contemplan el increíble logro de Odiseo. /n Los pretendientes quedan atónitos y se dan cuenta de su error al subestimar al mendigo. /n El destino de Ítaca da un giro repentino.";//Hist pantalla 8
    break;
  case 20:
    texto="La furia de Odiseo se desata y, con la ayuda de su hijo Telémaco y dos fieles sirvientes, /n se abalanza sobre los pretendientes. Uno por uno, caen bajo la fuerza avasalladora de Odiseo y su astucia táctica. /n Los gritos de dolor llenan la sala mientras la venganza se hace realidad.";//Hist pantalla 9
    break;
  case 21:
    texto="Penélope duda de la identidad de Odiseo y pide una prueba más. Odiseo revela un secreto sobre su cama que solo ellos conocen, /n y Penélope finalmente reconoce a su esposo. Ambos se reencuentran con gran alegría y se cuentan sus experiencias durante la separación. /n Odiseo también se reencuentra con su padre Laertes, y la paz y la prosperidad vuelven a Ítaca. ";//Hist pantalla 10 Final
    break;
  case 22:
    texto="Odiseo, desconfiando de su propia habilidad, decide no participar en el certamen de Penélope. /n Uno de los pretendientes, con destreza, acierta a pasar la flecha a través de las doce argollas. Los pretendientes celebran victoriosos su éxito. /n El reino de Ítaca cae en manos de los pretendientes y la opresión se extiende. /n Homero, Telemaco y Penélope son asesinados en una cena, mientras Odiseo es capturado y ejecutado. /n La gloriosa ciudad de Ítaca es sometida bajo el dominio de los pretendientes.";//Hist pantalla 11 Final alternativo
    break;
  case 23:
    texto="El murmullo se propaga rápidamente entre los pretendientes, quienes se dan cuenta de que el mendigo es en realidad Odiseo. /n La tensión aumenta, y algunos pretendientes se ponen nerviosos, mientras otros se enojan. /n La sirvienta, cediendo a la tentación o al miedo, murmura el nombre de Odiseo en voz baja, revelando su identidad.";//Hist pantalla 12 Final alternativo
    break;
  case 24:
    texto="Odiseo, desprotegido, es atacado por los pretendientes y sufre una dolorosa derrota. El destino de Ítaca se ve alterado drásticamente, /n y los pretendientes se adueñan del reino, llevando a la desgracia a Odiseo y a su familia.";//Hist pantalla 12 Final alternativo 2
    break;
  }
  return texto;
}

void generarTextos(int pantallas, String[] textos) {
  switch (pantallas) {
  case 0:
    push();
    textSize(50);
    fill(0);
    text(textos[0], width/2, 80);
    pop();
    break;
  case 1:
    push();
    textSize(35);
    fill(0);
    text(textos[3], 130, 140);
    text(textos[4], 130, 240);
    text(textos[5], 130, 340);
    text(textos[7], 440, 140);
    text(textos[7], 440, 240);
    text(textos[7], 440, 340);
    pop();
    break;
  case 2:
    generarTextosHistoria(textos[13]);
    break;
  case 3:
    generarTextosHistoria(textos[14]);
    break;
  case 4:
    generarTextosHistoria(textos[15]);
    break;
  case 5:
    generarTextosHistoria(textos[16]);
    break;
  case 6:
    generarTextosHistoria(textos[17]);
    break;
  case 7:
    generarTextosHistoria(textos[18]);
    break;
  case 8:
    generarTextosHistoria(textos[13]);
    break;
  case 9:
    generarTextosHistoria(textos[13]);
    break;
  case 10:
    generarTextosHistoria(textos[13]);
    break;
  case 11:
    generarTextosHistoria(textos[13]);
    break;
  }
}


void botones(int pantallas, String[] textos) {
  if (pantallas==0) {

    generarBoton(posXBotonIniciar, posYBotonIniciar, tamanioAnchoBotones, tamanioAltoBotones, tamanioTexto, textos[1], colorBotonIniciar, colorTextoIniciar);
    generarBoton(posXBotonCreditos, posYBotonCreditos, tamanioAnchoBotones, tamanioAltoBotones, tamanioTexto, textos[2], colorBotonCreditos, colorTextoCreditos);
  }
  if (pantallas==1) {
    generarBoton(posXBotonInicioDeCreditos, posYBotonInicioDeCreditos, tamanioAnchoBotones, tamanioAltoBotones, tamanioTexto, textos[3], colorBotonInicioDeCreditos, colorTextoInicioDeCreditos);
  }
  if ((pantallas==2)||(pantallas==3)||(pantallas==5)||(pantallas==6)||(pantallas==7)) {

    generarBoton(posXBotonSiguiente, posYBotonSiguiente, tamanioAnchoBotones, tamanioAltoBotones, tamanioTexto, textos[8], colorBotonSiguiente, colorTextoSiguiente);
  }
  if ((pantallas==4)||(pantallas==8)) {

    generarBoton(posXBotonA, posYBotonA, tamanioAnchoBotonesAYB, tamanioAltoBotonesAYB, tamanioTexto, textos[9], colorBotonA, colorTextoA);
    generarBoton(posXBotonB, posYBotonB, tamanioAnchoBotonesAYB, tamanioAltoBotonesAYB, tamanioTexto, textos[10], colorBotonB, colorTextoB);
  }
  if (pantallas==9) {

    generarBoton(posXBotonInicioFinal, posYBotonInicioFinal, tamanioAnchoBotones, tamanioAltoBotones, tamanioTexto, textos[3], colorBotonInicioFinal, colorTextoInicioFinal);
  }
  if ((pantallas==10)||(pantallas==11)) {
    generarBoton(posXBotonReiniciar, posYBotonReiniciar, tamanioAnchoBotones, tamanioAltoBotones, tamanioTexto, textos[11], colorBotonReiniciar, colorTextoReiniciar);
    generarBoton(posXBotonVolver, posYBotonVolver, tamanioAnchoBotones, tamanioAltoBotones, tamanioTexto, textos[12], colorBotonVolver, colorTextoVolver);
  }
}
void generarBoton(int posX, int posY, int ancho, int alto, int tamTexto, String texto, color colorBoton, color colorTexto) {
  push();
  fill(colorBoton);
  rect(posX, posY, ancho, alto);
  textSize(tamTexto);
  fill(colorTexto);
  text(texto, posX, posY);
  pop();
}

void generarTextosHistoria( String textos) {
  push();
  smooth();
  fill(127, 250);
  rect(width/2, 120, 590, 200);
  fill(255);
  textSize(20);
  text(textos, width/2, 50);
  pop();
}

void botonPresionado() {
  if (pantallas == 0) {
    if (okIniciar) {
      pantallas= 2;
      okInicio=false;
      colorBotonIniciar=color(255);
      colorTextoIniciar=color(0);
    } else if (okCreditos) {
      pantallas = 1;
      okCreditos=false;
      colorBotonCreditos=color(255);
      colorTextoCreditos=color(0);
    }
  }
  if ((pantallas==1)||(pantallas==9)) {
    if ((okInicio)) {
      pantallas=0;
      okInicio=false;
      colorBotonInicioDeCreditos=color(255);
      colorTextoInicioDeCreditos=color(0);
      colorBotonInicioFinal=color(255);
      colorTextoInicioFinal=color(0);
    }
  }
  if ((pantallas==2)||(pantallas==3)||(pantallas==5)||(pantallas==6)||(pantallas==7)) {
    if (okSiguiente) {
      pantallas++;
      okSiguiente=false;
      colorBotonSiguiente=color(255);
      colorTextoSiguiente=color(0);
    }
  }
  if ((pantallas==4)) {
    if (okA) {
      pantallas=11;
      okA=false;
      colorBotonA=color(255);
      colorTextoA=color(0);
    } else if (okB) {
      pantallas++;
      okB=false;
      colorBotonB=color(255);
      colorTextoB=color(0);
    }
  } else if (pantallas==8) {
    if (okA) {
      pantallas=10;
      okA=false;
      colorBotonA=color(255);
      colorTextoA=color(0);
    } else if (okB) {
      pantallas++;
      okB=false;
      colorBotonB=color(255);
      colorTextoB=color(0);
    }
  }
  if (pantallas==10) {
    if (okReiniciar) {
      pantallas=0;
      okReiniciar=false;
      colorBotonReiniciar=color(255);
      colorTextoReiniciar=color(0);
    } else if (okVolver) {
      pantallas=8;
      okVolver=false;
      colorBotonVolver=color(255);
      colorTextoVolver=color(0);
    }
  } else if (pantallas==11) {
    if (okReiniciar) {
      pantallas=0;
      okReiniciar=false;
      colorBotonReiniciar=color(255);
      colorTextoReiniciar=color(0);
    } else if (okVolver) {
      pantallas=4;
      okVolver=false;
      colorBotonVolver=color(255);
      colorTextoVolver=color(0);
    }
  }
}
void cabioColorYTexto() {
  if (pantallas==0) {
    if ((mouseX>posXBotonIniciar-tamanioAnchoBotones/2)&&(mouseX<+posXBotonIniciar+tamanioAnchoBotones/2)&&(mouseY>posYBotonIniciar-tamanioAltoBotones/2)&&(mouseY<posYBotonIniciar+tamanioAltoBotones/2)) {
      colorBotonIniciar=color(46, 255, 54);
      colorTextoIniciar=color(255);
      okIniciar=true;
    } else {
      colorBotonIniciar=color(255);
      colorTextoIniciar=color(0);
      okIniciar=false;
    }
    if ((mouseX>posXBotonCreditos-tamanioAnchoBotones/2)&&(mouseX<+posXBotonCreditos+tamanioAnchoBotones/2)&&(mouseY>posYBotonCreditos-tamanioAltoBotones/2)&&(mouseY<posYBotonCreditos+tamanioAltoBotones/2)) {
      colorBotonCreditos=color(255, 0, 0);
      colorTextoCreditos=color(149, 130, 130);
      okCreditos=true;
    } else {
      colorBotonCreditos=color(255);
      colorTextoCreditos=color(0);
      okCreditos=false;
    }
  }
  if (pantallas==1) {
    if ((mouseX>posXBotonInicioDeCreditos-tamanioAnchoBotones/2)&&(mouseX<+posXBotonInicioDeCreditos+tamanioAnchoBotones/2)&&(mouseY>posYBotonInicioDeCreditos-tamanioAltoBotones/2)&&(mouseY<posYBotonInicioDeCreditos+tamanioAltoBotones/2)) {
      colorBotonInicioDeCreditos=color(245, 142, 22);
      colorTextoInicioDeCreditos=color(116, 118, 83);
      okInicio=true;
    } else {
      colorBotonInicioDeCreditos=color(255);
      colorTextoInicioDeCreditos=color(0);
      okInicio=false;
    }
  } else if (pantallas==9) {
    if ((mouseX>posXBotonInicioFinal-tamanioAnchoBotones/2)&&(mouseX<+posXBotonInicioFinal+tamanioAnchoBotones/2)&&(mouseY>posYBotonInicioFinal-tamanioAltoBotones/2)&&(mouseY<posYBotonInicioFinal+tamanioAltoBotones/2)) {
      colorBotonInicioFinal=color(245, 142, 22);
      colorTextoInicioFinal=color(116, 118, 83);
      okInicio=true;
    } else {
      colorBotonInicioFinal=color(255);
      colorTextoInicioFinal=color(0);
      okInicio=false;
    }
  }
  if ((pantallas==2)||(pantallas==3)||(pantallas==5)||(pantallas==6)||(pantallas==7)) {
    if ((mouseX>posXBotonSiguiente-tamanioAnchoBotones/2)&&(mouseX<+posXBotonSiguiente+tamanioAnchoBotones/2)&&(mouseY>posYBotonSiguiente-tamanioAltoBotones/2)&&(mouseY<posYBotonSiguiente+tamanioAltoBotones/2)) {
      colorBotonSiguiente=color(0, 197, 255);
      colorTextoSiguiente=color(137, 43, 49);
      okSiguiente=true;
    } else {
      colorBotonSiguiente=color(255);
      colorTextoSiguiente=color(0);
      okSiguiente=false;
    }
  }
  if ((pantallas==4)) {
    if ((mouseX>posXBotonA-tamanioAnchoBotonesAYB/2)&&(mouseX<+posXBotonA+tamanioAnchoBotonesAYB/2)&&(mouseY>posYBotonA-tamanioAltoBotonesAYB/2)&&(mouseY<posYBotonA+tamanioAltoBotonesAYB/2)) {
      colorBotonA=color(43, 41, 152);
      colorTextoA=color(255);
      okA=true;
    } else {
      colorBotonA=color(255);
      colorTextoA=color(0);
      okA=false;
    }
    if ((mouseX>posXBotonB-tamanioAnchoBotonesAYB/2)&&(mouseX<+posXBotonB+tamanioAnchoBotonesAYB/2)&&(mouseY>posYBotonB-tamanioAltoBotonesAYB/2)&&(mouseY<posYBotonB+tamanioAltoBotonesAYB/2)) {
      colorBotonB=color(43, 41, 152);
      colorTextoB=color(255);
      okB=true;
    } else {
      colorBotonB=color(255);
      colorTextoB=color(0);
      okB=false;
    }
  } else if (pantallas==8) {
    if ((mouseX>posXBotonA-tamanioAnchoBotonesAYB/2)&&(mouseX<+posXBotonA+tamanioAnchoBotonesAYB/2)&&(mouseY>posYBotonA-tamanioAltoBotonesAYB/2)&&(mouseY<posYBotonA+tamanioAltoBotonesAYB/2)) {
      colorBotonA=color(43, 41, 152);
      colorTextoA=color(255);
      okA=true;
    } else {
      colorBotonA=color(255);
      colorTextoA=color(0);
      okA=false;
    }
    if ((mouseX>posXBotonB-tamanioAnchoBotonesAYB/2)&&(mouseX<+posXBotonB+tamanioAnchoBotonesAYB/2)&&(mouseY>posYBotonB-tamanioAltoBotonesAYB/2)&&(mouseY<posYBotonB+tamanioAltoBotonesAYB/2)) {
      colorBotonB=color(43, 41, 152);
      colorTextoB=color(255);
      okB=true;
    } else {
      colorBotonB=color(255);
      colorTextoB=color(0);
      okB=false;
    }
  }
  if (pantallas==10) {
    if ((mouseX>posXBotonVolver-tamanioAnchoBotones/2)&&(mouseX<+posXBotonVolver+tamanioAnchoBotones/2)&&(mouseY>posYBotonVolver-tamanioAltoBotones/2)&&(mouseY<posYBotonVolver+tamanioAltoBotones/2)) {
      colorBotonVolver=color(93, 255, 246);
      colorTextoVolver=color(115, 131, 130);
      okVolver=true;
    } else {
      colorBotonVolver=color(255);
      colorTextoVolver=color(0);
      okVolver=false;
    }
    if ((mouseX>posXBotonReiniciar-tamanioAnchoBotones/2)&&(mouseX<+posXBotonReiniciar+tamanioAnchoBotones/2)&&(mouseY>posYBotonReiniciar-tamanioAltoBotones/2)&&(mouseY<posYBotonReiniciar+tamanioAltoBotones/2)) {
      colorBotonReiniciar=color(0, 255, 121);
      colorTextoReiniciar=color(93, 170, 129);
      okReiniciar=true;
    } else {
      colorBotonReiniciar=color(255);
      colorTextoReiniciar=color(0);
      okReiniciar=false;
    }
  } else if (pantallas==11) {
    if ((mouseX>posXBotonVolver-tamanioAnchoBotones/2)&&(mouseX<+posXBotonVolver+tamanioAnchoBotones/2)&&(mouseY>posYBotonVolver-tamanioAltoBotones/2)&&(mouseY<posYBotonVolver+tamanioAltoBotones/2)) {
      colorBotonVolver=color(93, 255, 246);
      colorTextoVolver=color(115, 131, 130);
      okVolver=true;
    } else {
      colorBotonVolver=color(255);
      colorTextoVolver=color(0);
      okVolver=false;
    }
    if ((mouseX>posXBotonReiniciar-tamanioAnchoBotones/2)&&(mouseX<+posXBotonReiniciar+tamanioAnchoBotones/2)&&(mouseY>posYBotonReiniciar-tamanioAltoBotones/2)&&(mouseY<posYBotonReiniciar+tamanioAltoBotones/2)) {
      colorBotonReiniciar=color(0, 255, 121);
      colorTextoReiniciar=color(93, 170, 129);
      okReiniciar=true;
    } else {
      colorBotonReiniciar=color(255);
      colorTextoReiniciar=color(0);
      okReiniciar=false;
    }
  }
}
