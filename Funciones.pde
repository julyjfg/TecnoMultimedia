void dibujar(int cambio) {
  if (cambio==1) {
    inicio();
    cuadrados(posicionX, posicionY, ancho, alto);
  }
  if (cambio==2) {
    inicio();
    interaccionConElMouseColoresClaros ();
    cuadrados(posicionX, posicionY, ancho, alto);
  }
  if (cambio==3) {
    inicio();
    interaccionConElMouseColoresObscuros();
    cuadrados(posicionX, posicionY, ancho, alto);
  }
  if (cambio==4) {
    inicio();
    interaccionConElMouse ();
    cuadrados(posicionX, posicionY, ancho, alto);
  }
  if (cambio==5) {
    coloresRandoms ();
    cuadrados(posicionX, posicionY, ancho, alto);
  }
}


void cuadrados(int posX, int posY, int anch, int alt) {
  for (int i=1; i<15; i++) {
    for (int j=1; j<15; j++) {
      push();
      pintar(i, j);
      noStroke();
      rect(posX, posY, anch, alt);
      pop();
      posX+=anch;
    }
    posX=420;
    posY+=alt;
  }
}


void pintar(int posI, int posJ) {
  switch (posI) {
  case 1:
    if (posJ%2==1) {

      fill(color1);
    } else {
      switch (posJ) {
      case 2:
        fill(color5);
        break;
      case 4:
        fill(color6);
        break;
      case 6:
        fill(color7);
        break;
      case 8:
        fill(color8);
        break;
      case 10:
        fill(color9);
        break;
      case 12:
        fill(color10);
        break;
      case 14:
        fill(color11);
        break;
      }
    }
    break;
  case 2:
    if (posJ%2==0) {
      fill(color14);
    } else {
      switch (posJ) {
      case 1:
        fill(color11);
        break;
      case 3:
        fill(color10);
        break;
      case 5:
        fill(color9);
        break;
      case 7:
        fill(color8);
        break;
      case 9:
        fill(color7);
        break;
      case 11:
        fill(color6);
        break;
      case 13:
        fill(color5);
        break;
      }
    }
    break;
  case 3:
    if (posJ%2==1) {
      fill(color2);
    } else {
      switch (posJ) {
      case 2:
        fill(color5);
        break;
      case 4:
        fill(color6);
        break;
      case 6:
        fill(color7);
        break;
      case 8:
        fill(color8);
        break;
      case 10:
        fill(color9);
        break;
      case 12:
        fill(color10);
        break;
      case 14:
        fill(color11);
        break;
      }
    }
    break;
  case 4:
    if (posJ%2==0) {
      fill(color13);
    } else {
      switch (posJ) {
      case 1:
        fill(color11);
        break;
      case 3:
        fill(color10);
        break;
      case 5:
        fill(color9);
        break;
      case 7:
        fill(color8);
        break;
      case 9:
        fill(color7);
        break;
      case 11:
        fill(color6);
        break;
      case 13:
        fill(color5);
        break;
      }
    }
    break;
  case 5:
    if (posJ%2==1) {
      fill(color3);
    } else {
      switch (posJ) {
      case 2:
        fill(color5);
        break;
      case 4:
        fill(color6);
        break;
      case 6:
        fill(color7);
        break;
      case 8:
        fill(color8);
        break;
      case 10:
        fill(color9);
        break;
      case 12:
        fill(color10);
        break;
      case 14:
        fill(color11);
        break;
      }
    }
    break;
  case 6:
    if (posJ%2==0) {
      fill(color12);
    } else {
      switch (posJ) {
      case 1:
        fill(color11);
        break;
      case 3:
        fill(color10);
        break;
      case 5:
        fill(color9);
        break;
      case 7:
        fill(color8);
        break;
      case 9:
        fill(color7);
        break;
      case 11:
        fill(color6);
        break;
      case 13:
        fill(color5);
        break;
      }
    }
    break;
  case 7:
    if (posJ%2==1) {
      fill(color4);
    } else {
      switch (posJ) {
      case 2:
        fill(color5);
        break;
      case 4:
        fill(color6);
        break;
      case 6:
        fill(color7);
        break;
      case 8:
        fill(color8);
        break;
      case 10:
        fill(color9);
        break;
      case 12:
        fill(color10);
        break;
      case 14:
        fill(color11);
        break;
      }
    }
    break;
  case 8:
    if (posJ%2==0) {
      fill(color4);
    } else {
      switch (posJ) {
      case 1:
        fill(color11);
        break;
      case 3:
        fill(color10);
        break;
      case 5:
        fill(color9);
        break;
      case 7:
        fill(color8);
        break;
      case 9:
        fill(color7);
        break;
      case 11:
        fill(color6);
        break;
      case 13:
        fill(color5);
        break;
      }
    }
    break;
  case 9:
    if (posJ%2==1) {
      fill(color12);
    } else {
      switch (posJ) {
      case 2:
        fill(color5);
        break;
      case 4:
        fill(color6);
        break;
      case 6:
        fill(color7);
        break;
      case 8:
        fill(color8);
        break;
      case 10:
        fill(color9);
        break;
      case 12:
        fill(color10);
        break;
      case 14:
        fill(color11);
        break;
      }
    }
    break;
  case 10:
    if (posJ%2==0) {
      fill(color3);
    } else {
      switch (posJ) {
      case 1:
        fill(color11);
        break;
      case 3:
        fill(color10);
        break;
      case 5:
        fill(color9);
        break;
      case 7:
        fill(color8);
        break;
      case 9:
        fill(color7);
        break;
      case 11:
        fill(color6);
        break;
      case 13:
        fill(color5);
        break;
      }
    }
    break;
  case 11:
    if (posJ%2==1) {
      fill(color13);
    } else {
      switch (posJ) {
      case 2:
        fill(color5);
        break;
      case 4:
        fill(color6);
        break;
      case 6:
        fill(color7);
        break;
      case 8:
        fill(color8);
        break;
      case 10:
        fill(color9);
        break;
      case 12:
        fill(color10);
        break;
      case 14:
        fill(color11);
        break;
      }
    }
    break;
  case 12:
    if (posJ%2==0) {
      fill(color2);
    } else {
      switch (posJ) {
      case 1:
        fill(color11);
        break;
      case 3:
        fill(color10);
        break;
      case 5:
        fill(color9);
        break;
      case 7:
        fill(color8);
        break;
      case 9:
        fill(color7);
        break;
      case 11:
        fill(color6);
        break;
      case 13:
        fill(color5);
        break;
      }
    }
    break;
  case 13:
    if (posJ%2==1) {
      fill(color14);
    } else {
      switch (posJ) {
      case 2:
        fill(color5);
        break;
      case 4:
        fill(color6);
        break;
      case 6:
        fill(color7);
        break;
      case 8:
        fill(color8);
        break;
      case 10:
        fill(color9);
        break;
      case 12:
        fill(color10);
        break;
      case 14:
        fill(color11);
        break;
      }
    }
    break;
  case 14:
    if (posJ%2==0) {
      fill(color1);
    } else {
      switch (posJ) {
      case 1:
        fill(color11);
        break;
      case 3:
        fill(color10);
        break;
      case 5:
        fill(color9);
        break;
      case 7:
        fill(color8);
        break;
      case 9:
        fill(color7);
        break;
      case 11:
        fill(color6);
        break;
      case 13:
        fill(color5);
        break;
      }
    }
    break;
  }
}

boolean termino(int pant) {
  boolean ok=false;
  if (pant<=5) {
    return ok;
  } else {
    ok=true;
    return ok;
  }
}

void inicio() {
  color1=color(59, 49, 110);//violeta obscuro
  color2=color(79, 41, 100);//violeta
  color3=color(126, 36, 90);//violeta claro
  color4=color(174, 37, 55);//rojo

  color5=color(45, 56, 150);//azul obscuro

  color6=color(56, 107, 126);//verde obscuro
  color7=color(78, 147, 119);//verde
  color8=color(124, 183, 129);//verde claro
  color9=color(173, 213, 117);//verde amarillento

  color10=color(241, 239, 120);//amarillo
  color11=color(249, 244, 166);//amarillo puro

  color12=color(224, 101, 60);//naranja obscuro
  color13=color(236, 163, 84);//naranja
  color14=color(250, 195, 102);//naranja amarillento
}

void interaccionConElMouse () {
  color1=color(int(map(mouseX, width/2, width, 59, 255)), int(map(mouseY, 0, height, 0, 49)), 110);
  color2=color(int(map(mouseX, width/2, width, 0, 79)), int(map(mouseY, 0, height, 41, 255)), 100);
  color3=color(int(map(mouseX, width/2, width, 126, 255)), int(map(mouseY, 0, height, 0, 39)), 90);
  color4=color(int(map(mouseX, width/2, width, 0, 174)), int(map(mouseY, 0, height, 0, 37)), 55);

  color5=color(int(map(mouseX, width/2, width, 45, 255)), int(map(mouseY, 0, height, 56, 255)), 150);

  color6=color(int(map(mouseX, width/2, width, 0, 56)), int(map(mouseY, 0, height, 0, 107)), 126);
  color7=color(int(map(mouseX, width/2, width, 78, 255)), int(map(mouseY, 0, height, 0, 147)), 119);
  color8=color(int(map(mouseX, width/2, width, 0, 124)), int(map(mouseY, 0, height, 0, 183)), 129);
  color9=color(int(map(mouseX, width/2, width, 173, 255)), int(map(mouseY, 0, height, 0, 213)), 117);

  color10=color(int(map(mouseX, width/2, width, 0, 241)), int(map(mouseY, 0, height, 0, 239)), 120);
  color11=color(int(map(mouseX, width/2, width, 249, 255)), int(map(mouseY, 0, height, 0, 244)), 166);

  color12=color(int(map(mouseX, width/2, width, 0, 224)), int(map(mouseY, 0, height, 0, 101)), 60);
  color13=color(int(map(mouseX, width/2, width, 236, 255)), int(map(mouseY, 0, height, 0, 163)), 84);
  color14=color(int(map(mouseX, width/2, width, 0, 250)), int(map(mouseY, 0, height, 0, 195)), 102);
}

void interaccionConElMouseColoresClaros () {

  color7=color(int(map(mouseX, width/2, width, 78, 255)), 147, int(map(mouseY, 0, height, 0, 119)));

  color8=color(124, int(map(mouseY, 0, height, 0, 183)), int(map(mouseX, width/2, width, 0, 129)));
  color9=color(int(map(mouseX, width/2, width, 173, 255)), int(map(mouseY, 0, height, 0, 213)), 117);


  color10=color(int(map(mouseX, width/2, width, 0, 241)), 239, int(map(mouseY, 0, height, 0, 120)));
  color11=color(249, int(map(mouseY, 0, height, 0, 244)), int(map(mouseX, width/2, width, 166, 255)));

  color13=color(int(map(mouseX, width/2, width, 236, 255)), int(map(mouseY, 0, height, 0, 163)), 84);
  color14=color(int(map(mouseX, width/2, width, 0, 250)), 195, int(map(mouseY, 0, height, 0, 102)));
}

void interaccionConElMouseColoresObscuros() {

  color1=color(int(map(mouseX, width/2, width, 59, 255)), int(map(mouseY, 0, height, 0, 49)), 110);
  color2=color(int(map(mouseX, width/2, width, 0, 79)), 41, int(map(mouseY, 0, height, 100, 255)));
  color3=color(126, int(map(mouseY, 0, height, 0, 39)), int(map(mouseX, width/2, width, 90, 255)));
  color4=color(int(map(mouseX, width/2, width, 0, 174)), 37, int(map(mouseY, 0, height, 0, 55)));

  color5=color(int(map(mouseX, width/2, width, 45, 190)), int(map(mouseY, 0, height, 56, 210)), 150);

  color6=color(56, int(map(mouseY, 0, height, 0, 107)), int(map(mouseX, width/2, width, 0, 126)));

  color12=color(int(map(mouseX, width/2, width, 0, 224)), 101, int(map(mouseY, 0, height, 60, 200)));
}

void coloresRandoms () {


  color1=color(int(random(0, 59)), int(random(49, 215)), int(random(110, 255)));


  color2=color(int(random(79, 255)), int(random( 0, 41)), int(random(0, 200)));
  color3=color(int(random(0, 126)), int(random(36, 255)), int(random(90, 255)));
  color4=color(int(random(174, 255)), int(random(0, 37)), int(random(55, 255)));

  color5=color(int(random(0, 45)), int(random(56, 255)), int(random(0, 150)));

  color6=color(int(random(0, 56)), int(random(107, 255)), int(random(0, 126)));
  color7=color(int(random(78, 255)), int(random(0, 147)), int(random(119, 255)));
  color8=color(int(random( 0, 124)), int(random( 0, 183)), int(random(0, 129)));
  color9=color(int(random( 173, 255)), int(random( 0, 213)), int(random(117, 255)));

  color10=color(int(random( 0, 241)), int(random( 0, 239)), int(random(0, 120)));
  color11=color(int(random( 249, 255)), int(random( 0, 244)), int(random(166, 255)));

  color12=color(int(random(0, 224)), int(random( 0, 101)), int(random(0, 60)));
  color13=color(int(random( 236, 255)), int(random(0, 163)), int(random(84, 255)));
}
