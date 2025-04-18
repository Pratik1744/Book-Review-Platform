const express = require('express');
const { getBooks, getBookById, addBook } = require('../controllers/bookController');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', authenticateToken, addBook); // Protect adding book (admin only)

module.exports = router;
