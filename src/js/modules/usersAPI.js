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
