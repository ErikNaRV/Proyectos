/*15. Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo 
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El 
radio del círculo lo proporcionará el usuario*/



let radio = prompt("Ingrese el valor del radio para la circunferencia");

let Area = radio => Math.PI * radio**2;

let perimetro =radio =>2 * Math.PI  * radio;

alert(`El área de la circunferencia es: ${(Area(radio))}
El perímetro de la circunferencia es: ${(perimetro(radio))}`);