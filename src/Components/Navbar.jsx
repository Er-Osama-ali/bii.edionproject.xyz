// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';

// const Navbar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');

//   const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai'];

//   const handleSearch = () => {
//     console.log(`Searching for: ${searchTerm} in ${selectedCity}`);
   
//   };

//   return (
//     <nav className="flex justify-between items-center p-6 bg-ali text-white shadow-md">
//       <Link to="/">
//         <div className="flex items-center">
//           <img src={logo} alt="Logo" className="h-8 pl-32" />
//         </div>
//       </Link>

//       <div className="flex flex-grow justify-center space-x-4">

//         {/* Combined Search Bars */}
//         <div className="flex flex-col items-center">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder="Search..."
//             className="border border-gray-300 p-2 rounded-md mb-2 w-80"
//           />
//           <select
//             value={selectedCity}
//             onChange={(e) => setSelectedCity(e.target.value)}
//             className="border border-gray-300 p-2 rounded-md mb-2 w-80"
//           >
//             <option value="" disabled>Select a city</option>
//             {cities.map((city) => (
//               <option key={city} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>
//           <button
//             onClick={handleSearch}
//             className="bg-blue-500 text-white p-2 rounded-md w-80"
//           >
//             Search
//           </button>
//         </div>

//         <div className="relative max-w-md w-full">
//           <input
//             type="text"
//             placeholder="What are you looking for?"
//             className="w-full py-4 px-4 bg-ali text-black outline-none pl-4"
//           />
//           <hr className="absolute inset-x-0 bottom-0 border-t-2 border-primary w-3/4 mx-auto" />
//         </div>

//       </div>

//       <div className="flex space-x-4 pr-32">
//         <Link to="/login">
//           <button className="bg-primary hover:bg-nav text-black py-2 px-4 rounded 
//         shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out">
//             Login
//           </button>
//         </Link>
//         <Link to="/advertisement">
//           <button className="bg-primary hover:bg-nav text-black py-2 px-4 rounded 
//         shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out">
//             Buy
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


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

