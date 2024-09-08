const express = require('express');
const router = express.Router();
const booksController = require('./booksController');

router.post('/add-book', booksController.addBook);
router.delete('/delete-book/:id', booksController.deleteBook);
router.get('/get-all-books', booksController.getAllBooks);
router.get('/get-book/:id', booksController.getBookById);

module.exports = router;
