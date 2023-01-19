import '../css/common.css';
import { UsersAPI } from './modules/usersAPI';

const refs = {
  createUserForm: document.querySelector('.js-create-form'),
  updateUserForm: document.querySelector('.js-update-form'),
  resetUserForm: document.querySelector('.js-reset-form'),
  userListElem: document.querySelector('.js-users-list'),
};

const usersAPI = new UsersAPI();

const userTemplate = user => {
  return `
  <li data-sefsefsef="${user.id}" class="card articles">
  <h4>${user.name}</h4>
  <span>${user.phone}</span>
</li>`;
};

const usersTemplate = users => {
  return users.map(userTemplate).join('');
};

async function onLoadDocument() {
  const users = await usersAPI.getUsers();
  refs.userListElem.innerHTML = usersTemplate(users);
}

onLoadDocument();

// =======================

refs.createUserForm.addEventListener('submit', async e => {
  e.preventDefault();

  const user = {
    name: e.target.elements.userName.value,
    phone: e.target.elements.userPhone.value,
  };

  const createdUser = await usersAPI.createUser(user);
  refs.userListElem.insertAdjacentHTML('beforeend', userTemplate(createdUser));
});

// =======================

refs.updateUserForm.addEventListener('submit', async e => {
  e.preventDefault();

  const user = {};
  //   const { userName, userPhone, userId } = e.target.elements;
  //   user.name = userName.value.trim() || undefined;
  //   user.phone = userPhone.value.trim() || undefined;
  //   user.id = userId.value.trim() || undefined;

  const formData = new FormData(e.target);

  for (let [key, value] of formData.entries()) {
    if (value.trim()) {
      key = key.replace('user', '').toLowerCase();
      user[key] = value;
    }
  }

  const updatedUser = await usersAPI.updateUser(user, user.id);
  const userMarkup = userTemplate(updatedUser);
  const oldUser = refs.userListElem.querySelector(`[data-id="${user.id}"]`);
  oldUser.insertAdjacentHTML('afterend', userMarkup);
  oldUser.remove();
  e.target.reset();
});
