const queries = require('../db/queries');
const express = require('express');

const router = express.Router();

router.get('/books', (req, res) => {
	queries.getAllBooks().then(books => {
		res.json(books);
	});
});

module.exports = router;
