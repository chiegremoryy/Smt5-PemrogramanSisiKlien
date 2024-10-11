// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// Setiap satu file jsx harus punya 1 komponen utama(function)
// Komponen Utama
// 1 komponen harus 1 return
import './App.css'

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
  return <div>Main</div>;
}

function Footer() {
  return <div>Footer</div>;
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