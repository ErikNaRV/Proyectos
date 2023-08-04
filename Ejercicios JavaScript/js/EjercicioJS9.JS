/*9. Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring().*/


// Pide al usuario que ingrese una frase
const frase = prompt("Ingrese una frase:");

// Variable para almacenar la frase con espacios entre cada letra
let fraseConEspacios = "";

// Recorre cada letra de la frase
for (let i = 0; i < frase.length; i++) {
  // Agrega la letra actual a la frase con espacios
  fraseConEspacios += frase[i];

  // Agrega un espacio después de la letra, excepto para la última letra
  if (i !== frase.length - 1) {
    fraseConEspacios += " ";
  }
}

// Muestra la frase con espacios entre cada letra
alert(fraseConEspacios);
