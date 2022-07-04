import Store from './store.js';
// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const bookDisplay = document.createElement('div');
    bookDisplay.className = 'book';
    bookDisplay.innerHTML = `
        <p class="book-info"><b>${book.title}</b></p>
        <p class="book-info">by<span></span><b>${book.author}.</b></p>
        <button type="button" class="remove-btn">Remove</button>
        `;

    list.appendChild(bookDisplay);
  }

  static deleteBook(el) {
    if (el.classList.contains('remove-btn')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

export default UI;