import axios2 from 'axios';

const axios = axios2.create({
  baseURL: 'http://localhost:3000/books',
  headers: { test: 'hello', myKey: 'KUKU-KEY' },
  params: {
    key: '213132434234234',
  },
});

export class BooksApi2 {
  static baseUrl = 'http://localhost:3000';
  static endPoint = '/books';

  getBooks() {
    const url = `${BooksApi.baseUrl}${BooksApi.endPoint}`;
    return fetch(url)
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  createBook(book) {
    const url = `${BooksApi.baseUrl}${BooksApi.endPoint}`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(url, options).then(response => response.json());
  }
  updateBook({ id, ...book }) {
    const url = `${BooksApi.baseUrl}${BooksApi.endPoint}/${id}`;
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(url, options).then(response => response.json());
  }
  resetBook({ id, ...book }) {
    const url = `${BooksApi.baseUrl}${BooksApi.endPoint}/${id}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(url, options).then(response => response.json());
  }
  deleteBook(id) {
    const url = `${BooksApi.baseUrl}${BooksApi.endPoint}/${id}`;
    const options = {
      method: 'DELETE',
    };
    return fetch(url, options);
  }
}
export class BooksApi {
  getBooks() {
    return axios.get().then(res => res.data);
  }

  createBook(book) {
    return axios.post('', book).then(res => res.data);
  }

  updateBook({ id, ...book }) {
    return axios.patch(`/${id}`, book);
  }

  resetBook({ id, ...book }) {
    return axios.put(`/${id}`, book).then(res => res.data);
  }

  deleteBook(id) {
    return axios.delete(`/${id}`);
  }
}
