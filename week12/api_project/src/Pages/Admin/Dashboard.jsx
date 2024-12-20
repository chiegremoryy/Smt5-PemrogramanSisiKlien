import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold">250</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Active Students</h2>
          <p className="text-3xl font-bold">150</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">New Registrations</h2>
          <p className="text-3xl font-bold">35</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2 px-4 text-left">Activity</th>
              <th className="border-b py-2 px-4 text-left">Date</th>
              <th className="border-b py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b py-2 px-4">New student registration</td>
              <td className="border-b py-2 px-4">Dec 18, 2024</td>
              <td className="border-b py-2 px-4 text-green-600">Completed</td>
            </tr>
            <tr>
              <td className="border-b py-2 px-4">Updated course material</td>
              <td className="border-b py-2 px-4">Dec 17, 2024</td>
              <td className="border-b py-2 px-4 text-yellow-600">In Progress</td>
            </tr>
            <tr>
              <td className="border-b py-2 px-4">Scheduled maintenance</td>
              <td className="border-b py-2 px-4">Dec 16, 2024</td>
              <td className="border-b py-2 px-4 text-red-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
