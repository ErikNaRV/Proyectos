/*12. Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
dato.*/
const mensaje = prompt("Ingrese un dato");


const tipoDeDato = (dato) => {
    // Reemplazar comas por puntos para manejar decimales con coma
    dato = dato.replace(",", ".");

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



//console.log(typeof mensaje);

tipoDeDato(mensaje);


function procesarDato() {
    // Obtén el valor del input
    var dato = document.getElementById("miInput").value;

    // Realiza alguna acción con el dato
    alert("Dato ingresado: " + typeof dato);
}



