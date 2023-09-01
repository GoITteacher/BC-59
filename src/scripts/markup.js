export const userListTemplate = el => {
  const { id, name, username, email, website } = el;
  return `
  <li class="user-profile box" data-id="${id}">
        <img
          src="https://source.unsplash.com/500x500/?random=${id}&girl"
          alt="User Image"
        />
        <h1 class="user-name">${name}</h1>
        <p class="user-username">${username}</p>
        <p class="user-email">${email}</p>
        <p class="user-website">
          <a href="${website}">Website</a>
        </p>
      </li>
  `;
};

export const modalTemplate = user => {
  const markup = `
    <div class="modalka">
    <img src="https://source.unsplash.com/500x500/?random=${user.id}&girl"/>
    <h1>User Information</h1>
    <ul class="modal-info">
        <li><strong>ID:</strong>${user.id}</li>
        <li><strong>Name:</strong> ${user.name} </li>
        <li><strong>Username:</strong> ${user.username}</li>
        <li><strong>Email:</strong>${user.email}</li>
        <li>
            <strong>Address:</strong>
            <ul>
                <li><strong>Street:</strong>${user.address.street}</li>
                <li><strong>Suite:</strong>${user.address.suite}</li>
                <li><strong>City:</strong>${user.address.city}</li>
                <li><strong>Zipcode:</strong>${user.address.zipcode}</li>
                <li>
                    <strong>Geo:</strong>
                    <ul>
                        <li><strong>Lat:</strong>${user.address.geo.lat}</li>
                        <li><strong>Lng:</strong>${user.address.geo.lng}</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Phone:</strong>${user.phone}</li>
        <li><strong>Website:</strong>${user.website}</li>
        <li>
            <strong>Company:</strong>
            <ul>
                <li><strong>Name:</strong>${user.company.name}</li>
                <li><strong>Catch Phrase:</strong>${user.company.catchPhrase}</li>
                <li><strong>BS:</strong>${user.company.bs}</li>
            </ul>
        </li>
    </ul>
    </div>
  `;
  return markup;
};
export const albumsTemplate = albums => {
  return albums
    .map(album => {
      return `<li class="album">${album.title}</li>`;
    })
    .join('');
};

export const photoTemplate = photos => {
  return photos
    .map(photo => {
      return `<a href="https://st5.depositphotos.com/69470920/64061/v/600/depositphotos_640614254-stock-illustration-pikachu-pokemon-anime-vector-illustration.jpg">
    <img loading="lazy"
      src="https://st5.depositphotos.com/69470920/64061/v/600/depositphotos_640614254-stock-illustration-pikachu-pokemon-anime-vector-illustration.jpg"
      alt="${photo.title}"
    />
    </a>`;
    })
    .join('');
};
