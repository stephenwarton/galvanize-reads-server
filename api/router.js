const queries = require('../db/queries');
const express = require('express');

const router = express.Router();

router.get('/books', (req, res) => {
	queries.getAllBooks().then(books => {
		res.json(books);
	});
});

router.post('/books', (req, res, next) => {
  queries.createBook({
    title: req.body.title,
    genre: req.body.genre,
    description: req.body.description,
    cover_url: req.body.cover_url,
  }).then(result => {
    res.json(result);
  });
});

module.exports = router;
