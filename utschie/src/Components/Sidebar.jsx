import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineAppstore } from 'react-icons/ai';

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
          <Link to="/user-list" className="flex items-center text-gray-800">
            <AiOutlineAppstore className="mr-2 text-lg" />
            <span>User List</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
