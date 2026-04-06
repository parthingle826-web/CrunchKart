import { Link } from "react-router-dom";
import { FaInstagram, FaTelegram, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo3.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* 🔹 LEFT - BRAND */}
        <div className="footer-brand">
          <img src={logo} className="footer-logo" alt="logo" />
          <h2>CrunchKart</h2>
          <p>Fresh • Crispy • Delicious Banana Chips</p>
          <br /><p>Jaimala Nagar Lane No.01 Near SP Classes,Old Sangvi,Pune,411005.</p>
        </div>

        {/* 🔹 CENTER - QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          {/* ❌ remove showSection → ✅ use Link */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* 🔹 RIGHT - CONTACT */}
        <div className="footer-contact">
          <h3>Connect</h3>

          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTelegram /></a>
            <a href="#"><FaEnvelope /></a>
          </div>

          
        </div>

      </div>

      {/* 🔻 BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 CrunchKart. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;