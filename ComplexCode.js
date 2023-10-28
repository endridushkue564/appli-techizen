// Filename: ComplexCode.js
// Description: This code is a complex implementation of a digital library management system in JavaScript.

// Class to represent a book
class Book {
  constructor(title, author, publicationYear, isbn) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.isbn = isbn;
  }
}

// Class to represent a library
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  // Method to add a book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Method to remove a book from the library
  removeBook(isbn) {
    this.books = this.books.filter((book) => book.isbn !== isbn);
  }

  // Method to search for books matching a specific title
  searchByTitle(title) {
    return this.books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));
  }

  // Method to search for books matching a specific author
  searchByAuthor(author) {
    return this.books.filter((book) => book.author.toLowerCase().includes(author.toLowerCase()));
  }

  // Method to search for books published within a specific year range
  searchByYearRange(startYear, endYear) {
    return this.books.filter(
      (book) => book.publicationYear >= startYear && book.publicationYear <= endYear
    );
  }
}

// Instantiate the library
const myLibrary = new Library("My Library");

// Add books to the library
myLibrary.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "9780743273565"));
myLibrary.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960, "9780446310789"));
myLibrary.addBook(new Book("1984", "George Orwell", 1949, "9780679417392"));
myLibrary.addBook(new Book("Pride and Prejudice", "Jane Austen", 1813, "9780141439518"));
myLibrary.addBook(new Book("The Catcher in the Rye", "J.D. Salinger", 1951, "9780316769488"));

// Print all books in the library
console.log("All Books in the Library:");
console.log(myLibrary.books);

// Search for books by title
console.log("Books with 'the' in the title:");
const booksWithTitleThe = myLibrary.searchByTitle("the");
console.log(booksWithTitleThe);

// Search for books by author
console.log("Books by George Orwell:");
const booksByGeorgeOrwell = myLibrary.searchByAuthor("George Orwell");
console.log(booksByGeorgeOrwell);

// Remove a book from the library
console.log("Removing '1984' from the Library...");
myLibrary.removeBook("9780679417392");

// Print all books after removal
console.log("All Books in the Library after Removal:");
console.log(myLibrary.books);

// Search for books published between 1900 and 1950
console.log("Books published between 1900 and 1950:");
const booksPublishedBetween = myLibrary.searchByYearRange(1900, 1950);
console.log(booksPublishedBetween);
... (continued)