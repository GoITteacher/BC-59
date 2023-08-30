import { users, albums, photos } from './data.js';

const refs = {
  inputElement: document.querySelector('.js-input'),
  userListEl: document.querySelector('.js-user-list'),
  albumListEl: document.querySelector('.js-album-list'),
  photoListEl: document.querySelector('.js-photo-list'),
  backdropEl: document.querySelector('.backdrop'),
};

function userMarkup(array) {
  const markup = array
    .map(({ name, id }) => {
      return `<li class="user-item" data-id="${id}">${name}</li>`;
    })
    .join('');

  return markup;
}

function renderUserList(userList) {
  const markup = userMarkup(userList);
  refs.userListEl.innerHTML = markup;
}
renderUserList(users);

refs.inputElement.addEventListener('input', event => {
  const userValue = event.target.value;

  const filterUsers = users.filter(user => {
    return user.name.includes(userValue);
  });
  renderUserList(filterUsers);
});

// =================

function markupAlbums(array) {
  const markup = array
    .map(el => {
      return `<li class="album box" data-id=${el.id}>${el.title}</li>`;
    })
    .join('\n');
  return markup;
}

function renderAlbums(array) {
  const markup = markupAlbums(array);
  refs.albumListEl.innerHTML = markup;
}

refs.userListEl.addEventListener('click', event => {
  if (event.target === event.currentTarget) return;

  // if (event.target.classList.contains('js-user-list')) return;

  // if (event.target.nodeName !== 'LI') return;

  const userId = event.target.dataset.id;
  const filtered = albums.filter(element => Number(userId) === element.userId);
  renderAlbums(filtered);
});

function showModal() {
  document.body.classList.add('show-modal');
}

function hiddenModal() {
  document.body.classList.remove('show-modal');
}

refs.albumListEl.addEventListener('click', onAlbumListElClick);
function onAlbumListElClick(event) {
  if (event.target === event.currentTarget) return;

  const albumId = event.target.dataset.id;

  const album = albums.find(el => {
    return el.id === +albumId;
  });

  const user = users.find(el => {
    return el.id === album.userId;
  });

  renderModal(user);
  showModal();
}
refs.backdropEl.addEventListener('click', onBackdropElClick);
function onBackdropElClick(event) {
  if (event.target !== event.currentTarget) return;
  hiddenModal();
}

function renderModal(user, photosArr) {
  const markup = `
  <div class="modalka">
  <h2>${user.name}</h2>
  <hr/>
  - <span>${user.email}</span><br />
  - <span>${user.phone}</span><br />
  - <a href="${user.website}">website</a>
  <hr />
  Adress: ${user.address.city} ${user.address.street}
  <hr />
  Company: ${user.company.name}
  <hr />
  <div class="fb fb-v list js-modal-list"></div>
  </div>`;

  refs.backdropEl.innerHTML = markup;
}
