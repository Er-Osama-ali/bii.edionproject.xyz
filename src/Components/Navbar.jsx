
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-ali text-white shadow-md"> 
       <Link to="/">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      </Link>
      
      <div className="flex space-x-4">
        <Link to="/login">
          <button className="bg-primary hover:bg-nav text-black py-2 px-4 rounded 
          shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out">
            Login
          </button>
        </Link>
        <Link to="/sidebar">
        <button className="bg-primary hover:bg-nav text-black py-2 px-4 rounded 
        shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out">
          Buy
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 


