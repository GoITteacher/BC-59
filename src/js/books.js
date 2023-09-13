import { BooksApi } from './modules/booksAPI';

const refs = {
  listEl: document.querySelector('.js-article-list'),
  createFormEl: document.querySelector('.js-create-form'),
  resetFormEl: document.querySelector('.js-reset-form'),
  updateFormEl: document.querySelector('.js-update-form'),
  deleteFormEl: document.querySelector('.js-delete-form'),
};

const booksApi = new BooksApi();
// =========================================
refs.createFormEl.addEventListener('submit', onCreateFormSubmit);
refs.resetFormEl.addEventListener('submit', onResetFormSubmit);
refs.updateFormEl.addEventListener('submit', onUpdateFormSubmit);
refs.deleteFormEl.addEventListener('submit', onDeleteFormSubmit);

async function onCreateFormSubmit(event) {
  event.preventDefault();

  const { bookTitle, bookAuthor, bookDesc } = event.target.elements;

  const title = bookTitle.value;
  const author = bookAuthor.value;
  const desc = bookDesc.value;

  const book = {
    title,
    author,
    desc,
  };

  try {
    const createdBook = await booksApi.createBook(book);
    const markup = templateBook(createdBook);
    refs.listEl.insertAdjacentHTML('beforeend', markup);
    event.target.reset();
  } catch (err) {
    console.log(err);
  }
}
async function onUpdateFormSubmit(event) {
  event.preventDefault();
  const book = {};
  const formData = new FormData(event.target);

  formData.forEach((value, key) => {
    if (!value) {
      return;
    }
    key = key.replace('book', '').toLowerCase();
    book[key] = value;
  });

  try {
    const updatedBook = await booksApi.updateBook(book);
    const markup = templateBook(updatedBook);
    const oldBookEl = refs.listEl.querySelector(`[data-id="${book.id}"]`);
    oldBookEl.insertAdjacentHTML('beforebegin', markup);
    oldBookEl.remove();
  } catch (err) {
    console.log(err);
  }
}

async function onResetFormSubmit(event) {
  event.preventDefault();

  const book = {};
  const formData = new FormData(event.target);

  formData.forEach((value, key) => {
    key = key.replace('book', '').toLowerCase();
    book[key] = value;
  });

  try {
    const newBook = await booksApi.resetBook(book);
    const markup = templateBook(newBook);
    const oldBookEl = refs.listEl.querySelector(`[data-id="${book.id}"]`);
    oldBookEl.insertAdjacentHTML('afterend', markup);
    oldBookEl.remove();
  } catch (error) {
    console.log(error);
  }
}

async function onDeleteFormSubmit(event) {
  event.preventDefault();
  const id = event.target.elements.bookId.value;
  try {
    await booksApi.deleteBook(id);
    const oldEl = refs.listEl.querySelector(`[data-id="${id}"]`);
    oldEl.remove();
  } catch (error) {
    console.log(error);
  }
}

// =========================================
function templateBook({ id, title, author, desc }) {
  return `<li class="card book-item" data-id="${id}">
  <h4>${id} - ${title}</h4>
  <p>${desc}</p>
  <p>${author}</p>
</li>`;
}

function renderBooks(books) {
  const markUp = books.map(templateBook).join('');
  refs.listEl.innerHTML = markUp;
}

//===========================================

booksApi.getBooks().then(books => {
  renderBooks(books);
});
