const queries = require('../db/queries');
const express = require('express');
const valid = require('./validate');

const router = express.Router();

router.get('/books', (req, res) => {
  queries.getAllBooks().then(books => {
    res.json(books);
  });
});

router.get('/books/:id', (req,res,next) => {
	queries.getBookById(req.params.id).then(book => {
		res.json(book);
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

module.exports = router;
