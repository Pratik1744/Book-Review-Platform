import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.get(`/books/${id}`).then(res => setBook(res.data));
    api.get(`/reviews?bookId=${id}`).then(res => setReviews(res.data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>

      <h3 className="mt-4 font-semibold">Reviews:</h3>
      <ul>
        {reviews.map(r => (
          <li key={r._id}>
            {r.text} - <em>{r.rating}/5</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetail;
