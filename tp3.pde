//variables globales
PImage [] listaImagenes = new PImage[12];

int pantallas;

String [] listaTextos = new String[22];

int colorBoton;
int colorTexto;

int tamanioAnchoBotones;
int tamanioAltoBotones;
int radioDelBoton;

int posXBotonIniciar;
int posYBotonIniciar;

int posXBotonCreditos;
int posYBotonCreditos;

int posXBotonSiguiente;
int posYBotonSiguiente;

int posXBotonVolver;
int posYBotonVolver;

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

  colorBoton=255;
  colorTexto=0;

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
