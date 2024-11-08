import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard';
import MenuList from './Components/MenuList';
import MenuItemDetail from './Components/MenuItemDetail';
import './index.css'; 

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/menu-list" element={<MenuList />} />
            <Route path="/menu-detail/:id" element={<MenuItemDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
