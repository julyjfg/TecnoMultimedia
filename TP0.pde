//Creacion de variables.

PImage imagen;

void setup() {
  size(800,400);
  background(255);
  imagen =loadImage("imagen.jpg");
  imagen.resize(400, 400);
}
void draw() {
  image(imagen, 400, 0);
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
    stroke(0, 255, 0);                                   //Lineas de zona de abajo.
    line(0, y1, width/2, y1);
  }
  fill(255);
    quad(17, 17, 23, 17, 23, 23, 17, 23);
}

void mousePressed() {
  println("vertex("+mouseX+","+mouseY+");");
}

/*
Pata izquierda
 beginShape();
 vertex(98, 297);
 vertex(87, 299);
 vertex(74, 298);
 vertex(82, 274);
 vertex(89, 244);
 vertex(107, 207);
 vertex(149, 164);
 vertex(164, 176);
 vertex(166, 179);
 vertex(143, 198);
 vertex(112, 241);
 vertex(106, 267);
 endShape();
 
 pata derecha
 
 beginShape();
 vertex(195, 177);
 vertex(206, 172);
 vertex(216, 168);
 vertex(236, 187);
 vertex(257, 209);
 vertex(270, 237);
 vertex(277, 268);
 vertex(287, 294);
 vertex(276, 299);
 vertex(263, 300);
 vertex(253, 265);
 vertex(244, 230);
 vertex(224, 204);
 endShape();
 */
