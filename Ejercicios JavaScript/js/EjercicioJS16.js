/*16. Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios 
y los muestre por pantalla. */


let array1 = [];
let array2 = [];

for (let index = 0; index < 5; index++) {

    array1 [index]=Math.floor(Math.random() * (10 - 1)) + 1; 
    array2 [index]=Math.floor(Math.random() * (10 - 1)) + 1; 
}


alert(array1);
alert(array2);

