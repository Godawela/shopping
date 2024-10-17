import React from "react";
import logoImage from '../assets/logo.png';


const Header = () => {
  return (
    <header className="header">
      <img src={logoImage} alt="Logo" className="logo" />
      <h1>Shop iT</h1>

      <ul className="nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Cart</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Register</a></li>
      </ul>
    </header>

   
  );
};

export default Header;
