/*8. Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.*/




let numeros = [];
let numero;

do {
    numero = parseInt(prompt("Ingrese números enteros, para finalizar ingrese 0"));

    if (numero !== 0) {
        numeros.push(numero);
    }
} while (numero !== 0);

let maximo = Math.max(...numeros);
let minimo = Math.min(...numeros);
let suma = numeros.reduce((acc, curr) => acc + curr, 0);
let promedio = suma / numeros.length;

alert(`El máximo es: ${maximo}
El mínimo es: ${minimo}
El promedio es: ${promedio}`);
