function Services() {
  return (
    <section id="services">

      {/* 🌟 Header */}
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Delivering Quality, Taste & Trust</p>
      </div>

      {/* 🛒 Services List */}
      <div className="services-container">

        <div className="service-card">
          <h3>🍌 Fresh Banana Chips Production</h3>
          <p>
            We manufacture high-quality banana chips using fresh, carefully 
            selected bananas to ensure the best taste and crunch.
          </p>
        </div>

        <div className="service-card">
          <h3>📦 Bulk Orders</h3>
          <p>
            We provide bulk supply for shops, retailers, and events at 
            affordable pricing with consistent quality.
          </p>
        </div>

        <div className="service-card">
          <h3>🚚 Fast Delivery</h3>
          <p>
            Get your favorite snacks delivered quickly and safely to your 
            doorstep with our reliable delivery service.
          </p>
        </div>

        <div className="service-card">
          <h3>🏪 Retail & Wholesale Supply</h3>
          <p>
            We supply our products to local stores and businesses, ensuring 
            fresh stock and timely delivery.
          </p>
        </div>

        <div className="service-card">
          <h3>🎉 Custom Orders for Events</h3>
          <p>
            Order customized quantities for parties, functions, and events 
            with special packaging options.
          </p>
        </div>

        <div className="service-card">
          <h3>🌿 Quality Assurance</h3>
          <p>
            We follow strict hygiene and quality checks to deliver safe and 
            delicious snacks every time.
          </p>
        </div>

      </div>

      {/* ⭐ Why Our Services */}
      <div className="services-benefits">
        <h2>Why Choose Our Services?</h2>

        <ul>
          <li>✔ Fresh & Hygienic Preparation</li>
          <li>✔ Affordable Pricing</li>
          <li>✔ Trusted by Customers</li>
          <li>✔ Quick & Reliable Delivery</li>
        </ul>
      </div>

      {/* 📞 CTA */}
      <div className="services-cta">
        <h2>Ready to Order?</h2>
        <p>Get in touch with us and enjoy the crunch!</p>
        <button onClick={() => showSection('contact')}>Contact Us</button>
      </div>

    </section>
  );
}

export default Services;