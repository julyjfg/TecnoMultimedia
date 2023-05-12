

String pantalla;
int tiempo;
int tiempoMaximo;
int tamanioTextos;

//variables boton inicio

String textoBotonInicio;

int puntoXDelBotonInicio;
int puntoYDelBotonInicio;

int anchoDelBotonInicio;
int altoDelBotonInicio;

int puntoXDelTextoDelBotonInicio;
int puntoYDelTextoDelBotonInicio;

boolean botonOkInicio;

color colorBotonInicio;

color colorTextoDelBotonInicio;

//variable boton reinicio

String textoBotonReinicio;

int puntoXDelBotonReinicio;
int puntoYDelBotonReinicio;

int puntoXDelTextoDelBotonReinicio;
int puntoYDelTextoDelBotonReinicio;

int anchoDelBotonReinicio;
int altoDelBotonReinicio;

boolean botonOkReinicio;

color colorBotonReinicio;

color colorTextoDelBotonReinicio;

//variable texto inicio

String textoInicio;

float puntoXDelTextoInicio;
float puntoYDelTextoInicio;

float tamanioTextoInicio;

color colorTextoInicio;

// variable texto 1
String texto1;

float puntoXDelTexto1;
float puntoYDelTexto1;

float difuminadoDelTexto1;

color colorTexto1;

//variables texto 2
String texto2;

float puntoXDelTexto2;
float puntoYDelTexto2;

float velocidadDelTexto2;

boolean vuelveTexto2;

color colorTexto2;

//variables texto3

String texto3;

float puntoXDelTexto3;
float puntoYDelTexto3;

float velocidadDelTexto3;

boolean vuelveTexto3;

color colorTexto3;

//variables texto fin

String textoFin;

float puntoXDelTextoFin;
float puntoYDelTextoFin;

float velocidadDelTextoFin;

boolean stopTextoFin;
boolean finalPantallaFin;

color colorTextoFin;

//imagenes

PImage imagenInicio;
PImage imagen1;
PImage imagen2;
PImage imagen3;
PImage imagenFin;


void setup() {
  size(640, 480);

  imagenInicio=loadImage("pinza1.jpg");
  imagen1=loadImage("pinza2.jpg");
  imagen2=loadImage("pinza3.jpg");        //carga de imagenes
  imagen3=loadImage("pinza4.jpg");
  imagenFin=loadImage("pinza5.jpg");

  //inicializacion de variables

  pantalla="boton inicio";// Inicio, pantalla1,pantalla2,pantalla3,pantallaFin

  tiempo=0;

  tiempoMaximo=220;
  
  tamanioTextos=45;

  //variables boton inicio

  textoBotonInicio="Iniciar";

  puntoXDelBotonInicio=260;
  puntoYDelBotonInicio=140;

  anchoDelBotonInicio=100;
  altoDelBotonInicio=50;

  puntoXDelTextoDelBotonInicio=280;
  puntoYDelTextoDelBotonInicio=170;

  botonOkInicio=false;

  colorBotonInicio=color(227, 222, 222);

  colorTextoDelBotonInicio=color(227, 11, 11);

  //variables boton reinicio

  textoBotonReinicio="Reiniciar";

  puntoXDelBotonReinicio=530;
  puntoYDelBotonReinicio=420;

  anchoDelBotonReinicio=100;
  altoDelBotonReinicio=50;

  puntoXDelTextoDelBotonReinicio=545;
  puntoYDelTextoDelBotonReinicio=452;

  colorBotonReinicio=color(175, 175, 175);

  colorTextoDelBotonReinicio=color(196, 8, 52);

  botonOkReinicio=false;

  // variables pantalla inicio

  textoInicio="Razones \n por las que debes \n tener una pinza";

  puntoXDelTextoInicio=30;
  puntoYDelTextoInicio=60;

  tamanioTextoInicio=1;

  colorTextoInicio=color(255, 98, 190);

  //variables pantalla 1

  texto1="Podes cortar \n y moldear alambre";

  puntoXDelTexto1=130;
  puntoYDelTexto1=180;

  difuminadoDelTexto1=0;

  colorTexto1=color(255, 64, 87);

  //variables pantalla 2

  texto2="Tiene mango de silicona \n para un buen agarre";

  puntoXDelTexto2=0-400;
  puntoYDelTexto2=130;

  velocidadDelTexto2=1.5;

  vuelveTexto2=false;

  colorTexto2=color(183, 9, 56);

  //variable  pantalla 3

  texto3="Util para sacar \n o cortar clavos";

  puntoXDelTexto3=185;
  puntoYDelTexto3=0;

  velocidadDelTexto3=2.5;

  vuelveTexto3=false;

  colorTexto3=color(87, 61, 124);
  
  //varaible pantalla fin

  textoFin="Espero que te haya servido \n <3 ";

  puntoXDelTextoFin=50;
  puntoYDelTextoFin=height+150;

  velocidadDelTextoFin=1.3;

  stopTextoFin=false;
  finalPantallaFin=false;

  colorTextoFin=color(220, 126, 255);
}

void draw() {
  background(0);
  frameRate(50);
  if (pantalla=="boton inicio") {

    fill(colorBotonInicio);
    rect(puntoXDelBotonInicio, puntoYDelBotonInicio, anchoDelBotonInicio, altoDelBotonInicio);

    textSize(20);
    fill(colorTextoDelBotonInicio);
    text(textoBotonInicio, puntoXDelTextoDelBotonInicio, puntoYDelTextoDelBotonInicio);
  }

  if (pantalla=="pantalla inicio") {
    finalPantallaFin=false;
    puntoYDelTextoFin=height+150;
    tiempo++;
    image(imagenInicio, 0, 0);
    tamanioTextoInicio=tamanioTextoInicio+ 0.5;

    fill(colorTextoInicio);
    textSize(tamanioTextoInicio);
    text(textoInicio, puntoXDelTextoInicio, puntoYDelTextoInicio);

    if (tiempo==tiempoMaximo) {
      pantalla="pantalla 1";
      tiempo=0;
      tamanioTextoInicio=1;
    }
  }

  if (pantalla=="pantalla 1") {

    tiempo++;

    image(imagen1, 0, 0, width, height);

    textSize(tamanioTextos);

    difuminadoDelTexto1=difuminadoDelTexto1+1.5;

    fill(colorTexto1, difuminadoDelTexto1);
    text(texto1, puntoXDelTexto1, puntoYDelTexto1);

    if (tiempo==tiempoMaximo) {

      pantalla="pantalla 2";

      tiempo=0;

      difuminadoDelTexto1=0;
    }
  }
  if (pantalla=="pantalla 2") {

    tiempo++;
    image(imagen2, 0, 0, width, height);

    if (vuelveTexto2==false) {

      puntoXDelTexto2=puntoXDelTexto2+velocidadDelTexto2;
      fill(colorTexto2);
      textSize(tamanioTextos);
      text(texto2, puntoXDelTexto2, puntoYDelTexto2);

      if (puntoXDelTexto2>=(width-120)) {

        vuelveTexto2=true;
      }
    } else {

      puntoXDelTexto2=puntoXDelTexto2-velocidadDelTexto2;
      fill(colorTexto2);
      textSize(tamanioTextos);
      text(texto2, puntoXDelTexto2, puntoYDelTexto2);

      if (puntoXDelTexto2<=0) {

        vuelveTexto2=false;
      }
    }
    if (tiempo==tiempoMaximo) {

      pantalla="pantalla 3";
      tiempo=0;

      puntoXDelTexto2=-120;
      vuelveTexto2=false;
    }
  }
  if (pantalla=="pantalla 3") {

    tiempo++;
    image(imagen3, 0, 0, width, height);

    if (vuelveTexto3==false) {

      puntoYDelTexto3=puntoYDelTexto3+velocidadDelTexto3;
      fill(colorTexto3);
      textSize(tamanioTextos);
      text(texto3, puntoXDelTexto3, puntoYDelTexto3);

      if (puntoYDelTexto3>=height-20) {

        vuelveTexto3=true;
      }
    } else {
      puntoYDelTexto3=puntoYDelTexto3-velocidadDelTexto3;
      fill(colorTexto3);
      textSize(tamanioTextos);
      text(texto3, puntoXDelTexto3, puntoYDelTexto3);

      if (puntoYDelTexto3<=0) {

        vuelveTexto3=false;
      }
    }
    if (tiempo==tiempoMaximo) {

      pantalla="pantalla fin";
      tiempo=0;

      puntoYDelTexto3=0;
      vuelveTexto3=false;
    }
  }
  if (pantalla=="pantalla fin") {
    if (finalPantallaFin==true) {
      stopTextoFin=true;
      image(imagenFin, 0, 0, width, height);
      fill(colorTextoFin);
      textSize(tamanioTextos);
      text(textoFin, puntoXDelTextoFin, puntoYDelTextoFin);

      fill(colorBotonReinicio);
      rect(puntoXDelBotonReinicio, puntoYDelBotonReinicio, anchoDelBotonReinicio, altoDelBotonReinicio);

      fill(colorTextoDelBotonReinicio);
      textSize(20);
      text(textoBotonReinicio, puntoXDelTextoDelBotonReinicio, puntoYDelTextoDelBotonReinicio);
    } else {
      image(imagenFin, 0, 0, width, height);
      if (stopTextoFin==false) {
        puntoYDelTextoFin=puntoYDelTextoFin-velocidadDelTextoFin;
        fill(colorTextoFin);
        textSize(tamanioTextos);
        text(textoFin, puntoXDelTextoFin, puntoYDelTextoFin);
        if (puntoYDelTextoFin<=height/2) {
          stopTextoFin=true;
          finalPantallaFin=true;
        }
      } else {
        fill(colorTextoFin);
        textSize(tamanioTextos);
        text(textoFin, puntoXDelTextoFin, puntoYDelTextoFin);
      }
      /*if (tiempo==tiempoMaximo) {
        tiempo=0;
        finalPantallaFin=true;
      }*/
    }
  }
}
void mousePressed() {
  println(mouseX, mouseY);
  if (botonOkInicio==true) {
    pantalla="pantalla inicio";
  }
  if (botonOkReinicio==true) {
    pantalla="pantalla inicio";
  }
}
void mouseMoved() {
  if ((mouseX>puntoXDelBotonInicio)&&(mouseX<(puntoXDelBotonInicio + anchoDelBotonInicio))&&(mouseY>puntoYDelBotonInicio)&&(mouseY<(puntoYDelBotonInicio + altoDelBotonInicio))) {
    botonOkInicio=true;
    colorBotonInicio=color(11, 227, 45);
    colorTextoDelBotonInicio=color(255);
  } else {
    botonOkInicio=false;
    colorBotonInicio=color(227, 222, 222);
    colorTextoDelBotonInicio=color(227, 11, 11);
  }
  if ((mouseX>puntoXDelBotonReinicio)&&(mouseX<puntoXDelBotonReinicio + anchoDelBotonReinicio)&&(mouseY>puntoYDelBotonReinicio)&&(mouseY<puntoYDelBotonReinicio + altoDelBotonReinicio)) {
    botonOkReinicio=true;
    colorBotonReinicio=color(115, 250, 78);
    colorTextoDelBotonReinicio=color(225);
  } else {
    botonOkReinicio=false;
    colorBotonReinicio=color(175, 175, 175);
    colorTextoDelBotonReinicio=color(196, 8, 52);
  }
}
