const myLibrary = [];

function Book(title, author, pages, isRead) {

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(givenBook) {

    const shelf = document.querySelector('.shelf');
    const newBook = document.createElement('div');
    newBook.classList.add('book');

    const bookTitle = document.createElement('h4');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');

    const deleteBookButton = document.createElement('button');
    deleteBookButton.classList.add('delete-book');
    deleteBookButton.textContent = "X";
    deleteBookButton.dataset.index = myLibrary.length;
    deleteBookButton.addEventListener('click', () =>{
        myLibrary.splice(deleteBookButton.dataset.index, 1);
        newBook.remove();
    });

    const readBookButton = document.createElement('button');
    readBookButton.classList.add('book-isread');
    readBookButton.textContent = "V";
    readBookButton.dataset.index = myLibrary.length;
    readBookButton.addEventListener('click', () =>{
        ToggleBookStatus(newBook, readBookButton.dataset.index);
    });


    bookTitle.textContent = givenBook.title;
    bookAuthor.textContent = givenBook.author;
    bookPages.textContent = `Pages: ${givenBook.pages}`;


    newBook.appendChild(bookTitle);
    newBook.appendChild(bookAuthor);
    newBook.appendChild(bookPages);
    newBook.appendChild(deleteBookButton);
    newBook.appendChild(readBookButton);

    shelf.appendChild(newBook);
    myLibrary.push(newBook);
}

function ToggleBookStatus(bookElement, bookIndex){
    if(!myLibrary[bookIndex].isRead){
        myLibrary[bookIndex].isRead = true;
        bookElement.classList.add('isRead');
    }
    else{
        myLibrary[bookIndex].isRead = false;
        bookElement.classList.remove('isRead');
    }
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

    const newBook = new Book(titleValue.value, authorValue.value, pagesValue.value, false);
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