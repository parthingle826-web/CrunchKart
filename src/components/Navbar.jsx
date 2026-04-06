import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/logo3.png" className="nav-logo" alt="logo" /> {/* ✅ */}
         {/* <h2 className="brand-name">CrunchKart</h2> */}
            
     
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
  <Link to="/cart">My Account</Link>
</li>
      </ul>
    </nav>
  );
}



export default Navbar;
