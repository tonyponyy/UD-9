const pCirculo= (radio) => 2*Math.PI*radio;
const aCirculo= (radio) => Math.PI*(radio*radio);

const calcula= () => {
    let radio= +document.getElementById("valor").value;
    // concadenar usando brackets no me funciona. 
    //document.getElementById("resultado").innerHTML = 'El perimetro de ${radio} es ${pCirculo(radio)} , el area es ${aCirculo(radio)}';
    document.getElementById("resultado").innerHTML = 'El perimetro de '+radio+' es '+pCirculo(radio)+' , el area es de '+aCirculo(radio);
}
