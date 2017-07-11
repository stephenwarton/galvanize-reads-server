const queries = require('../db/queries');
const express = require('express');

const router = express.Router();

router.get('/book', (req, res) => {
  console.log('hello');
	queries.getAllBooks().then(books => {
		res.json(books);
	});
});

module.exports = router;
