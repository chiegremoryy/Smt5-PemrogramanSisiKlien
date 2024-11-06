// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// Setiap satu file jsx harus punya 1 komponen utama(function)
// Komponen Utama
// 1 komponen harus 1 return
// src/App.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';

function App() {
  return (
    <div className='bg-gray-100'>
      <div className='flex flex-row min-h-screen'>
        <Sider />
        <Konten />
      </div>
    </div>
  );
}

function Sider() {
  return (
    <aside className="w-64 bg-indigo-900 text-white">
      <div className="p-4">
        <h1 className="text-2xl py-2 px-4 font-bold">Admin Panel</h1>
        <nav className="py-2 px-4 mt-4">
          <ul>
            <li className="py-2 px-4 hover:bg-indigo-700 rounded">
              <a href="#">Dashboard</a>
            </li>
            <li className="py-2 px-4 hover:bg-indigo-700 rounded">
              <a href="#">Mahasiswa</a>
            </li>
            <li className="py-2 px-4 hover:bg-indigo-700 rounded">
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

function Konten() {
  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-white p-4 flex justify-end">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
    </header>
  );
}

function Main() {
  const [mahasiswa, setMahasiswa] = useState([
    { id: 1, nim: 'A11.2022.14788', nama: 'Chie' },
    { id: 2, nim: 'A11.2020.47123', nama: 'Mikasaa' },
    { id: 3, nim: 'A11.2021.58679', nama: 'Gremoryyy' },
    { id: 4, nim: 'A11.2022.38756', nama: 'About You 1945' },
  ]);

  const handleDelete = (id, nim) => {
    Swal.fire({
      title: 'Konfirmasi Hapus',
      text: `Data Mahasiswa dengan NIM ${nim} akan dihapus? Data yang telah terhapus tidak dapat dikembalikan lagi.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        setMahasiswa(mahasiswa.filter((m) => m.id !== id));
        Swal.fire('Terhapus!', 'Data telah dihapus.', 'success');
      }
    });
  };

  const handleEdit = (id, nim, nama) => {
    Swal.fire({
      title: 'Edit Mahasiswa',
      html: `
        <input id="swal-nim" class="swal2-input" placeholder="NIM" value="${nim}">
        <input id="swal-nama" class="swal2-input" placeholder="Nama" value="${nama}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Simpan',
      cancelButtonText: 'Batal',
      preConfirm: () => {
        const nimInput = document.getElementById('swal-nim').value.trim();
        const namaInput = document.getElementById('swal-nama').value.trim();
        if (!nimInput || !namaInput) {
          Swal.showValidationMessage('Isi dulu nyet!');
        }
        return { nim: nimInput, nama: namaInput };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setMahasiswa(mahasiswa.map((m) => m.id === id ? { ...m, nim: result.value.nim, nama: result.value.nama } : m));
        Swal.fire('Diperbarui!', 'Data berhasil diperbarui.', 'success');
      }
    });
  };

  const handleTambah = () => {
    Swal.fire({
      title: 'Tambah Mahasiswa',
      html: `
        <input id="swal-nim" class="swal2-input" placeholder="NIM">
        <input id="swal-nama" class="swal2-input" placeholder="Nama">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Tambah',
      cancelButtonText: 'Batal',
      preConfirm: () => {
        const nimInput = document.getElementById('swal-nim').value.trim();
        const namaInput = document.getElementById('swal-nama').value.trim();
        if (!nimInput || !namaInput) {
          Swal.showValidationMessage('Isi dulu nyet!');
        }
        return { nim: nimInput, nama: namaInput };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const newId = mahasiswa.length > 0 ? mahasiswa[mahasiswa.length - 1].id + 1 : 1;
        const newMahasiswa = {
          id: newId,
          nim: result.value.nim,
          nama: result.value.nama,
        };
        setMahasiswa([...mahasiswa, newMahasiswa]);
        Swal.fire('Berhasil', `Mahasiswa dengan NIM ${result.value.nim} dan Nama ${result.value.nama} telah ditambahkan.`, 'success');
      }
    });
  };

  return (
    <main className="flex-grow p-4 bg-blue-50">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">List Mahasiswa</h2>
        <button onClick={handleTambah} className="bg-green-500 text-white px-4 py-2 rounded">Tambah</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-300">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">NIM</th>
              <th className="px-4 py-2">Nama</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map((m, index) => (
              <Baris
                key={m.id}
                no={index + 1}
                nim={m.nim}
                nama={m.nama}
                handleEdit={() => handleEdit(m.id, m.nim, m.nama)}
                handleDelete={() => handleDelete(m.id, m.nim)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-indigo-900 text-white p-4 text-center">
      &copy; Admin ChieKocag;
    </footer>
  );
}

function Baris({ no, nim, nama, handleEdit, handleDelete }) {
  return (
    <tr>
      <td className="border px-4 py-2">{no}</td>
      <td className="border px-4 py-2">{nim}</td>
      <td className="border px-4 py-2">{nama}</td>
      <td className="px-4 py-2">
        <button onClick={handleEdit} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">Edit</button>
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Hapus</button>
      </td>
    </tr>
  );
}

export default App;


// function App() {
//   return <div>
//     <h1>Psywar Suporter Bahrain: Indonesia Akan Kalah Seperti 2012!</h1>
//     <p>Psywar tersebut menyulut emosi Suporter Garuda</p>
//   </div>

// }

// function Judul() {
//   return 
// }

// function Deskripsi() {

// }