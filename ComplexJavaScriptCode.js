/* Filename: ComplexJavaScriptCode.js */
/*
This code demonstrates a complex and sophisticated JavaScript program that simulates a virtual bookstore.
It includes various functionalities such as searching for books, adding books to the cart, calculating totals,
and processing payments. The code is divided into multiple modules for improved maintainability and readability.
*/

// Module 1: Book Management
const bookStore = (() => {
    let books = [];
    
    function addBook(title, author, price) {
        const book = { title, author, price };
        books.push(book);
    }
    
    function searchBook(query) {
        return books.filter((book) =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase())
        );
    }
    
    return { addBook, searchBook };
})();

// Module 2: Cart Management
const cart = (() => {
    let items = [];
    
    function addItem(book, quantity) {
        const item = { book, quantity };
        items.push(item);
    }
    
    function removeItem(book) {
        items = items.filter((item) => item.book !== book);
    }
    
    function getSubtotal() {
        return items.reduce((total, item) => total + item.book.price * item.quantity, 0);
    }
    
    return { addItem, removeItem, getSubtotal };
})();

// Module 3: Payment Processing
const payment = (() => {
    function processPayment(total, creditCardInfo) {
        console.log(`Processing payment of $${total} using credit card ending with ${creditCardInfo.cardEnding}.`);
        // ... actual payment processing logic ...
        console.log('Payment processed successfully.');
    }
    
    return { processPayment };
})();

// Usage Example
bookStore.addBook('The Great Gatsby', 'F. Scott Fitzgerald', 10.99);
bookStore.addBook('To Kill a Mockingbird', 'Harper Lee', 12.99);
bookStore.addBook('Pride and Prejudice', 'Jane Austen', 9.99);

console.log('Searching for books...');
const results = bookStore.searchBook('gatsby');
console.log('Results:', results);

console.log('Adding items to cart...');
c