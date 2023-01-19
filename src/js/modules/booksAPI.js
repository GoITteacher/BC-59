import axios from 'axios';
const axios2 = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {},
});

export class BooksAPI {
  async getBooks() {
    try {
      const response = await axios2.get('/books');
      return response.data;
    } catch {
      return [];
    }
  }

  async createBook(book) {
    const response = await axios2.post('/books', book);
    return response.data;
  }
  async updateBook(book, id) {
    const response = await axios2.patch(`/books/${id}`, book);
    return response.data;
  }
  async resetBook(book, id) {
    const response = await axios2.put(`/books/${id}`, book);
    return response.data;
  }
  async deleteBook(id) {
    return axios2.delete(`/books/${id}`);
  }
}
