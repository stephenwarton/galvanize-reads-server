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

  createBookAuthor(bookAuthor) {
    return knex('book_author').insert(bookAuthor, '*');
  },

  getBookById(id){
    return knex('book').where('id', id);
  },

  getAuthorById(id){
    return knex('author').where('id', id);
  }

};
