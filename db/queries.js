const knex = require('./knex');

module.exports = {
  getAllBooks() {
    return knex('book');
  },
  getAllAuthors() {
    return knex('author');
  },
  createBook(book) {
    return knex('book').insert(book, '*');
  },
  getBookById(id){
    return knex('book').where('id', id);
  },
  getAuthorById(id){
    return knex('author').where('id', id);
  }
};
