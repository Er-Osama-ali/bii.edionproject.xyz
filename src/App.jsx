import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Terms from './Components/Terms'
import Sidebar from './Pages/Sidebar';
import Logout from './Pages/Logout';
import './App.css'


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
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>

      </Router>
  </div>
  );
}

export default App;
