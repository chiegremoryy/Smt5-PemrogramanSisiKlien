import { useState, useEffect } from "react";

function Header() {
const [namaPengguna, setNamaPengguna] = useState('');
useEffect(() => {
  setNamaPengguna('Gremoryyy');
}, []);

  return (
    <header className="bg-gray-600 text-white flex justify-between items-center px-6 h-16 w-full absolute top-0 left-0 z-50">
      <h1 className="text-lg font-semibold">Manajemen User</h1>
      <span className="flex items-center">
        <span>Selamat Datang! {namaPengguna}</span>
        <div className="ml-3 w-8 h-8 bg-gray-400 rounded-full"></div>
      </span>
    </header>
  );
}

export default Header;
