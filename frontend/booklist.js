import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get('/books').then(res => setBooks(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">All Books</h2>
      <ul>
        {books.map(book => (
          <li key={book._id} className="mb-2">
            <Link to={`/books/${book._id}`} className="text-blue-600 underline">
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
