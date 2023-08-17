/*21. Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.*/

// Definir un objeto Persona
const persona = {
    nombre: "Juan",
    edad: 30,
    sexo: 'H',
    peso: 70,
    altura: 175
  };
  
  // Obtener un array de las propiedades del objeto Persona
  const propiedadesPersona = Object.keys(persona);
  
  // Mostrar el array de propiedades
  console.log(propiedadesPersona);
  