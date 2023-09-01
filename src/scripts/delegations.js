import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { users, albums, photos } from './data';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { getPhotosByUserId } from './helpers';

import {
  userListTemplate,
  modalTemplate,
  albumsTemplate,
  photoTemplate,
} from './markup';

const lightbox = new SimpleLightbox('.gallery a');

const refs = {
  userListEl: document.querySelector('.js-user-list'),
  formEl: document.querySelector('.js-header-form'),
  albumListEl: document.querySelector('.js-album-list'),
};

const onUserListElClick = event => {
  if (event.target === event.currentTarget) {
    return;
  }

  const liElem = event.target.closest('li.user-profile');
  const id = +liElem.dataset.id;
  const user = users.find(el => {
    return el.id === id;
  });

  if (event.shiftKey) {
    const markup = modalTemplate(user);
    const instance = basicLightbox.create(markup);
    instance.show();
    return;
  }

  const userPhotos = getPhotosByUserId(+id, albums, photos);
  renderPhotos(userPhotos);
  lightbox.refresh();
};
const onFormElSubmit = event => {
  event.preventDefault();
  const inputValue = event.target.elements.username.value.trim();
  const filteredUsers = users.filter(el => el.name.includes(inputValue));
  userListRender(filteredUsers);
};

refs.userListEl.addEventListener('click', onUserListElClick);
refs.formEl.addEventListener('submit', onFormElSubmit);

const userListRender = users => {
  const markup = users.map(userListTemplate).join('');
  refs.userListEl.innerHTML = markup;
};

userListRender(users);

const renderPhotos = photos => {
  const markup = photoTemplate(photos);
  refs.albumListEl.innerHTML = markup;
};

const renderAlbums = albums => {
  const markup = albumsTemplate(albums);
  refs.albumListEl.innerHTML = markup;
};

// ================================
