import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-ali text-white shadow-md">
      <Link to="/">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 pl-32" />
        </div>
      </Link>


      <div className="flex flex-grow justify-center">
  <div className="relative max-w-md w-full">
    <input 
      type="text" 
      placeholder="What are you looking for?" 
      className="w-full py-4 px-4 bg-ali text-black outline-none pl-44" 
    />
    
    <hr className="absolute inset-x-0 bottom-0 border-t-2 border-primary w-3/4 mx-auto" />
  </div>
</div>






      <div className="flex space-x-4 pr-32">
        <Link to="/login">
          <button className="bg-primary hover:bg-nav text-black py-2 px-4 rounded 
          shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out">
            Login
          </button>
        </Link>
        <Link to="/advertisement">

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


