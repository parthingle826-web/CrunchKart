import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="logo" className="nav-logo" />
      </div>

      {/* Hamburger */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/cart" onClick={() => setMenuOpen(false)}>My Account</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;