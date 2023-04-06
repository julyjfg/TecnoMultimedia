//Creacion de variables.

PImage imagen;

void setup() {
  size(800, 400);
  background(255);

  imagen =loadImage("imagen.jpg");
  imagen.resize(400, 400);
}

void fondo() {
  fill(211, 255, 217);                                  //Fondo.
  stroke(255);
  quad(0, 0, 0, 399, width/2, 399, width/2, 0);

  for (int x=16; x<width/2; x=x+46) {
    fill(0, 255, 0);                                      //Lineas horizontales fondo.
    quad(x, 0, x, 367, x+7, 367, x+7, 0);
  }

  for (int y=16; y<367; y=y+46) {
    quad(0, y, width/2, y, width/2, y+7, 0, y+7);        //Lineas verticales fondo.
  }

  for (int y1=367; y1<=400; y1=y1+2) {
    stroke(0, 255, 0);                                   //Lineas de zona de abajo fondo.
    line(0, y1, width/2, y1);
  }
  for(int y=17;y<367;y=y+46){
    for(int x=17;x<400;x=x+46){
      fill(255);
      rect(x,y,6,6);
    }
  }
}

void mangoIzquierdo() {
  fill(0, 50, 155);
  stroke(0);
  beginShape();
  vertex(98,300);
  bezierVertex(113,246,141,203,166,180);
  vertex(149,164);
  bezierVertex(108,206,79,260,72,301);
  endShape();
}

void mangoDerecho() {
  fill(0, 50, 155);
  stroke(0);
  beginShape();
  vertex(194, 176);
  bezierVertex(235,220,254,271,264,301);
  vertex(287,294);
  bezierVertex(270,238,246,197,215,168);
  endShape();
}

void cabeza() {
  fill(52, 46, 31);
  beginShape();
  vertex(199, 175);
  vertex(187, 159);
  vertex(174, 158);
  vertex(164, 178);
  vertex(154, 165);
  vertex(155, 152);
  vertex(158, 149);
  vertex(161, 151);
  vertex(159, 145);
  vertex(154, 144);
  vertex(153, 96);
  vertex(159, 96);
  vertex(174, 131);
  vertex(190, 131);
  vertex(203, 96);
  vertex(209, 96);
  vertex(214, 131);
  vertex(208, 142);
  vertex(203, 142);
  vertex(212, 169);
  vertex(199, 175);
  endShape();
  stroke(10);
  ellipse(182, 145, 20, 20);
}

void rellenoIzquierda() {
  fill(253, 255, 167);
  stroke(0);
  beginShape();
  vertex(154, 168);
  bezierVertex(113, 209, 92, 251, 79, 299);
  vertex(91, 298);
  bezierVertex(105, 243, 135, 195, 161, 174);
  endShape();
}

void rellenoDerecha() {
  fill(253, 255, 167);
  stroke(0);
  beginShape();
  vertex(210,170);
  bezierVertex(234,201,262,245,282,295);
  vertex(271,299);
  bezierVertex(246,241,221,200,201,174);
  endShape();
}

void draw() {
  image(imagen, 400, 0);
  fondo();
  mangoIzquierdo();
  rellenoIzquierda();
  mangoDerecho();
  rellenoDerecha();
  cabeza();
}
