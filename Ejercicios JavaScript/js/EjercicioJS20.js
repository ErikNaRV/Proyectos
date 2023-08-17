/*20. Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
muestre el siguiente array [6, 9, 12, 15, 18].*/


// Definir la matriz inicial
const matriz = [[3], [6], [9], [12], [15]];

// Función para obtener el nuevo array sumando 3 a cada elemento
function obtenerNuevoArray(matriz) {
  const nuevoArray = matriz.map(row => row[0] + 3);
  return nuevoArray;
}

// Obtener el nuevo array
const nuevoArray = obtenerNuevoArray(matriz);

// Mostrar el nuevo array
alert(nuevoArray);






