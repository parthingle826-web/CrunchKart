function Footer() {
  return (
    <footer className="footer">

      <h2>🍌 CrunchKart</h2>
      <p>Fresh • Crispy • Delicious Banana Chips</p>

      <div className="footer-links">
        <button onClick={() => showSection('home')}>Home</button>
        <button onClick={() => showSection('about')}>About</button>
        <button onClick={() => showSection('products')}>Products</button>
        <button onClick={() => showSection('services')}>Services</button>
        <button onClick={() => showSection('contact')}>Contact</button>
      </div>

      <p>© 2026 CrunchKart. All Rights Reserved.</p>

    </footer>
  );
}

export default Footer;