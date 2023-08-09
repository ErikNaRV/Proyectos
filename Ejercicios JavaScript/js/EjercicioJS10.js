/*10. Escribir una función flecha que reciba una palabra y la devuelva al revés.*/

let frase = prompt("Ingrese una palabra");

let alreves = (frase) => {
    let resultado = "";
    for (let index = frase.length - 1; index >= 0; index--) {
        resultado += frase[index];
    }
    alert(resultado);
};

alreves(frase);


const reverseWord = (word) => {
    const charactersArray = word.split('');
    const reversedArray = charactersArray.reverse();
    const reversedWord = reversedArray.join('');
    return reversedWord;
};

// Ejemplo de uso
const inputWord = prompt("Ingrese una palabra");
const reversedInput = reverseWord(inputWord);
console.log("Palabra original:", inputWord);
console.log("Palabra invertida:", reversedInput);
