const pCirculo= (radio) => 2*Math.PI*radio;
const aCirculo= (radio) => Math.PI*(radio*radio);

let radio = prompt("Inserte el Radio")

console.log('El perimetro de '+radio+' es '+pCirculo(radio))
console.log('El area de '+radio+' es '+aCirculo(radio))
