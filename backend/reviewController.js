const Review = require('../models/Review');

exports.getReviews = async (req, res) => {
  const { bookId } = req.query;
  const reviews = await Review.find({ bookId });
  res.json(reviews);
};

exports.addReview = async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.status(201).json(review);
};
