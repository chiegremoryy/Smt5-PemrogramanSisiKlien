import { useLocation, useNavigate } from 'react-router-dom';

function UserDetail() {
  const location = useLocation();
  const user = location.state?.user;
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/user-list');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-16"> {/* Menambahkan margin-top */}
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">{user.name}</h2>
          <p className="text-lg text-gray-600 mb-6">{user.description}</p>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-lg text-gray-700 font-medium">NIM: </p>
              <p className="text-lg text-gray-700">{user.nim}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-gray-700 font-medium">Program Studi: </p>
              <p className="text-lg text-gray-700">{user.prodi}</p>
            </div>
          </div>
          <hr className="my-6 border-gray-200" />
          <div className="text-center">
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
              onClick={handleBackClick}
            >
              User List
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">Pengguna tidak ditemukan</p>
      )}
    </div>
  );
}

export default UserDetail;
