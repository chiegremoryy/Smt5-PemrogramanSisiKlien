import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/AuthSlice';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      Swal.fire({
        icon: 'error',
        title: 'Login Gagal!',
        text: 'Email dan password tidak boleh kosong.',
      });
      return;
    }

    try {
      const response = await axios.post(
        'https://psk-uas.vercel.app/api/auth/login',
        form,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response.status === 200) {
        const { user, token, message } = response.data;

        dispatch(login({ user, token }));

        Swal.fire({
          icon: 'success',
          title: 'Login berhasil!',
          text: message || 'Selamat datang!',
        });

        navigate('/user');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Gagal!',
        text: error.response?.data?.message || 'Terjadi kesalahan. Coba lagi.',
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-sm w-full">
        <div className="flex justify-center">
          <img
            src="./src/assets/logo2x1.png"
            alt="Logo"
            className="w-30 h-15 object-cover rounded-full"
          />
        </div>
        <h1 className="text-3xl font-semibold text-gray-600 dark:text-white text-center mb-8">
          Login
        </h1>
        <form onSubmit={handleSubmit} style={{ width: '300px', height: '310px' }}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="Enter your email"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="Enter your password"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 bg-gray-600 text-white text-sm font-medium rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Login
          </button>
        </form>
        <button
          onClick={() => navigate('/register')}
          className="mt-4 w-full text-gray-600 hover:underline text-sm text-center"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Belum punya akun? Daftar sekarang
        </button>
      </div>
    </div>
  );
};

export default Login;
