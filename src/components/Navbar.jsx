function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <img src="../assets/logo3.png" className="nav-logo" />
        <h2>CrunchKart</h2>
      </div>

      {/* RIGHT */}
      <ul>
        <li><button onClick={() => showSection('home')}>Home</button></li>
        <li><button onClick={() => showSection('about')}>About</button></li>
        <li><button onClick={() => showSection('products')}>Products</button></li>
        <li><button onClick={() => showSection('services')}>Services</button></li>
        <li><button onClick={() => showSection('contact')}>Contact</button></li>
      </ul>

    </nav>
  );
}

export default Navbar;