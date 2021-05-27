class juego{
  constructor(id){
    this.id= id;
  }

  mostrarId(){
    console.log(this.id);
  }

}



class circuito extends juego {
    constructor(vueltas,km) {
      super();
      this.vueltas = vueltas;
      this.km = km;
      this.id = "circuito";
    }
  }

  class coche extends juego {
    constructor(gasolina,trepostaje,dneumaticos) {
      super();
      this.gasolina = gasolina;
      this.trepostaje = trepostaje;
      this.dneumaticos = dneumaticos;
      this.velocidad =Math.random() * (220 - 60) + 60;
      this.id="coche";
    }


  }

  let nuevo_coche = new coche(23,12,300);
  nuevo_coche.mostrarId();
  let nuevo_circuito = new circuito(3,12);
  console.log(` El circuito consta de ${nuevo_circuito.vueltas} vueltas.`);
