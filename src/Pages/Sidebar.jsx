import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="flex h-screen mt-5"> 
      {/* Sidebar */}
      <div className="w-64 h-full bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-2 text-center">Vendor Dashboard</h2>
        <br /> 
        <ul className="space-y-2">
          <li>
            <button 
              onClick={() => handleNavigation('/dashboard')} 
              className="w-full text-left py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200"
            >
              Dashboard
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavigation('/business-profile')} 
              className="w-full text-left py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200"
            >
              Business Profile
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavigation('/order-history')} 
              className="w-full text-left py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200"
            >
              Order History
            </button>
          </li>
          <li>
          <Link to="/adstatistics">
            <button 
              onClick={() => handleNavigation('/ads-statistics')} 
              className="w-full text-left py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200"
            >
              Ads Statistics
            </button>
            </Link>
          </li>
          <li>
            <button 
              onClick={() => handleNavigation('/sell-blocks')} 
              className="w-full text-left py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200"
            >
              Sell Blocks
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavigation('/raise-a-concern')} 
              className="w-full text-left py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200"
            >
              Raise A Concern
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavigation('/logout')} 
              className="w-full text-left py-2 px-4 bg-red-500 hover:bg-red-600 rounded-lg transition duration-200"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default Sidebar;
