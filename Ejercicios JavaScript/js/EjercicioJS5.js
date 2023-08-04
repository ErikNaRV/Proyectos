/*5. Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.*/

let opcion = prompt(`-------------Menu----------
1.-Suma(S)
2.-Resta(R)
3.-Multiplicacion(M)
4.-Division(D)`);

let NUM1 = parseInt(prompt("Ingrese el primer numero entero de 2 caracteres"));
let NUM2 = parseInt(prompt("Ingrese el segundo numero entero de 2 caracteres"));

switch (opcion.toUpperCase()) {
    case "S":
        alert(`La suma entre ${NUM1} y ${NUM2} es igual a 
               R= ${NUM1 + NUM2}`);
        break;
    case "R":
        alert(`La resta entre ${NUM1} y ${NUM2} es igual a 
               R= ${NUM1 - NUM2}`);
        break;
    case "M":
        alert(`La multiplicacion entre ${NUM1} y ${NUM2} es igual a 
               R= ${NUM1 * NUM2}`);
        break;
    case "D":
        alert(`La division entre ${NUM1} y ${NUM2} es igual a 
               R= ${NUM1 / NUM2}`);
        break;
    default:
        alert("Opción inválida.");
        break;
}

