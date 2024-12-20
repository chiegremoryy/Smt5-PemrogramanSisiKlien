import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Mahasiswa = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nama: '',
    nim: '',
    alamat: '',
    umur: '',
    progdi_id: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://demo-api.syaifur.io/api/mahasiswa', {
          headers: {
            Authorization: `Bearer 425|1q0hY3HHawmC0Llqccy3HK0gCwvY4Fz1ptrhymAuacdca5cc`,
          },
        });
        setData(Array.isArray(response.data.data) ? response.data.data : [response.data.data]);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (isEditing) {
        const response = await axios.put(
          `http://demo-api.syaifur.io/api/mahasiswa/${editId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer 425|1q0hY3HHawmC0Llqccy3HK0gCwvY4Fz1ptrhymAuacdca5cc`,
            },
          }
        );
        setData((prev) =>
          prev.map((item) =>
            item.id === editId ? { ...item, ...response.data.data } : item
          )
        );
        alert('Mahasiswa berhasil diperbarui!');
      } else {
        const response = await axios.post(
          'http://demo-api.syaifur.io/api/mahasiswa',
          formData,
          {
            headers: {
              Authorization: `Bearer 425|1q0hY3HHawmC0Llqccy3HK0gCwvY4Fz1ptrhymAuacdca5cc`,
            },
          }
        );
        setData((prev) => [...prev, response.data.data]);
        alert('Mahasiswa berhasil ditambahkan!');
      }
      setFormData({
        nama: '',
        nim: '',
        alamat: '',
        umur: '',
        progdi_id: '',
      });
      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      console.error(error);
      alert('Gagal menyimpan data. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus data ini?')) return;
    try {
      await axios.delete(`http://demo-api.syaifur.io/api/mahasiswa/${id}`, {
        headers: {
          Authorization: `Bearer 425|1q0hY3HHawmC0Llqccy3HK0gCwvY4Fz1ptrhymAuacdca5cc`,
        },
      });
      setData((prev) => prev.filter((item) => item.id !== id));
      alert('Mahasiswa berhasil dihapus!');
    } catch (error) {
      console.error(error);
      alert('Gagal menghapus data.');
    }
  };

  const handleEdit = (id) => {
    const mahasiswa = data.find((item) => item.id === id);
    if (mahasiswa) {
      setFormData({
        nama: mahasiswa.nama,
        nim: mahasiswa.nim,
        alamat: mahasiswa.alamat,
        umur: mahasiswa.umur,
        progdi_id: mahasiswa.progdi_id,
      });
      setIsEditing(true);
      setEditId(id);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">List Mahasiswa</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          {isEditing ? 'Edit Mahasiswa' : 'Tambah Mahasiswa'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form Fields */}
          {['nama', 'nim', 'alamat', 'umur', 'progdi_id'].map((field) => (
            <div key={field}>
              <label className="block mb-1 font-medium capitalize">{field}</label>
              <input
                type={field === 'umur' ? 'number' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Mengirim...' : isEditing ? 'Perbarui Mahasiswa' : 'Tambah Mahasiswa'}
          </button>
        </form>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
              {['ID', 'Nama', 'NIM', 'Alamat', 'Umur', 'Progdi ID', 'Tanggal Dibuat', 'Aksi'].map((header) => (
                <th key={header} className="border-b py-3 px-4 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {error ? (
              <tr>
                <td colSpan="8" className="text-red-500 text-center py-4">
                  Error fetching data: {error.message}
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border-b py-2 px-4">{item.id}</td>
                  <td className="border-b py-2 px-4">{item.nama}</td>
                  <td className="border-b py-2 px-4">{item.nim}</td>
                  <td className="border-b py-2 px-4">{item.alamat}</td>
                  <td className="border-b py-2 px-4">{item.umur}</td>
                  <td className="border-b py-2 px-4">{item.progdi_id}</td>
                  <td className="border-b py-2 px-4">{new Date(item.created_at).toLocaleDateString()}</td>
                  <td className="border-b py-2 px-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mahasiswa;
