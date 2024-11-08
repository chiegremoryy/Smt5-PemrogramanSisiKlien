import React from 'react';

function Header() {
  return (
    <header className="bg-blue-600 text-white flex justify-between items-center px-6 h-16 w-full absolute top-0 left-0 z-50">
      <h1 className="text-lg font-semibold">Manajemen Menu Restaurant</h1>
      <span className="flex items-center">
        <span>Chie Gremoryyy</span>
        <div className="ml-3 w-8 h-8 bg-blue-400 rounded-full"></div>
      </span>
    </header>
  );
}

export default Header;
