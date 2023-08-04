/*4. Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.*/


let caracter=prompt("Ingrese el caracter S / N");

if (caracter == "S" || caracter == "N") {
    alert("Correcto");
} else {
    alert("Incorrecto");
}