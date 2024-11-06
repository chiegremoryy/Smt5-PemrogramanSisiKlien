import React from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

function AdminLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sider />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-grow p-6 bg-blue-50">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

function Sider() {
  return (
    <aside className="w-64 bg-indigo-900 text-white flex flex-col">
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <nav className="flex-grow px-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="block px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/mahasiswa"
              className="block px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Mahasiswa
            </Link>
          </li>
          <li>
            <Link
              to="/setting"
              className="block px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Setting
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Logout ga nieh?',
      text: 'Anda akan logout!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, logout',
      cancelButtonText: 'Batal',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      }
    }).catch(error => {
      console.error('Error during logout confirmation:', error);
    });
  };

  return (
    <header className="bg-white shadow p-4 flex justify-end items-center">
      <button
        onClick={handleLogout}
        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition ease-in-out duration-300 shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m10 4H3"
          />
        </svg>
        Logout
      </button>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-500 text-white text-center py-4">
      &copy; 2024 ChieGremoryy
    </footer>
  );
}

export default AdminLayout;
