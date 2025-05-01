// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <h1 className="text-2xl font-bold">
        <Link to="/">Arizon Store</Link>
      </h1>
      <nav className="space-x-4">
        <Link to="/products" className="hover:underline">
          Products
        </Link>
        <Link to="/cart" className="hover:underline">
          Cart
        </Link>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </nav>
    </header>
  );
};

export default Header;
