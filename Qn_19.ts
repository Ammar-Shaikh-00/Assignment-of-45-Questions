interface Book {
    title: string
    author: string
    yearPublished: number
    genre: string
  }
  const book1: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    genre: "Tragedy"
  }
  const book2: Book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    genre: "Southern Gothic"
  }
  const library: Book[] = [book1, book2]

  console.log("Library Catalog:")
  library.forEach(book => {
    console.log(`${book.title} by ${book.author}, published in ${book.yearPublished} - Genre: ${book.genre}`);
  })
  