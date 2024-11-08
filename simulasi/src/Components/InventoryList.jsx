import { useState } from 'react';
import { Link } from 'react-router-dom';

function InventoryList({ inventoryData }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = inventoryData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-blue-50 flex justify-center items-start pt-12 mt-16">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Daftar Barang di Gudang</h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Cari barang..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-4 font-semibold text-gray-700 border-b border-gray-300">Nama Barang</th>
              <th className="p-4 font-semibold text-gray-700 border-b border-gray-300">Kategori</th>
              <th className="p-4 font-semibold text-gray-700 border-b border-gray-300">Stok</th>
              <th className="p-4 font-semibold text-gray-700 border-b border-gray-300">Harga</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-700">
                  Barang tidak ditemukan
                </td>
              </tr>
            ) : (
              filteredData.map(item => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="p-4 border-b border-gray-300 text-gray-700">
                    <Link to={`/item-detail/${item.id}`} state={{ item }}>
                      {item.name}
                    </Link>
                  </td>
                  <td className="p-4 border-b border-gray-300 text-gray-700">{item.category}</td>
                  <td className="p-4 border-b border-gray-300 text-gray-700">{item.stock}</td>
                  <td className="p-4 border-b border-gray-300 text-gray-700">Rp {item.price.toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryList;
