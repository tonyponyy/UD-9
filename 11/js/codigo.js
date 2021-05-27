class Coche {
    constructor(nombre, marca,velocidad) {
      this.nombre = nombre;
      this.marca = marca;
      this.velocidad = velocidad;
    }

    acelerar() {
        this.velocidad +=30;
    }

    frenar() {
        this.velocidad =0;
    }

  }