import React, { useState } from 'react';
import Button from '../../Components/Button';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      onLogin();
    } else {
      alert('Username atau Password salah');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
            />
          </div>
          <div className="mt-6">
            <Button style="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md" text="Login" onClick={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
