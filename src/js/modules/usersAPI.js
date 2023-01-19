import axios from 'axios';
const axios2 = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {},
});

export class UsersAPI {
  async getUsers() {
    const response = await axios2.get('/users');
    return response.data;
  }

  async createUser(user) {
    const response = await axios2.post('/users', user);
    return response.data;
  }

  async updateUser(user, userId) {
    const response = await axios2.patch(`/users/${userId}`, user);
    return response.data;
  }
}
