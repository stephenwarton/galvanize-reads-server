const knex = require('./knex');

module.exports = {

  getAllBooks() {
    return knex('book');
    // return knex('book').then(books => {
    //   books.forEach(book => {
    //     return knex('book_author').where('book_author.book_id', book.id).then(results => {
    //       results.forEach(bookAuthor => {
    //         return knex('author').where('author.id', bookAuthor.author_id).then(results2 => {
    //           console.log(results2);
    //         })
    //       });
    //     });
    //   });
    // });
    // .join('book_author', 'book_author.book_id', 'book.id')
    // .join('author', 'author.id', 'book_author.author_id')
    // .select('book_id');
  },

  getAllAuthors() {
    return knex('author');
  },

  getAuthorsByBookId(id){
    return knex('book_author').where('book_id', id)
    .join('author', 'author.id', 'book_author.author_id');
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
  },

  deleteBookById(id) {
    return knex('book').where('id', id).del();
  }

};
