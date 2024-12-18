import React from 'react';
import { Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

function AdminLayout() {
  return (
    <div className="bg-gray-100 min-h-screen flex font-sans">
      <Sider />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-grow bg-white shadow-sm">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function Sider() {
  return (
    <aside className="w-64 bg-blue-800 text-white flex flex-col">
      <div className="p-6 text-center border-b border-blue-700">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <nav className="flex-grow px-4 py-6">
        <ul className="space-y-3">
          <li>
            <Link
              to="/admin"
              className="block px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 transition"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/mahasiswa"
              className="block px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 transition"
            >
              Mahasiswa
            </Link>
          </li>
          <li>
            <Link
              to="/admin/setting"
              className="block px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 transition"
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
      title: 'Logout?',
      text: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    })
      .then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('authToken');
          window.location.href = '/';
        }
      })
      .catch((error) => {
        console.error('Error during logout confirmation:', error);
      });
  };

  return (
    <header className="bg-blue-800 text-white shadow p-5 flex justify-between items-center">
      <h2 className="text-lg font-semibold">Welcome to Admin Panel</h2>
      <button
        onClick={handleLogout}
        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition ease-in-out duration-300 shadow-md"
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
    <footer className="bg-blue-800 text-white text-center py-4 shadow-inner">
      &copy; 2024 ChieGremoryy. All rights reserved.
    </footer>
  );
}

export default AdminLayout;
