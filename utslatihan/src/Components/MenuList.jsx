import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MenuList() {
  const [menuData] = useState([
    { id: 1, name: "Nasi Goreng", category: "Makanan", price: 15000 },
    { id: 2, name: "Sate Ayam", category: "Makanan", price: 20000 },
    { id: 3, name: "Rendang", category: "Makanan", price: 25000 },
    { id: 4, name: "Gado-Gado", category: "Makanan", price: 12000 },
    { id: 5, name: "Nasi Padang", category: "Makanan", price: 22000 },
    { id: 6, name: "Es Teh", category: "Minuman", price: 5000 },
    { id: 7, name: "Jus Jeruk", category: "Minuman", price: 8000 },
  ]);

  return (
    <div className="w-full min-h-screen bg-blue-50 flex justify-center items-start pt-12 mt-16">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Daftar Menu</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-200 text-left">
              <th className="p-4 font-semibold text-gray-700 border-b border-gray-300">Nama</th>
              <th className="p-4 font-semibold text-gray-700 border-b border-gray-300">Kategori</th>
              <th className="p-4 font-semibold text-gray-700 border-b border-gray-300">Harga</th>
            </tr>
          </thead>
          <tbody>
            {menuData.map(menu => (
              <tr key={menu.id} className="hover:bg-gray-100">
                <td className="p-4 border-b border-gray-300">
                  <Link 
                    to={`/menu-detail/${menu.id}`}
                    state={{ menuItem: menu }}
                    className="text-blue-600 hover:underline"
                  >
                    {menu.name}
                  </Link>
                </td>
                <td className="p-4 border-b border-gray-300 text-gray-700">{menu.category}</td>
                <td className="p-4 border-b border-gray-300 text-gray-700">Rp{menu.price.toLocaleString('id-ID')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MenuList;
