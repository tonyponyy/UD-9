var nombre = (nombre ="Manuel") =>{
    var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    primera_parte = nombre.substr(0,2).toLocaleUpperCase();
    segunda_parte =  alfabeto.indexOf(nombre.substr(0,1).toLocaleLowerCase())+1;
    tercera_parte =  alfabeto.indexOf(nombre.substr(1,1).toLocaleLowerCase())+1;
    return  primera_parte+segunda_parte+tercera_parte;
} 


    console.log("Nombre por defecto:")
    console.log(nombre())
    console.log("Ivan : ")
    console.log(nombre("Ivan"))
    console.log("Carles : ")
    console.log(nombre("Carles"))

