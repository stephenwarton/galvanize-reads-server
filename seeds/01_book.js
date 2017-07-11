const book = require('./seeds-data/book')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE book RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('book').insert(book);
    });
};
