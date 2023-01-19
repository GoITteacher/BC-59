import { users, albums, photos } from './data.js';
import markupFunctions from './markupsV2.js';
import { createMarkupAlbumList, createMarkupPhotoList } from './markups';
import * as myData from './markups';

const {
  createMarkupPhotoList,
  createMarkupAlbumList,
  createMarkupUserList,
  createModalMarkup,
} = markupFunctions;

const refs = {
  userListElem: document.querySelector('.js-user-list'),
  albumsListElem: document.querySelector('.js-album-list'),
  photoListEl: document.querySelector('.js-photo-list'),
  modalka: document.querySelector('.modalka'),
  backdropEl: document.querySelector('.backdrop'),
};

refs.userListElem.innerHTML = createMarkupUserList(users);
refs.userListElem.addEventListener('click', event => {
  if (event.currentTarget !== event.target) {
    const liElem = event.target.closest('.user-item');
    refs.albumsListElem.innerHTML = createMarkupAlbumList(
      liElem.dataset.id,
      albums,
    );
  }
});

refs.albumsListElem.addEventListener('click', event => {
  if (event.currentTarget !== event.target) {
    const liElem = event.target.closest('.album');

    if (event.ctrlKey) {
      showModal(liElem.dataset.id);
    } else {
      refs.photoListEl.innerHTML = createMarkupPhotoList(
        liElem.dataset.id,
        photos,
      );
    }
  }
});

refs.backdropEl.addEventListener('click', event => {
  if (event.currentTarget === event.target) {
    document.body.classList.remove('show-modal');
  }
});

function showModal(albumId) {
  document.body.classList.add('show-modal');
  const currentAlbum = albums.find(item => item.id === +albumId);
  const currentUser = users.find(item => item.id === currentAlbum.userId);

  refs.modalka.innerHTML = createModalMarkup(currentUser, albumId, photos);
}
