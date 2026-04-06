import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";   // ✅ ADD THIS
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* <img src="../assets/logo3.png" className="nav-logo" alt="logo" />  */}
         {/* <h2 className="brand-name">CrunchKart</h2> */}
           <img src={logo} className="nav-logo" alt="logo" />

      </div>
{/* Hamburger Icon */}
    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>  

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
