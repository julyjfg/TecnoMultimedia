/*
Julian Ferrari Goñi
Comision 5
https://youtu.be/ManL_eoE394
*/




//variables globales
PImage [] listaImagenes = new PImage[13];
                                            //variables de arreglo imagenes y texto.
String [] listaTextos = new String[26];

int pantallas;                              //variable de estado.

boolean okIniciar;
boolean okCreditos;
boolean okSiguiente;
boolean okInicio;
boolean okA;                                //variables booleanes de los botones.
boolean okB;
boolean okVolver;
boolean okReiniciar;
boolean okBotonSiguienteTexto;
boolean botonSiguienteTexto;


int tamanioAnchoBotones;
int tamanioAltoBotones;                    //variables de tamaño.
int tamanioAnchoBotonesAYB;
int tamanioAltoBotonesAYB;
int radioBotonTextoSiguiente;
int tamanioTexto;


int posXBotonIniciar;
int posYBotonIniciar;
int posXBotonCreditos;
int posYBotonCreditos;
int posXBotonSiguiente;
int posYBotonSiguiente;
int posXBotonVolver;
int posYBotonVolver;                        //variables de posicion.
int posXBotonReiniciar;
int posYBotonReiniciar;
int posXBotonInicioDeCreditos;
int posYBotonInicioDeCreditos;
int posXBotonInicioFinal;
int posYBotonInicioFinal;
int posXBotonA;
int posYBotonA;
int posXBotonB;
int posYBotonB;
int posXBotonTextoSiguiente;
int posYBotonTextoSiguiente;


color colorBotonIniciar;
color colorTextoIniciar;
color colorBotonCreditos;
color colorTextoCreditos;
color colorBotonSiguiente;
color colorTextoSiguiente;
color colorBotonVolver;
color colorTextoVolver;                     //variables de colores.
color colorBotonReiniciar;
color colorTextoReiniciar;
color colorBotonInicioDeCreditos;
color colorTextoInicioDeCreditos;
color colorBotonInicioFinal;
color colorTextoInicioFinal;
color colorBotonA;
color colorTextoA;
color colorBotonB;
color colorTextoB;
color colorBotonTextoSiguiente;
color colorTextoTextoSiguiente;




int posXDirector;
int posYDirector;
int posXArtista;
int posYArtista;
int posXProgramador;                        //variables de posicionamiento del texto.
int posYProgramador;
int posXCreditos;
int posYCreditos;
int posXTitulo;
int posYTitulo;
int posXDelTextoHistoria;
int posYDelTextoHistoria;

void setup() {

  size(600, 600);
  background(0);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);

  cargarListas(listaImagenes, listaTextos);

  pantallas=0;

  tamanioTexto=20;

  colorBotonIniciar=255;
  colorTextoIniciar=0;

  colorBotonCreditos=255;
  colorTextoCreditos=0;

  colorBotonSiguiente=255;
  colorTextoSiguiente=0;

  colorBotonVolver=255;
  colorTextoVolver=0;

  colorBotonReiniciar=255;
  colorTextoReiniciar=0;

  colorBotonInicioDeCreditos=255;
  colorTextoInicioDeCreditos=0;

  colorBotonInicioFinal=255;
  colorTextoInicioFinal=0;

  colorBotonA=255;
  colorTextoA=0;

  colorBotonB=255;
  colorTextoB=0;

  colorBotonTextoSiguiente=255;
  colorTextoTextoSiguiente=0;
  
  radioBotonTextoSiguiente=20;

  tamanioAnchoBotones=100;
  tamanioAltoBotones=50;


  tamanioAnchoBotonesAYB=30;
  tamanioAltoBotonesAYB=40;


posXBotonTextoSiguiente=565;
posYBotonTextoSiguiente=250;


  posXBotonIniciar=width/2;
  posYBotonIniciar= height/2-50;

  posXBotonCreditos=width/2;
  posYBotonCreditos= height/2+50;

  posXBotonInicioDeCreditos=width/2;
  posYBotonInicioDeCreditos=height-100;

  posXBotonSiguiente=width-60;
  posYBotonSiguiente=height-40;

  posXBotonVolver=60;
  posYBotonVolver=height-40;

  posXBotonA=(width/2)-200;
  posYBotonA=300;

  posXBotonB=(width/2)+200;
  posYBotonB=300;

  posXBotonReiniciar=width-60;
  posYBotonReiniciar=height-40;

  posXBotonInicioFinal=width-60;
  posYBotonInicioFinal=height-40;
}

void draw() {
  historia(pantallas);
}

void mousePressed() {
  botonPresionado();
  
}

void mouseMoved() {
  cabioColorYTexto();
}
