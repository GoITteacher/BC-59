import '../css/common.css';
import booksTemplate from '../templates/card-books.hbs';
import { BooksAPI } from './modules/booksAPI';

// ================
const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-articl-list'),
  btnLoad: document.querySelector('.js-btn-load'),
};

const booksAPI = new BooksAPI();

async function onLoadDocument() {
  try {
    const books = await booksAPI.getBooks();
    refs.bookListElem.innerHTML = booksTemplate(books);
  } catch {
    console.log('Error');
  }
}
onLoadDocument();

// ------------------------
refs.createFormElem.addEventListener('submit', e => {
  e.preventDefault();
  const { bookTitle, bookAuthor, bookDesc } = e.target.elements;

  const book = {
    title: bookTitle.value,
    author: bookAuthor.value,
    desc: bookDesc.value,
  };

  booksAPI.createBook(book).then(({ data: newBook }) => {
    const markup = bookTemplate(newBook);
    refs.bookListElem.insertAdjacentHTML('beforeend', markup);
  });

  e.target.reset();
});

refs.updateFormElem.addEventListener('submit', async e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const book = {};

  for (let [key, value] of data.entries()) {
    key = key.replace('book', '').toLowerCase();
    if (value.trim() !== '') book[key] = value;
  }

  const updatedBook = await booksAPI.updateBook(book, book.id);
  const oldBookElem = refs.bookListElem.querySelector(
    `[data-id = "${book.id}"]`,
  );
  oldBookElem.insertAdjacentHTML('afterend', bookTemplate(updatedBook));
  oldBookElem.remove();
});

refs.resetFormElem.addEventListener('submit', async e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const book = {};

  for (let [key, value] of data.entries()) {
    key = key.replace('book', '').toLowerCase();
    book[key] = value;
  }

  const updatedBook = await booksAPI.resetBook(book, book.id);
  const oldBookElem = refs.bookListElem.querySelector(
    `[data-id = "${book.id}"]`,
  );
  console.log(updatedBook);
  oldBookElem.insertAdjacentHTML('afterend', bookTemplate(updatedBook));
  oldBookElem.remove();

  e.target.reset();
});

refs.deleteFormElem.addEventListener('submit', async e => {
  e.preventDefault();
  const id = e.target.elements.bookId.value;

  await booksAPI.deleteBook(id);
  const oldBook = refs.bookListElem.querySelector(`[data-id = "${id}"]`);
  oldBook.remove();

  e.target.reset();
});

function bookTemplate(book) {
  return `<li data-id="${book.id}" class="card articles">
  - ${book.title}<br>
  - ${book.author}<br>
  - ${book.desc}
  </li>
  `;
}
