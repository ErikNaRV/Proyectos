/*7. Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.*/

let numero = parseInt(prompt("Ingrese un limite positivo"));
let suma = 0;

do {
    let ingreso = parseInt(prompt("Ingrese un numero"));
    suma = suma + ingreso;
} while (suma <= numero);

// Muestra el resultado
alert("La suma ha superado el límite ingresado: " + suma);