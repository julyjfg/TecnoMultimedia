//variables globales
PImage [] listaImagenes = new PImage[12];

int pantallas;

String [] listaTextos = new String[22];



int tamanioAnchoBotones;
int tamanioAltoBotones;
int radioDelBoton;

int posXBotonIniciar;
int posYBotonIniciar;
color colorBotonIniciar;
color colorTextoIniciar;

int posXBotonCreditos;
int posYBotonCreditos;
color colorBotonCreditos;
color colorTextoCreditos;

int posXBotonSiguiente;
int posYBotonSiguiente;
color colorBotonSiguiente;
color colorTextoSiguiente;


int posXBotonVolver;
int posYBotonVolver;
color colorBotonVolver;
color colorTextoVolver;

int posXBotonReiniciar;
int posYBotonReiniciar;
color colorBotonReiniciar;
color colorTextoReiniciar;

int posXBotonInicioDeCreditos;
int posYBotonInicioDeCreditos;
color colorBotonInicioDeCreditos;
color colorTextoInicioDeCreditos;

int posXBotonInicioFinal;
int posYBotonInicioFinal;
color colorBotonInicioFinal;
color colorTextoInicioFinal;

int posXBotonA;
int posYBotonA;
color colorBotonA;
color colorTextoA;


int posXBotonB;
int posYBotonB;
color colorBotonB;
color colorTextoB;


int tamanioAnchoBotonesAYB;
int tamanioAltoBotonesAYB;
int radioDelBotonAYB;

int tamanioTexto;

int posXDirector;
int posYDirector;

int posXArtista;
int posYArtista;

int posXProgramador;
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

  tamanioAnchoBotones=100;
  tamanioAltoBotones=50;
  radioDelBoton=10;

  tamanioAnchoBotonesAYB=30;
  tamanioAltoBotonesAYB=40;
  radioDelBotonAYB=10;

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
  posYBotonA=200;

  posXBotonB=(width/2)+200;
  posYBotonB=200;

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
