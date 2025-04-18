import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import Profile from './pages/Profile';
import LoginRegister from './pages/LoginRegister';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/users/:id" element={<Profile />} />
        <Route path="/auth" element={<LoginRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
