/*

 Julian Ferrari Goñi
 Comision 5
 link del video explicativo :)
 */


//Variables Globales
int pantalla;

PImage imagen;

int posicionX, posicionY;

int ancho, alto;

color color1, color2;
color color3, color4;
color color5, color6;
color color7, color8;
color color9, color10;
color color11, color12;
color color13, color14;

void setup() {

  size(800, 400);
  background(250, 244, 220);

  imagen=loadImage("LeParc.jpg");
  image(imagen, 0, 0, width/2, height);

  ancho=25;
  alto=25;

  posicionX=420;
  posicionY=22;

  pantalla=1;

  push();
  fill(255);
  noStroke();
  rect((width/2)+20, 20, 350, 355);
  pop();
}

void draw() {
  dibujar(pantalla);
}

void mousePressed() {
  pantalla++;
  if (termino(pantalla)) {
    pantalla=1;
  }
}
