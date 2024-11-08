import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function MenuItemDetail() {
  const { id } = useParams();
  const location = useLocation();
  const menuItem = location.state?.menuItem;
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/menu-list');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-16"> {/* Menambahkan margin-top */}
      {menuItem ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">{menuItem.name}</h2>
          <p className="text-lg text-gray-600 mb-6">{menuItem.description}</p>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-lg text-gray-700 font-medium">Kategori:</p>
              <p className="text-lg text-gray-700">{menuItem.category}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-gray-700 font-medium">Harga:</p>
              <p className="text-lg text-gray-700">Rp{menuItem.price}</p>
            </div>
          </div>
          <hr className="my-6 border-gray-200" />
          <div className="text-center">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              onClick={handleBackClick}
            >
              Kembali ke Menu
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">Menu tidak ditemukan</p>
      )}
    </div>
  );
}

export default MenuItemDetail;
