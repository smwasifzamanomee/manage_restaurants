import React, { useState } from 'react';
import { BASE_URL } from '../../../config/config';
import Menu from '../Menu';
import { Link } from 'react-router-dom';
import Restaurant from '../restaurant/Restaurant';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Send login request to the API
    fetch(BASE_URL + 'api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        const { access: access, refresh: refresh } = data;

        // Save the access token and refresh token to localStorage
        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);

        // console.log('Login successful');

        window.location.reload();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleLogin} className="max-w-xs mx-auto">
      <label className="block mb-2">
        <span className="text-gray-700">Email:</span>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
        />
      </label>
      <label className="block mb-2">
        <span className="text-gray-700">Password:</span>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
        />
      </label>
      <button
        type="submit"
        className="block w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Login
      </button>
      <div className='text-center mt-2'>
        donot have an account? <Link 
        to='/register'
        >Register</Link>
      </div>
    </form>

  );
};

const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

const Login = () => {
  const accessToken = getAccessToken();

  return (
    <div>
      {!accessToken ? (
        <div className='mt-10'>
          <h1 className='text-center text-3xl font-bold'>Login</h1>
          <LoginForm />
        </div>
      ) : (
        <div>
          <button 
            onClick={() => {
              localStorage.removeItem('accessToken');
              localStorage.removeItem('refreshToken');
              window.location.reload();
            }}
           className='flex justify-between items-center'>Logout</button>
          <h1 className='text-center text-3xl font-bold'>Restaurant</h1>
          {/* <Menu /> */}
          <Restaurant/>
        </div>
      )}
    </div>
  );
};

export default Login;
