var resultado=[];  
var numletras=0;
const Iniciar= () => {
    texto= document.getElementById("valor").value ;
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let resultado =[];
    texto_array = texto.split("");
    texto_array2 = texto.split(" ");
    for (let i = 0; i < texto_array.length; i++) {
        var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
            for (let e = 0; e< alfabeto.length; e++) {
              if (texto_array[i] == alfabeto[e] ){
                if (resultado[e] == undefined){
                   resultado[e]=1;     
                } else resultado[e] ++;
              }
            }
    }
    document.getElementById("resultado").innerHTML = ""
    document.getElementById("resultado").innerHTML += "Hay un total de "+texto_array2.length +" palabras.<br>"
    for (let i = 0; i < resultado.length; i++) {
        if (resultado[i] != undefined){
        numletras +=resultado[i];
        }
    }
    document.getElementById("resultado").innerHTML += "Hay un total de "+numletras +" letras.<br>"
    numletras=0;
    for (let i = 0; i < resultado.length; i++) {
        if (resultado[i]!=undefined){
            document.getElementById("resultado").innerHTML += "La letra "+alfabeto[i]+" está "+resultado[i]+ "veces. <br>"
            
        }
        
    }
}
