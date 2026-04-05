import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section id="home">

      {/* Hero Section */}
      <div className="hero">

        {/* LEFT */}
        <div className="hero-text">
          <h1>CrunchKart</h1>
          <h2>Premium Banana Chips</h2>

          <p>
            Experience high-quality banana chips crafted from carefully selected 
            fresh bananas. We ensure consistency, hygiene, and superior taste 
            in every batch, delivering a perfect balance of crunch and flavor.
          </p>

          <button onClick={() => navigate("/products")}>
            Shop Now
          </button>
        </div>

        {/* RIGHT (LOGO FOCUS) */}
        <div className="hero-image">
          <img src="/logo3.png" alt="CrunchKart Logo" />
        </div>

      </div>

      {/* About Preview */}
      <div className="home-about">
        <h2>Why Choose CrunchKart</h2>
        <p>
          We focus on premium ingredients, precise preparation, and strict quality 
          standards to deliver a reliable snacking experience. Our products are 
          designed to meet modern expectations while preserving authentic taste.
        </p>
      </div>

      {/* Features */}
      <div className="features">
        <div className="feature-box">
          <h3>Premium Quality</h3>
          <p>Carefully selected bananas for superior taste.</p>
        </div>

        <div className="feature-box">
          <h3>Fresh Production</h3>
          <p>Prepared regularly to ensure freshness.</p>
        </div>

        <div className="feature-box">
          <h3>Reliable Delivery</h3>
          <p>Quick and safe delivery service.</p>
        </div>
      </div>

      {/* Products Preview */}
      <div className="home-products">
        <h2>Popular Products</h2>

        <div className="product-card">
          <h3>Classic Salted</h3>
          <p>Balanced flavor with perfect crispiness.</p>
        </div>

        <div className="product-card">
          <h3>Spicy Masala</h3>
          <p>Bold spices for a rich taste experience.</p>
        </div>

        <div className="product-card">
          <h3>Sweet Chips</h3>
          <p>Light sweetness with crunchy texture.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2>Discover the Perfect Crunch</h2>
        <button onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </div>

    </section>
  );
}

export default Home;