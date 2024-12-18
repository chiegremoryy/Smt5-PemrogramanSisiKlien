import { useLocation, useNavigate } from 'react-router-dom';

function ItemDetail() {
  const location = useLocation();
  const item = location.state?.item;
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/inventory-list');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-16 pt-10">
      {item ? (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">{item.name}</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-lg text-gray-700 font-medium">Kategori:</p>
              <p className="text-lg text-gray-700">{item.category}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-gray-700 font-medium">Stok:</p>
              <p className="text-lg text-gray-700">{item.stock}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-gray-700 font-medium">Harga:</p>
              <p className="text-lg text-gray-700">Rp {item.price.toLocaleString()}</p>
            </div>
          </div>
          <hr className="my-6 border-gray-200" />
          <div className="text-center">
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
              onClick={handleBackClick}
            >
              Kembali ke Daftar Barang
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">Barang tidak ditemukan</p>
      )}
    </div>
  );
}

export default ItemDetail;
