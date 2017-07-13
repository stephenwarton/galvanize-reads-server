const queries = require('../db/queries');
const express = require('express');
const valid = require('./validate');

const router = express.Router();

router.get('/books', (req, res) => {
  queries.getAllBooks().then(books => {
    res.json(books);
  });
});

router.get('/authors', (req, res) => {
  queries.getAllAuthors().then(authors => {
    res.json(authors);
  });
});

router.get('/books/:id', (req,res,next) => {
	queries.getBookById(req.params.id).then(book => {
		res.json(book);
	});
});

router.get('/authors/:id', (req,res,next) => {
	queries.getAuthorById(req.params.id).then(author => {
		res.json(author);
	});
});

router.post('/books', (req, res, next) => {
  if (valid.book(req.body)) {

    let book = {
      title: req.body.title,
      genre: req.body.genre,
      description: req.body.description,
      cover_url: req.body.cover_url
    };

    queries.createBook(book).then(result => {
      res.json(result);
    });
  } else {
    next(new Error('Title cannot be empty'));
  }
});

router.post('/book_author', (req, res, next) => {
    let bookAuthor = {
      author_id: req.body.author_id,
      book_id: req.body.book_id
    };

    queries.createBookAuthor(bookAuthor).then(result => {
      res.json(result);
    });
});

module.exports = router;
