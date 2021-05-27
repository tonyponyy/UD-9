var resultado=[];  
const Iniciar= (texto) => {
    texto= document.getElementById("valor").value ;
    let resultado =[];
    texto_array = texto.split("");
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
    for (let i = 0; i < resultado.length; i++) {
        if (resultado[i]!=undefined){
            document.getElementById("resultado").innerHTML += "La letra "+alfabeto[i]+" está "+resultado[i]+ "veces. <br>"
            
        }
        
    }
}
