import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import Restaurant from './components/restaurant/Restaurant.jsx';
import Menu from './components/Menu.jsx';
import MenuItems from './components/MenuItems.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu_item" element={<MenuItems />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  // document.getElementById('root')
);