import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineAppstore, AiOutlinePlus } from 'react-icons/ai';

function Sidebar() {
  return (
    <div className="w-48 bg-gray-200 h-screen flex flex-col pt-8 mt-16">
      <ul className="space-y-4">
        <li className="pl-6">
          <Link to="/" className="flex items-center text-gray-800">
            <AiOutlineHome className="mr-2 text-lg" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="pl-6">
          <Link to="/inventory-list" className="flex items-center text-gray-800">
            <AiOutlineAppstore className="mr-2 text-lg" />
            <span>Inventory List</span>
          </Link>
        </li>
        <li className="pl-6">
          <Link to="/add-item" className="flex items-center text-gray-800">
            <AiOutlinePlus className="mr-2 text-lg" />
            <span>Add Item</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
