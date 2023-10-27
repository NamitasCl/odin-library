const contenedor = document.createElement('div');
const main = document.querySelector('main');

function Book(titulo, autor, paginas, read) {
  this.title = titulo;
  this.author = autor;
  this.pages = paginas;
  this.read = read;
}

Book.prototype.createCard = function() {

  const bookCard = document.createElement('div');
  const bookCardBorder = document.createElement('span');
  const bookCardTitleCont = document.createElement('div');
  const bookCardTitleIcon = document.createElement('span');
  const bookCardTitle = document.createElement('span');
  const bookCardAuthor = document.createElement('h4');
  const bookCardPages = document.createElement('h4');
  const bookCardLabel = document.createElement('label');
  const bookCardCheck = document.createElement('input');

  bookCardTitleCont.appendChild(bookCardTitleIcon);
  bookCardTitleCont.appendChild(bookCardTitle);

  bookCardLabel.innerText = 'Leido? ';
  bookCardLabel.appendChild(bookCardCheck);
  bookCardCheck.type = 'checkbox';
  bookCardCheck.id = 'leido';

  contenedor.className = 'contenedor';
  bookCard.className = 'book-card';
  bookCardBorder.className = 'book-card-border';
  bookCardTitleCont.className = 'book-title';
  bookCardTitleIcon.className = 'material-symbols-outlined';
  bookCardLabel.className = 'leido-check';

  bookCardTitle.innerText = this.title;
  bookCardAuthor.innerText = this.author;
  bookCardPages.innerText = this.pages
  bookCardCheck.checked = this.read;
  bookCardTitleIcon.innerText = 'book_2';

  const arregloElementos = [
    bookCardBorder,
    bookCardTitleCont,
    bookCardAuthor,
    bookCardPages,
    bookCardLabel
  ];

  for(let i = 0; i<arregloElementos.length; i++) {
  bookCard.appendChild(arregloElementos[i]);
  }

  return bookCard;

}

const libreria = [
    {
        titulo: "El Señor de los Anillos",
        autor: "J.R.R. Tolkien",
        paginas: 1178,
        leido: true
      },
      {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        paginas: 432,
        leido: false
      },
      {
        titulo: "Harry Potter y la Piedra Filosofal",
        autor: "J.K. Rowling",
        paginas: 223,
        leido: true
      },
      {
        titulo: "1984",
        autor: "George Orwell",
        paginas: 328,
        leido: false
      },
      {
        titulo: "Crimen y castigo",
        autor: "Fyodor Dostoevsky",
        paginas: 671,
        leido: true
      },
      {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        paginas: 448,
        leido: false
      },
      {
        titulo: "El Gran Gatsby",
        autor: "F. Scott Fitzgerald",
        paginas: 180,
        leido: true
      },
      {
        titulo: "Matar un ruiseñor",
        autor: "Harper Lee",
        paginas: 281,
        leido: true
      },
      {
        titulo: "1984",
        autor: "George Orwell",
        paginas: 328,
        leido: false
      },
      {
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        paginas: 279,
        leido: false
      },
      {
        titulo: "Crimen y castigo",
        autor: "Fyodor Dostoevsky",
        paginas: 671,
        leido: false
      },
      {
        titulo: "To Kill a Mockingbird",
        autor: "Harper Lee",
        paginas: 324,
        leido: false
      },
      {
        titulo: "El Hobbit",
        autor: "J.R.R. Tolkien",
        paginas: 366,
        leido: true
      }

];

function addBookToLibrary() {

}

function render() {
    
    for(let i=0; i<libreria.length;i++) {
        let titulo = libreria[i].titulo;
        let autor = libreria[i].autor;
        let paginas = libreria[i].paginas;
        let leido = libreria[i].leido;

        const libro = new Book(titulo, autor, paginas, leido);
        
        let tarjetaLibro = libro.createCard();

        contenedor.appendChild(tarjetaLibro);
    }

    main.appendChild(contenedor);

}

render();



