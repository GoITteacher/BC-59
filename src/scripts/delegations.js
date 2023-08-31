import { users, albums, photos } from './data';

const refs = {
  userListEl: document.querySelector('.js-user-list'),
  formEl: document.querySelector('.js-header-form'),
};

const userListRender = users => {
  const markup = users
    .map(el => {
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
    })
    .join('');
  refs.userListEl.innerHTML = markup;
  // refs.userListEl.insertAdjacentHTML('beforeend', markup);
};

userListRender(users);

refs.userListEl.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    return;
  }

  const liElem = event.target.closest('li.user-profile');
  const id = +liElem.dataset.id;
  const user = users.find(el => {
    return el.id === id;
  });
  console.log(user);

  const markup = `
  <div class="modalka">
  <img src="https://source.unsplash.com/500x500/?random=${id}&girl"/>
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
  const instance = basicLightbox.create(markup);
  instance.show();
});

refs.formEl.addEventListener('submit', onFormElSubmit);

function onFormElSubmit(event) {
  event.preventDefault();
  const inputValue = event.target.elements.username.value.trim();
  const filteredUsers = users.filter(el => el.name.includes(inputValue));
  userListRender(filteredUsers);
}
