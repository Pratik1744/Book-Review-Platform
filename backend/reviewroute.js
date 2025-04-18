const express = require('express');
const { getReviews, addReview } = require('../controllers/reviewController');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getReviews);
router.post('/', authenticateToken, addReview);

module.exports = router;
