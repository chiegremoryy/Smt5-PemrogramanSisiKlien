import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard';
import UserList from './Components/UserList';
import UserDetail from './Components/UserDetail';
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
            <Route path="/user-list" element={<UserList />} />
            <Route path="/user-detail/:id" element={<UserDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
