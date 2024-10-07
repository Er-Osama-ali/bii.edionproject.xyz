import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Terms from './Components/Terms'
import Advertisement from './Pages/Advertisement';



function App() {
 

  return (
    <div>
    
      <Router>


      <Navbar />
      
      
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/advertisement" element={<Advertisement />} />
         

        </Routes>

      </Router>
  </div>
  );
}

export default App;
