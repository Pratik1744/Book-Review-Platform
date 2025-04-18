import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4">
    <div className="flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      <Link to="/auth">Login/Register</Link>
    </div>
  </nav>
);

export default Navbar;
