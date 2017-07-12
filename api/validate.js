module.exports = {
	book(book) {
		const validTitle = typeof book.title == 'string' &&
						book.title.trim() != '';
		return validTitle;
	}
};
