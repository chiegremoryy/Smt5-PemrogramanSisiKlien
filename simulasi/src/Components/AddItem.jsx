import { useState } from 'react';

function AddItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();

    if (!name || !category || !stock || !price) {
      alert('Isi dulu nyet!');
      return;
    }

    const newItem = {
      id: Date.now(),
      name,
      category,
      stock: parseInt(stock),
      price: parseInt(price),
    };

    console.log('Data yang akan dikirim:', newItem);

    onAddItem(newItem);

    setName('');
    setCategory('');
    setStock('');
    setPrice('');
  };

  return (
    <div className="max-w-md mx-auto mt-16 mb-32 p-7">
      <div className="bg-gray-100 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tambah Barang Baru</h2>
        <form onSubmit={handleAddItem} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nama Barang</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-gray-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Kategori</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-gray-300"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Stok</label>
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-gray-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Harga</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-gray-300"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
          >
            Tambah Barang
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItem;