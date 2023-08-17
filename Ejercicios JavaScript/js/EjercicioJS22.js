/*22. Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a
elección.*/


// Obtener una referencia al botón por su ID
const boton = document.getElementById("miBoton");

// Agregar un evento de clic al botón
boton.addEventListener("click", function() {
  // Mostrar el mensaje
  alert("¡Hola! Has hecho clic en el botón.");
});