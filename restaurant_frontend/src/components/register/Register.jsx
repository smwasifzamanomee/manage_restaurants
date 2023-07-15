import React, { useState } from 'react';
import { BASE_URL } from '../../../config/config';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigation = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('owner');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "email": email,
        "password": password,
        "user_type": role,
      }),
    };

    fetch(BASE_URL + 'api/user/register/', options)
      .then((response) => response.json())
      .then((response) =>
        console.log(response),
        setEmail(''),
        setPassword(''),
        setRole('owner'),
        navigation('/')
      )
      .catch ((err) => console.error(err));

    
  };

return (
  <div className="max-w-md mx-auto mt-20">
    <h1 className="text-3xl font-bold mb-4 text-center">Register</h1>
    <form onSubmit={handleSubmit}>
      <label className="block mb-4">
        <span className="text-gray-700">Email:</span>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Password:</span>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Role:</span>
        <select
          value={role}
          onChange={handleRoleChange}
          className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="employee">Employee</option>
          <option value="owner">Owner</option>
        </select>
      </label>
      <button
        type="submit"
        className="block w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Register
      </button>
    </form>
  </div>
);
};

export default Register;
