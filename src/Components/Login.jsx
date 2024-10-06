
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      setErrorMessage('Please register first before logging in.');
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      alert('Login successful!');
      navigate('/'); // Redirect to Home page on successful login
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-full max-w-xs p-6 bg-primary rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>

        {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
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
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
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

          <button type="submit" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-full">
            Login
          </button>

          <Link to="/register">
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-full">
              Register
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;



