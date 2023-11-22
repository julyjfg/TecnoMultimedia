class App {
  constructor() {
    this.aventura=new Aventura()
  }

  play() {
    this.aventura.dibujar()
  }
  /*
  function keyPressed() {
   this.aventura.keyPressed()
   }
   function keyReleased() {
   this.aventura.keyReleased()
   }*/
  mousePressed() {
    this.aventura.mousePressed()
  }

  mouseMoved() {
    this.aventura.mouseMoved()
  }
}
