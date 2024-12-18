import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Mahasiswa = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error(error); 
        setError(error); 
      }
    };
    getData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">List Mahasiswa</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md mb-6">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2 px-4 text-left">ID</th>
              <th className="border-b py-2 px-4 text-left">Nama</th>
              <th className="border-b py-2 px-4 text-left">Alamat</th>
            </tr>
          </thead>
          <tbody>
            {error ? (
              <tr>
                <td colSpan="3" className="text-red-500 text-center py-4">
                  Error fetching data: {error.message}
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border-b py-2 px-4">{index + 1}</td>
                  <td className="border-b py-2 px-4">{item.title}</td>
                  <td className="border-b py-2 px-4">{item.body}</td>
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
