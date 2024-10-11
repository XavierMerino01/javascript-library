const myLibrary = [];

function Book(title, author, pages) {

  this.title = title;
  this.author = author;
  this.pages = pages;

}

function addBookToLibrary(givenBook) {

    const shelf = document.querySelector('.shelf');

    // Create a new div for the book
    const newBook = document.createElement('div');
    newBook.classList.add('book');

    // Create elements for the book's title, author, and pages
    const bookTitle = document.createElement('h4');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');

    // Assign the passed-in values to the text content of the elements
    bookTitle.textContent = givenBook.title;
    bookAuthor.textContent = givenBook.author;
    bookPages.textContent = `Pages: ${givenBook.pages}`;

    // Append the elements to the newBook div
    newBook.appendChild(bookTitle);
    newBook.appendChild(bookAuthor);
    newBook.appendChild(bookPages);

    // Append the new book div to the shelf
    shelf.appendChild(newBook);
    myLibrary.push(newBook);
}

let cacota = new Book("The Great Gatsby", "F. Scott Fitzgerald", 218);
addBookToLibrary(cacota);

const newBookButton = document.querySelector('.add-button');
const formDiv = document.querySelector('.form-div');

newBookButton.addEventListener('click', () => {
    if (formDiv.style.display === "none") {
        formDiv.style.display = "block";
        newBookButton.textContent = "Cancel";
    } else {
        formDiv.style.display = "none";
        newBookButton.textContent = "Add New Book";  // Hide the form-div
    }
});