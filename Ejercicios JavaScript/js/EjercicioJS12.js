/*12. Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
dato.*/
const mensaje = prompt("Ingrese un dato");

const tipoDeDato = (dato) => {
    const esNumero = !isNaN(parseFloat(dato)) && isFinite(dato);
    const esBooleano = dato === 'true' || dato === 'false';

    if (esNumero) {
        if (dato.includes(".")) {
            alert("Tipo de dato: número decimal");
        } else {
            alert("Tipo de dato: número entero");
        }
    } else if (esBooleano) {
        alert("Tipo de dato: booleano");
    } else {
        alert("Tipo de dato: string");
    }
};

tipoDeDato(mensaje);