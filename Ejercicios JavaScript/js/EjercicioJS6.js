/*6. Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.*/

let numero = prompt("Ingrese un numero para comparar si es par o impar");

if (numero == 0 ) {
    alert("El número no es par ni impar");
} else {
    if (numero%2 == 0){
    
        alert("Es par");
    }else{
        alert("Es impar");
    }
}

