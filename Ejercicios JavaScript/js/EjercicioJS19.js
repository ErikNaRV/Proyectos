/*19. Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
de 20.*/


// Crear el arreglo A de 50 números reales y llenarlo con números aleatorios
var arregloA = [];
for (var i = 0; i < 50; i++) {
    arregloA[i] = Math.random() * 100; // Generar números aleatorios entre 0 y 100
}

// Mostrar el arreglo A original
var arregloAOriginal = "Arreglo A original:\n" + arregloA.join("\n");
alert(arregloAOriginal);

// Ordenar el arreglo A de menor a mayor
arregloA.sort(function(a, b) {
    return a - b;
});

// Crear el arreglo B de 20 elementos, inicialmente lleno de 0.5
var arregloB = new Array(20).fill(0.5);

// Copiar los primeros 10 números ordenados de A a B
for (var i = 0; i < 10; i++) {
    arregloB[i] = arregloA[i];
}

// Mostrar los arreglos resultantes
var arregloAOrdenado = "Arreglo A ordenado:\n" + arregloA.join("\n");
alert(arregloAOrdenado);

var arregloBCombinado = "Arreglo B combinado de 20 elementos:\n" + arregloB.join("\n");
alert(arregloBCombinado);

