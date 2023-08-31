import { users, albums, photos } from './data';

const refs = {
  userListEl: document.querySelector('.js-user-list'),
};

const userListRender = ({ users }) => {
  const markup = users.map(el => {
    return ``;
  });
};
