import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NewsPages = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://psk-uas.vercel.app/api/news', {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkMWNhYTdkLWNkZmMtNDY1ZC1hYzA3LTc3MGQzNjVmYWExMyIsIm5hbWEiOiJDaGllIEdyZW1vcnl5eSIsImVtYWlsIjoiY2hpZWdyZW1vcnl5eUBnbWFpbC5jb20iLCJpYXQiOjE3MzY2MTE3MjYsImV4cCI6MTczNzIxNjUyNn0.JGduTCVjxLKPd1TxpteyZjOkTaKYh0K3ekRgtLvsA5U`,
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

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-gray-600 dark:text-white text-center mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Laporan Aktivitas Gunung Merapi 
      </h1>
      <div className="space-y-8">
        {error ? (
          <div className="text-red-500 text-center">Error fetching data: {error.message}</div>
        ) : (
          data.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {item.nama_gunung} - {item.status_gunung}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{new Date(item.created_at).toLocaleDateString()} | {item.periode}</p>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4">{item.desc_report}</p>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                <strong>Pengamatan Visual:</strong> {item.pengamatan_visual}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                <strong>Gempa Visual:</strong> {item.gempa_visual}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                <strong>Klimatologi Visual:</strong> {item.klimatologi_visual}
              </p>
              <Link
                to={`/user/news/${item.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Baca Selengkapnya
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsPages;
