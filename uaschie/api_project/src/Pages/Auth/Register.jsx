import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
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

    if (!form.nama || !form.email || !form.password) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please fill in all fields.',
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://psk-uas.vercel.app/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log(data, response)

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Registrasi Berhasil!',
          text: 'Akun Anda telah berhasil dibuat.',
        }).then(() => {
          navigate('/');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Registrasi Gagal',
          text: data.message || 'Terjadi kesalahan pada server.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registrasi Gagal',
        text: 'Terjadi kesalahan. Silakan coba lagi.',
      });
    } finally {
      setIsLoading(false);
    }

    setForm({ nama: '', email: '', password: '' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-sm w-full">
      <div className="flex justify-center">
          <img
            src="./src/assets/logo2x1.png"
            alt="Logo"
            className="w-30 h-15 object-cover rounded-full"
          />
        </div>
        <h1 className="text-3xl font-semibold text-gray-600 dark:text-white text-center mb-8">
          Register
        </h1>
        <form onSubmit={handleSubmit} style={{ width: '300px', height: '310px' }}>
          <div className="mb-6">
            <label
              htmlFor="nama"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              required
              style={{ fontFamily: 'Poppins, sans-serif' }}
            />
          </div>
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
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              required
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
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              required
              style={{ fontFamily: 'Poppins, sans-serif' }}
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2.5 text-white ${isLoading ? 'bg-gray-400' : 'bg-gray-600 hover:bg-gray-700'} focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm`}
            disabled={isLoading}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {isLoading ? 'Loading...' : 'Daftar'}
          </button>
        </form>
        <button
          onClick={() => navigate('/')}
          className="mt-4 w-full text-gray-600 hover:underline text-sm text-center"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Sudah punya akun? Login sekarang
        </button>
      </div>
    </div>
  );
  
};

export default Register;
