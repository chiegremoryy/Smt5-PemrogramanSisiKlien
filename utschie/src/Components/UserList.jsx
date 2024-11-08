import { useState } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  const [menuData] = useState([
    { id: 1, name: "Mikasa Ackerman", nim: "A11.2022.12345", prodi: "Tehnik Elektro" },
    { id: 2, name: "Vincent", nim: "A11.2022.01735", prodi: "DKV" },
    { id: 3, name: "Cid Kageno", nim: "A11.2022.10845", prodi: "TI" },
    { id: 4, name: "Chie Gremoryyy", nim: "A11.2022.18365", prodi: "SI" },
    { id: 5, name: "Fufufafa", nim: "A11.2022.34789", prodi: "Kedokteran" },
    
  ]);

  return (
    <div className="w-full min-h-screen bg-blue-50 flex justify-center items-start pt-12 mt-16">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Daftar User</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-4 font-semibold text-gray-700 border-b border-gray-300">Nama</th>
              <th className="p-4 font-semibold text-gray-700 border-b border-gray-300">NIM</th>
              <th className="p-4 font-semibold text-gray-700 border-b border-gray-300">Prodi</th>
            </tr>
          </thead>
          <tbody>
            {menuData.map(user => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="p-4 border-b border-gray-300">
                  <Link 
                    to={`/user-detail/${user.id}`}
                    state={{ user: user }}
                    className="text-gray-600 hover:underline"
                  >
                    {user.name}
                  </Link>
                </td>
                <td className="p-4 border-b border-gray-300 text-gray-700">{user.nim}</td>
                <td className="p-4 border-b border-gray-300 text-gray-700">{user.prodi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
