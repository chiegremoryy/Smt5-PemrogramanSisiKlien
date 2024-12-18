import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'admin') {
      Swal.fire({
        icon: "success",
        title: "Login berhasil!",
        text: "Selamat datang!"
      });
      navigate('/admin');
    } else {
      Swal.fire({
        icon: "error",
        title: "Login gagal!",
        text: "Email atau password salah."
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-white mb-6">Login</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
        <button
          onClick={() => navigate('/register')}
          className="mt-4 w-full text-blue-600 hover:underline text-sm text-center"
        >
          Belum punya akun?
        </button>
      </div>
    </div>
  );
};

export default Login;
