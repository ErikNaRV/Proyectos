/*23. Resalte todas las palabras de más de 8 caracteres en el texto del párrafo*/

const parrafo = document.getElementById("miParrafo");

parrafo.innerHTML = parrafo.textContent.replace(/\b\w{9,}\b/g, '<span class="resaltado">$&</span>');

/*Esta línea se encarga de resaltar las palabras largas en el contenido del párrafo utilizando la propiedad innerHTML. Aquí hay una explicación paso a paso de cómo funciona:

parrafo.textContent: Accede al contenido de texto del párrafo. Esto devuelve una cadena que contiene el contenido del párrafo sin etiquetas HTML.

.replace(/\b\w{9,}\b/g, '<span class="resaltado">$&</span>'): Utiliza el método replace() para buscar y reemplazar patrones en la cadena de texto.

/.../g: La expresión regular está delimitada por barras diagonales (/). La g al final significa que se buscarán todas las coincidencias en toda la cadena, no solo la primera.

\b: Representa un límite de palabra. Ayuda a asegurar que solo se coincida con palabras completas.

\w{9,}: Corresponde a una palabra que tiene 9 o más caracteres. \w representa cualquier carácter alfanumérico (letra o número), y {9,} indica que debe haber al menos 9 repeticiones.

$&: En el reemplazo, esto se sustituye por la palabra encontrada.

'<span class="resaltado">$&</span>': Es el texto que reemplazará cada palabra larga encontrada. Aquí, se envuelve la palabra en una etiqueta <span> con la clase "resaltado", que se define en el CSS para aplicar un estilo específico.

parrafo.innerHTML: Establece el contenido HTML del párrafo reemplazando el contenido original por el nuevo contenido que contiene las palabras largas resaltadas.

En resumen, esta línea de código utiliza una expresión regular para buscar palabras con más de 8 caracteres en el contenido de texto del párrafo y las reemplaza con la misma palabra envuelta en una etiqueta <span> con una clase CSS para resaltarlas visualmente.*/