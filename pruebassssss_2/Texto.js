class Texto {
  constructor(callback) {
    this.lineas = [];
    this.cargarArchivo("data/textos.txt", callback);
  }

  cargarArchivo(archivo, callback) {
    loadStrings(archivo, (data) => {
      this.generarLineas(data);
      if (callback) {
        callback();
      }
    });
  }

  cargarTextos(pos) {
    return this.lineas[pos];
  }

  generarLineas(texto) {
    for (let j = 0; j < texto.length; j++) {
      this.lineas[j] = texto[j].replaceAll("\\\\n", "\n");
    }
  }
}
