/*17. Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
resultado*/

// Definir el array
let miArray = [1, 2, 3, 4, 5];

// Eliminar los dos últimos elementos
miArray.splice(miArray.length - 2, 2);

// Convertir el array a una cadena de texto
let resultado = miArray.join(', ');

// Mostrar el resultado usando alert
alert("Array después de eliminar los dos últimos elementos: " + resultado);
