import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Mahasiswa() {
  const [mahasiswa, setMahasiswa] = useState([
    { id: 1, nim: 'A11.2022.14788', nama: 'Chie' },
    { id: 2, nim: 'A11.2020.47123', nama: 'Mikasaa' },
    { id: 3, nim: 'A11.2021.58679', nama: 'Gremoryyy' },
    { id: 4, nim: 'A11.2022.38756', nama: 'About You 1945' },
  ]);

  const [isTambahModalOpen, setTambahModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newNim, setNewNim] = useState('');
  const [editData, setEditData] = useState({ id: '', nama: '', nim: '' });

  const handleTambah = () => setTambahModalOpen(true);
  const closeTambahModal = () => {
    setTambahModalOpen(false);
    setNewName('');
    setNewNim('');
  };

  const handleEdit = (mhs) => {
    setEditData(mhs);
    setEditModalOpen(true);
  };
  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditData({ id: '', nama: '', nim: '' });
  };

  const handleAddMahasiswa = (e) => {
    e.preventDefault();
    setMahasiswa([
      ...mahasiswa,
      { id: mahasiswa.length + 1, nama: newName, nim: newNim }
    ]);
    closeTambahModal();
    Swal.fire({
      title: 'Sukses!',
      text: 'Mahasiswa baru berhasil ditambahkan.',
      icon: 'success',
      confirmButtonText: 'Oke'
    });
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    setMahasiswa(mahasiswa.map((mhs) => (mhs.id === editData.id ? editData : mhs)));
    closeEditModal();
    Swal.fire({
      title: 'Sukses!',
      text: 'Data mahasiswa berhasil diperbarui.',
      icon: 'success',
      confirmButtonText: 'Oke'
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Hapus ga nieh?',
      text: 'Data yang sudah dihapus tidak dapat dikembalikan',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Hapus kiing!',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        setMahasiswa(mahasiswa.filter((mhs) => mhs.id !== id));
        Swal.fire('Dihapus!', 'Data telah dihapus.', 'success');
      }
    });
  };

  return (
    <div className="p-8">
      <div className="flex justify-end mb-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
          onClick={handleTambah}
        >
          Tambah
        </button>
      </div>

      <h2 className="text-2xl font-semibold mb-6">List Mahasiswa</h2>

      <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="py-3 px-4 text-left bg-gray-100">No.</th>
            <th className="py-3 px-4 text-left bg-gray-100">NIM</th>
            <th className="py-3 px-4 text-left bg-gray-100">Nama</th>
            <th className="py-3 px-4 text-left bg-gray-100">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswa.map((mhs, index) => (
            <tr key={mhs.id} className="hover:bg-gray-50">
              <td className="py-3 px-4">{index + 1}</td>
              <td className="py-3 px-4">{mhs.nim}</td>
              <td className="py-3 px-4">{mhs.nama}</td>
              <td className="py-3 px-4">
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
                  onClick={() => handleEdit(mhs)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDelete(mhs.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isTambahModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Tambah Mahasiswa</h2>
            <form onSubmit={handleAddMahasiswa}>
              <div className="mb-4">
                <label className="block text-gray-700">Nama</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">NIM</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={newNim}
                  onChange={(e) => setNewNim(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  onClick={closeTambahModal}
                >
                  Batal
                </button>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Edit Mahasiswa</h2>
            <form onSubmit={handleSaveEdit}>
              <div className="mb-4">
                <label className="block text-gray-700">Nama</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={editData.nama}
                  onChange={(e) => setEditData({ ...editData, nama: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">NIM</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={editData.nim}
                  onChange={(e) => setEditData({ ...editData, nim: e.target.value })}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  onClick={closeEditModal}
                >
                  Batal
                </button>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mahasiswa;
