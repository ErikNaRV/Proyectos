/*14. Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor, 
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario 
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el 
numero de páginas*/


function Libro(isbn, titulo, autor, numPaginas) {
  this.isbn = isbn;
  this.titulo = titulo;
  this.autor = autor;
  this.numPaginas = numPaginas;
  this.mostrarLibro = mostrarLibro;
}

function crearLibro() {
  alert("Ingrese los datos del libro");

  let isbn = prompt("Ingrese un ISBN");
  let titulo = prompt("Ingrese un Titulo");
  let autor = prompt("Ingrese un Autor");
  let numPaginas = prompt("Ingrese el Numero de Paginas");

  var miLibro = new Libro(isbn, titulo, autor, numPaginas);
  libros.push(miLibro); // Agregar el nuevo libro al array libros
  mostrarLibro(miLibro);
}

function mostrarLibro(miLibro) {
  var resultado = `El libro ingresado fue :
     ISBN: ${miLibro.isbn} 
     TITULO: ${miLibro.titulo} 
     AUTOR: ${miLibro.autor}
     NumPaginas: ${miLibro.numPaginas}`;

  alert(resultado);
}

var libros = []; // Array para almacenar los libros

while (true) {
  var continuar = confirm("¿Desea crear otro libro?");
  if (!continuar) {
    break; // Salir del ciclo si no se desea crear más libros
  }
  crearLibro();
}

function mostrarTodosLosLibros() {
  var resultado = "Lista de libros:\n\n";

  for (var i = 0; i < libros.length; i++) {
    resultado += `Libro ${i + 1}:\n`;
    resultado += `ISBN: ${libros[i].isbn}\n`;
    resultado += `TITULO: ${libros[i].titulo}\n`;
    resultado += `AUTOR: ${libros[i].autor}\n`;
    resultado += `NumPaginas: ${libros[i].numPaginas}\n\n`;
  }

  alert(resultado);
}

mostrarTodosLosLibros(); // Llamar a la función para mostrar la lista de libros al final




/*function mostrarLibro1() {
    var resultado = `El libro ingresado fue :
       ISBN: ${this.isbn} 
       TITULO: ${this.titulo} 
       AUTOR: ${this.autor}
       NumPaginas: ${this.numPaginas}`;
  
    alert(resultado);
  }*/