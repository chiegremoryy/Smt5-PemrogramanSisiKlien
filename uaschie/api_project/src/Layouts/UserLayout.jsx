import React from 'react';
import { Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

function UserLayout() {
  return (
    <div className="bg-gray-100 min-h-screen flex font-poppins">
      <Sider />
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <main className="flex-grow bg-white shadow-sm overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function Sider() {
  return (
    <aside className="w-64 bg-gray-50 text-white flex flex-col fixed top-0 left-0 bottom-0 z-10">
        <img
            src="./src/assets/logo2x1.png"
            alt="Logo"
            className="w-26 h-13 object-cover rounded-full"
          />
      <nav className="flex-grow px-4 py-6">
        <ul className="space-y-3">
          <li>
            <Link
              to="/user"
              className="block px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-600 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/user/news"
              className="block px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-600 transition"
            >
              News
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
    <header className="bg-gray-800 text-white shadow p-12 flex justify-between items-center sticky top-0 z-10">
      <h2 className="text-lg font-semibold">Selamat Datang di Lensa Merapi</h2>
      <button
        onClick={handleLogout}
        className="flex items-center bg-red-600 text-white px-6 py-4 rounded-lg hover:bg-red-500 transition ease-in-out duration-300 shadow-md"
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
        LOGOUT
      </button>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 shadow-inner sticky bottom-0 w-full">
      &copy; 2024 ChieGremoryy. All rights reserved.
    </footer>
  );
}

export default UserLayout;
