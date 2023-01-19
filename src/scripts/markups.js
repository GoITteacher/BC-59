export function createMarkupPhotoList(albumId, photos) {
  const filteredPhotos = photos.filter(photo => photo.albumId === +albumId);
  return filteredPhotos
    .map(
      photo => `<img loading="lazy" src="${photo.url}" alt="${photo.title}">`,
    )
    .join('');
}

export function createMarkupAlbumList(idUser, albums) {
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

export function createMarkupUserList(users) {
  return users
    .map(user => {
      return `<li class="user-item" data-id=${user.id}>
                    <h3>${user.name}</h3>
                </li>`;
    })
    .join('');
}

export function createModalMarkup(user, albumId, photos) {
  const filteredPhoto = photos.filter(photo => photo.albumId === +albumId);

  const imagesMarkup = filteredPhoto
    .map(photo => {
      return `
        <img class='lazyload blur-up' src='${photo.thumbnailUrl}' data-src='${photo.url}' alt='${photo.title}'>
      `;
    })
    .join('');

  const modalWrapper = `
              <h2>${user.name}</h2>
              <hr>
              - <span>${user.email}</span><br>
              - <span>${user.phone}</span><br>
              - <a href="${user.website}">${user.website}</a>
              <hr>
              Adress: ${user.address.city} - ${user.address.street}
              <hr>
              Company: ${user.company.name}
              <hr>
              <div class="fb fb-v list js-modal-list" style="max-height: 500px; overflow-y: auto;">
                ${imagesMarkup}
              </div>
      `;

  return modalWrapper;
}

export const awdawd = dawdawd;

export default {
  createMarkupUserList,
  vcreateMarkupUserList,
};
