const knex = require('./knex');

module.exports = {
  getAllBooks() {
    return knex('book');
  },
  createBook(book) {
    return knex('book').insert(book, '*');
  },
  getBookById(id){
    return knex('book').where('id', id);
  }
};
