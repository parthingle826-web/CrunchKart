<img src="/bananawafer.jpg" alt="Banana Chips" />;
function Home() {
  return (
    <section id="home">
      {/* 🌟 Hero Section */}
      <div className="hero">
        {/* LEFT SIDE */}
        <div className="hero-text">
          <h1>Welcome to CrunchKart</h1>
          <p>Fresh • Crispy • Delicious Banana Chips</p>

          <p>
            Experience the authentic taste of premium banana wafers made from
            handpicked bananas. Perfect crunch in every bite!
          </p>

          <button>Shop Now</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-image">
          <img src="/BananaWafer.jpg" alt="Banana Chips" />
        </div>
      </div>

      {/* 🍌 About Preview */}
      <div className="home-about">
        <h2>Why CrunchKart?</h2>
        <p>
          At CrunchKart, we bring you the finest quality banana chips made from
          carefully selected fresh bananas. Our wafers are hygienically
          prepared, perfectly sliced, and fried to golden perfection.
        </p>
      </div>

      {/* ⭐ Features */}
      <div className="features">
        <div className="feature-box">
          <h3>🌿 100% Natural</h3>
          <p>No preservatives, just pure banana goodness.</p>
        </div>

        <div className="feature-box">
          <h3>🔥 Freshly Made</h3>
          <p>Prepared daily for maximum freshness.</p>
        </div>

        <div className="feature-box">
          <h3>🚚 Fast Delivery</h3>
          <p>Quick delivery to your doorstep.</p>
        </div>
      </div>

      {/* 🛒 Products Preview */}
      <div className="home-products">
        <h2>Our Popular Products</h2>

        <div className="product-card">
          <h3>Classic Salted Chips</h3>
          <p>Perfectly salted crispy banana wafers.</p>
        </div>

        <div className="product-card">
          <h3>Spicy Masala Chips</h3>
          <p>A spicy twist for bold snack lovers.</p>
        </div>

        <div className="product-card">
          <h3>Sweet Banana Chips</h3>
          <p>Lightly sweetened delight.</p>
        </div>
      </div>

      {/* 📞 CTA */}
      <div className="cta">
        <h2>Craving Something Crunchy?</h2>
        <button>Contact Us</button>
      </div>
    </section>
  );
}

export default Home;
