import React, { useState } from 'react';
import api from '../api';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/authSlice';

const LoginRegister = () => {
  const [form, setForm] = useState({ email: '', password: '', username: '' });
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'login' : 'register';
    const res = await api.post(`/auth/${endpoint}`, form);
    if (isLogin) {
      dispatch(setUser(res.data));
    } else {
      alert("Registered! You can now log in.");
      setIsLogin(true);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        {!isLogin && (
          <input
            type="text"
            placeholder="Username"
            className="border p-2 w-full"
            onChange={e => setForm({ ...form, username: e.target.value })}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <p className="mt-2">
        {isLogin ? 'No account?' : 'Already have an account?'}{' '}
        <button className="text-blue-
