import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const userData = {
      name,
      email,
      phone,
      password,
    };

    localStorage.setItem('user', JSON.stringify(userData));
    alert('Registration successful! You can now log in.');
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white ">
      <div className="w-full max-w-xs p-6 bg-primary rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Register</h2>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-black"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-black"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-black"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-black"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-black"
              placeholder="Confirm your password"
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
              required
              className="mr-2"
            />
            <label className="text-sm text-gray-600">
              I Accept <Link to="/terms" className="text-blue-600 underline">Terms And Conditions</Link>
            </label>
          </div>


          <button
            className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full ${acceptedTerms ? 'hover:bg-gray-100 dark:hover:bg-gray-700' : 'bg-gray-400 cursor-not-allowed'}`}
            disabled={!acceptedTerms}
          >
            Register
          </button>


          <Link to="/login">
            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600
           dark:focus:ring-gray-700 w-full">Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;




