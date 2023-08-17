/*18. A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos*/


var valores = [true, 5, false, "hola", "adios", 2];

if ("hola" > "adios") {
    console.log("El elemento 'hola' es mayor.");
} else if ("adios" > "hola") {
    console.log("El elemento 'adios' es mayor.");
} else {
    console.log("Los elementos de texto son iguales.");
}




var resultadoTrue = true && false; // false
var resultadoFalse = true || false; // true

console.log("Resultado true:", resultadoTrue);
console.log("Resultado false:", resultadoFalse);




var suma = 5 + 2; // 7
var resta = 5 - 2; // 3
var multiplicacion = 5 * 2; // 10
var division = 5 / 2; // 2.5
var modulo = 5 % 2; // 1

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);
