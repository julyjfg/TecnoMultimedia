//variables globales
PImage [] listaImagenes = new PImage[13];

int pantallas;

String [] listaTextos = new String[13];



void setup(){
  
  size(600,600);
  cargarListas(listaImagenes,listaTextos);
  
  pantallas=0;
}

void draw(){

}

mousePressed(){
  pantallas++;

}
