class App {
  constructor() {
    this.aventura=new Aventura()
  }

  play() {
    this.aventura.dibujar()
  }
 keyPressed() {
   this.aventura.keyPressed()
   }
 keyReleased() {
   this.aventura.keyReleased()
   }
  mousePressed() {
    this.aventura.mousePressed()
  }

  mouseMoved() {
    this.aventura.mouseMoved()
  }
}
