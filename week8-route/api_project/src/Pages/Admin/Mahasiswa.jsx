import React, { useState } from 'react';
import Swal from 'sweetalert2';

// Mahasiswa Component
const Mahasiswa = () => {
  const [mahasiswa, setMahasiswa] = useState([
    { id: 1, nim: 'A11.2022.14788', nama: 'Chie' },
    { id: 2, nim: 'A11.2020.47123', nama: 'Mikasa' },
    { id: 3, nim: 'A11.2021.58679', nama: 'Gremory' },
  ]);
  const [isTambahModalOpen, setTambahModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({ id: '', nama: '', nim: '' });

  // Modal Controls
  const openTambahModal = () => {
    setTambahModalOpen(true);
    setFormData({ id: '', nama: '', nim: '' });
  };
  const closeTambahModal = () => setTambahModalOpen(false);
  const openEditModal = (mhs) => {
    setFormData(mhs);
    setEditModalOpen(true);
  };
  const closeEditModal = () => setEditModalOpen(false);

  // Handlers
  const handleTambahMahasiswa = (e) => {
    e.preventDefault();
    if (mahasiswa.find((mhs) => mhs.nim === formData.nim)) {
      Swal.fire('Error', 'NIM sudah digunakan!', 'error');
      return;
    }
    setMahasiswa([...mahasiswa, { id: mahasiswa.length + 1, nama: formData.nama, nim: formData.nim }]);
    closeTambahModal();
    Swal.fire('Sukses', 'Mahasiswa berhasil ditambahkan.', 'success');
  };

  const handleEditMahasiswa = (e) => {
    e.preventDefault();
    setMahasiswa(mahasiswa.map((mhs) => (mhs.id === formData.id ? formData : mhs)));
    closeEditModal();
    Swal.fire('Sukses', 'Data mahasiswa berhasil diperbarui.', 'success');
  };

  const handleDeleteMahasiswa = (id) => {
    Swal.fire({
      title: 'Hapus mahasiswa?',
      text: 'Data yang dihapus tidak dapat dikembalikan.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        setMahasiswa(mahasiswa.filter((mhs) => mhs.id !== id));
        Swal.fire('Dihapus!', 'Data mahasiswa telah dihapus.', 'success');
      }
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">List Mahasiswa</h1>

      {/* Student Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md mb-6">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2 px-4 text-left">No.</th>
              <th className="border-b py-2 px-4 text-left">NIM</th>
              <th className="border-b py-2 px-4 text-left">Nama</th>
              <th className="border-b py-2 px-4 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map((mhs, index) => (
              <tr key={mhs.id} className="hover:bg-gray-50">
                <td className="border-b py-2 px-4">{index + 1}</td>
                <td className="border-b py-2 px-4">{mhs.nim}</td>
                <td className="border-b py-2 px-4">{mhs.nama}</td>
                <td className="border-b py-2 px-4">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
                    onClick={() => openEditModal(mhs)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDeleteMahasiswa(mhs.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Mahasiswa Button */}
      <div className="flex justify-end">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
          onClick={openTambahModal}
        >
          Tambah Mahasiswa
        </button>
      </div>

      {/* Modal for Adding Student */}
      {isTambahModalOpen && (
        <Modal
          title="Tambah Mahasiswa"
          onClose={closeTambahModal}
          onSubmit={handleTambahMahasiswa}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {/* Modal for Editing Student */}
      {isEditModalOpen && (
        <Modal
          title="Edit Mahasiswa"
          onClose={closeEditModal}
          onSubmit={handleEditMahasiswa}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

// Modal Component for Add/Edit Operations
const Modal = ({ title, onClose, onSubmit, formData, setFormData }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nama</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={formData.nama}
              onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">NIM</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={formData.nim}
              onChange={(e) => setFormData({ ...formData, nim: e.target.value })}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
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
  );
};

export default Mahasiswa;
