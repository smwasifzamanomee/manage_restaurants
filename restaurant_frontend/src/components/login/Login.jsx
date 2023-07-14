import React, { useState } from 'react';
import { BASE_URL } from '../../../config/config';
import Menu from '../Menu';

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

        console.log('Login successful');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Login</button>
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
        <div>
          <h2>Login</h2>
          <LoginForm />
        </div>
      ) : (
        <div>
          <Menu/>
        </div>
      )}
    </div>
  );
};

export default Login;
