import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard';
import InventoryList from './Components/InventoryList';
import ItemDetail from './Components/ItemDetail';
import AddItem from './Components/AddItem';
import './index.css';

function App() {
  const [inventoryData, setInventoryData] = useState([
    { id: 1, name: "Laptop", category: "Elektronik", stock: 12, price: 12000000 },
    { id: 2, name: "Kursi Gaming", category: "Furniture", stock: 5, price: 1500000 },
    { id: 3, name: "Headset", category: "Elektronik", stock: 20, price: 300000 },
    { id: 4, name: "Keyboard Mekanik", category: "Aksesoris", stock: 10, price: 800000 },
    { id: 5, name: "Meja Belajar", category: "Furniture", stock: 7, price: 2000000 },
  ]);

  const handleAddItem = (newItem) => {
    setInventoryData(prevData => [...prevData, newItem]);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory-list" element={<InventoryList inventoryData={inventoryData} />} />
            <Route path="/item-detail/:id" element={<ItemDetail />} />
            <Route path="/add-item" element={<AddItem onAddItem={handleAddItem} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
