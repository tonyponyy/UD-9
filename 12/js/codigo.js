class vehiculo {
    constructor(marca,matricula,nruedas,npuertas,anos,velocidad) {
      this.marca = marca;
      this.matricula = matricula;
      this.nruedas = nruedas;
      this.npuertas = npuertas;
      this.anos = anos;
      this.velocidad = velocidad;
    }

    correr() {
        this.velocidad +=10;
    }

    frenar() {
        this.velocidad =0;
    }

    aparcar(){
      console.log("Aparcado.")
    }

  }

  class coche extends vehiculo{
    constructor(marca,matricula,anos,velocidad) {
      this.marca = marca;
      this.matricula = matricula;
      this.nruedas = 4;
      this.npuertas = 5;
      this.anos = anos;
      this.velocidad = velocidad;
    }
  }
  class moto extends vehiculo{
    constructor(marca,matricula,velocidad) {
      this.marca = marca;
      this.matricula = matricula;
      this.nruedas = 2;
      this.npuertas = 0;
      this.anos = 16;
      this.velocidad = velocidad;
    }
  }
  class patin extends vehiculo{
    constructor(marca,matricula,velocidad) {
      this.marca = marca;
      this.matricula = matricula;
      this.nruedas = 2;
      this.npuertas = 0;
      this.anos = 16;
      this.velocidad = velocidad;
    }
  }
  class moto extends vehiculo{
    constructor(marca,matricula,velocidad) {
      this.marca = marca;
      this.matricula = matricula;
      this.nruedas = 2;
      this.npuertas = 0;
      this.anos = 6;
      this.velocidad = velocidad;
    }
  }