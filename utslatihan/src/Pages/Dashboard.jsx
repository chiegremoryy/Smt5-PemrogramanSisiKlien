import React from 'react';

function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 flex-1 max-w-full mt-16">
      <div className="bg-blue-100 rounded-lg p-8 h-full max-w-full shadow-lg">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">Dashboard Admin</h1>
        <p className="text-lg text-gray-700">
          Selamat datang di aplikasi Manajemen Menu Restoran! Gunakan menu di samping untuk menavigasi fitur aplikasi.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
