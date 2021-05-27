var nombre = prompt("Como te llamas ?");
var numero = prompt("Introduce numero.")

if (numero%2!=0 && numero%7!=0 && numero%3!=0 && numero/5 !=0){
    imprime(true);
} else imprime(false);

function imprime(esprimo){
   if (esprimo){
   document.getElementById("resultado").innerHTML= nombre+", el numero "+numero+" es primo.";
   document.getElementById("resultado").style.backgroundColor="green";
    } else {
        document.getElementById("resultado").innerHTML= nombre+", el numero"+numero+" no es primo.";
        document.getElementById("resultado").style.backgroundColor="red";
    }

}