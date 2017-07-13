const knex = require('./knex');

module.exports = {

  getAllBooks() {
    return knex('book');
    // .join('book_author', 'book_author.book_id', 'book.id')
    // .join('author', 'author.id', 'book_author.author_id')
    // .select('book_id');
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
