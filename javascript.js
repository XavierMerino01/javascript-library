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


const newBookButton = document.querySelector('.add-button');
const formDiv = document.querySelector('.form-div');

const titleValue = document.querySelector('#title');
const authorValue = document.querySelector('#author');
const pagesValue = document.querySelector('#pages');
const addBookButton = document.querySelector('.add-newbook');

newBookButton.addEventListener('click', () => {
    if (formDiv.style.display === "none") {
        formDiv.style.display = "block";
        newBookButton.textContent = "Cancel";
    } else {
        HideNewBookPanel();
    }
});

addBookButton.addEventListener('click', () => {
        
    if(!ValidateInputCamps()) return;

    const newBook = new Book(titleValue.value, authorValue.value, pagesValue.value);
    addBookToLibrary(newBook);
    ClearInputValues();
    HideNewBookPanel();
});

function HideNewBookPanel(){
    formDiv.style.display = "none";
        newBookButton.textContent = "Add New Book";
}

function ClearInputValues(){

    titleValue.value = '';
    authorValue.value = '';
    pagesValue.value = '';
}

function ValidateInputCamps(){

    if(titleValue.value === ""){
        alert("Title camp must not be empty!") 
        return false;
    }
    if(authorValue.value === ""){
        alert("Author camp must not be empty!") 
        return false;
    }

    let currentPageValue = pagesValue.value.trim();
    if (currentPageValue === "") {
        alert("Pages field cannot be empty!");
        return false;
    }
    currentPageValue = Number(currentPageValue);
    if (isNaN(currentPageValue)) {
        alert("Pages must have a numeric value!");
        pagesValue.value = "";
        return false;
    }

    return true;
}