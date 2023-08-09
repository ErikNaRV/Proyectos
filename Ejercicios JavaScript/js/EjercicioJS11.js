/*11. Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”*/



function encontrarPalabraMasLarga(frase) {
    const palabras = frase.split(' ');
    let palabraMasLarga = '';

    for (let palabra of palabras) {
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }

    return palabraMasLarga;
}

const inputFrase = prompt("Ingrese una frase");
const palabraMasLarga = encontrarPalabraMasLarga(inputFrase);
alert("Palabra más larga:"+ palabraMasLarga);
console.log("Palabra más larga:", palabraMasLarga);