import React from 'react';

const HomePages = () => {

  const statusAktivitas = 'Aman kiing!';
  const news = [
    {
      id: 1,
      title: 'Erupsi Merapi: Kolom Abu Mencapai 5 Km',
      date: '11 Januari 2025',
      summary:
        'Gunung Merapi kembali mengalami erupsi pagi ini. Warga di radius 5 km dari puncak diminta untuk segera mengungsi.',
    },
    {
      id: 2,
      title: 'Lahar Dingin Ancam Pemukiman',
      date: '10 Januari 2025',
      summary:
        'Hujan deras memicu aliran lahar dingin di sungai-sungai yang berhulu di Merapi. Warga di sepanjang bantaran sungai diminta waspada.',
    },
    {
      id: 3,
      title: 'Status Merapi Naik Jadi Awas',
      date: '9 Januari 2025',
      summary:
        'PVMBG meningkatkan status Gunung Merapi dari Siaga menjadi Awas. Pendakian dilarang sementara hingga situasi kembali aman.',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <header className="bg-red-600 text-white p-6 rounded-lg mb-6 shadow-md">
        <h1 className="text-3xl font-bold">Pantauan Gunung Merapi</h1>
        <p className="text-lg mt-2">Informasi terkini seputar aktivitas dan berita Gunung Merapi</p>
      </header>

      <section className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Status Aktivitas</h2>
          <p
            className={`text-4xl font-bold ${
              statusAktivitas === 'Awas'
                ? 'text-red-600'
                : statusAktivitas === 'Siaga'
                ? 'text-yellow-600'
                : 'text-green-600'
            }`}
          >
            {statusAktivitas}
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Berita Terbaru</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.date}</p>
              <p className="text-gray-700">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePages;
