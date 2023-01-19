import { users, albums, photos } from './data.js';

const refs = {
  userListElem: document.querySelector('.js-user-list'),
  albumsListElem: document.querySelector('.js-album-list'),
  photoListEl: document.querySelector('.js-photo-list'),
};

refs.userListElem.addEventListener('click', event => {
  if (event.currentTarget !== event.target) {
    const liElem = event.target.closest('.user-item');
    refs.albumsListElem.innerHTML = createMarkupAlbumList(liElem.dataset.id);
  }
});

refs.userListElem.innerHTML = createMarkupUserList(users);
refs.albumsListElem.addEventListener('click', event => {
  if (event.currentTarget !== event.target) {
    const liElem = event.target.closest('.album');
    refs.photoListEl.innerHTML = createMarkupPhotoList(liElem.dataset.id);
  }
});

function createMarkupUserList(users) {
  return users
    .map(user => {
      return `<li class="user-item" data-id=${user.id}>
                  <h3>${user.name}</h3>
              </li>`;
    })
    .join('');
}
function createMarkupAlbumList(idUser) {
  const fitrArr = albums.filter(album => {
    return album.userId === +idUser;
  });

  return fitrArr
    .map(album => {
      return `<li class="album" data-id=${album.id}>
                <h3>${album.title}</h3>
                <div class="fb">
                    <img src="https://via.placeholder.com/150/92c952" alt="1" style="width: 50px; height: 50px;">
                    <img src="https://via.placeholder.com/150/92c952" alt="2" style="width: 50px; height: 50px;">
                    <img src="https://via.placeholder.com/150/92c952" alt="3" style="width: 50px; height: 50px;">
                </div>
            </li>`;
    })
    .join('');
}

function createMarkupPhotoList(albumId) {
  const filteredPhotos = photos.filter(photo => photo.albumId === +albumId);
  return filteredPhotos
    .map(photo => `<img src="${photo.url}" alt="${photo.title}">`)
    .join('');
}
