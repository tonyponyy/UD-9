var mayus=(texto)=>{
    let resultado="";
    for (let i = 0; i < texto.length; i++) {
     if (texto.charCodeAt(i)> 90){
        resultado +=String.fromCharCode(texto.charCodeAt(i) - 32)
     } else resultado +=texto.substr(i,1)
        
    }
    return resultado;
}

console.log(mayus("JavaScript"))
console.log(mayus("Champiñones"))
console.log(mayus("Hola mundo!"))
console.log(mayus("Murciélagos en València"))