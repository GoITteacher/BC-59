function getAlbumsByUserId(id, albums) {
  return albums.filter(el => el.userId === id);
}

function getPhotosByAlbumId(id, photos) {
  return photos.filter(el => el.albumId === id);
}

export function getPhotosByUserId(id, albums, photos) {
  const userAlbums = getAlbumsByUserId(id, albums);
  const userPhotos = userAlbums.flatMap(album => {
    return getPhotosByAlbumId(album.id, photos);
  });
  return userPhotos;
}
