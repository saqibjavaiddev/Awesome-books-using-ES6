import Book from './modules/book.js';
import UI from './modules/ui.js';
import Store from './modules/store.js';
import { DateTime } from './modules/luxon.js';

// define the current local time
const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('date-time').innerHTML = currentDate;

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // Instatiate book
  const book = new Book(title, author);

  // Add Book to UI
  UI.addBookToList(book);

  // Add book to store
  Store.addBook(book);

  // Clear fields
  UI.clearFields();
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.previousElementSibling.previousElementSibling.textContent);
});

// display the books list when click the button "List"
const bookList = document.querySelector('.container');
const listBtn = document.querySelector('.list');
const formContainer = document.querySelector('.formSection');
const contactInfo = document.querySelector('.contact-page');

listBtn.addEventListener('click', () => {
  bookList.style.display = 'flex';
  formContainer.style.display = 'none';
});

window.addEventListener('load', () => {
  bookList.style.display = 'flex';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'none';
});

// display the Add book form  when click the button "Add new"
const addNewBtn = document.querySelector('.new');

addNewBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'block';
  contactInfo.style.display = 'none';
});

// display the  Contact section when click the button "Contact"
const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'flex';
});
