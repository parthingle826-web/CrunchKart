function About() {
  return (
    <section id="about">

      {/* 🌟 Header */}
      <div className="about-hero">
        <h1>About CrunchKart</h1>
        <p>Delivering Crunch, Freshness & Quality in Every Bite</p>
      </div>

      {/* 🍌 Our Story */}
      <div className="about-section">
        <h2>Our Story</h2>
        <p>
          CrunchKart was founded with a simple idea — to bring the authentic taste 
          of traditional banana chips to every home. We believe that snacks should 
          not only be delicious but also fresh and healthy.
        </p>
        <p>
          From selecting the finest raw bananas to perfectly slicing and frying them, 
          every step is handled with care and hygiene to ensure top quality.
        </p>
      </div>

      {/* 🎯 Mission & Vision */}
      <div className="about-mv">

        <div className="mv-box">
          <h3>🎯 Our Mission</h3>
          <p>
            To provide high-quality, hygienic, and tasty banana chips that bring 
            joy and satisfaction to every customer.
          </p>
        </div>

        <div className="mv-box">
          <h3>🚀 Our Vision</h3>
          <p>
            To become a trusted and leading brand in the snack industry, known for 
            quality, innovation, and customer happiness.
          </p>
        </div>

      </div>

      {/* ⭐ Why Choose Us */}
      <div className="about-section">
        <h2>Why Choose CrunchKart?</h2>

        <ul className="about-list">
          <li>✔ Premium Quality Bananas</li>
          <li>✔ 100% Hygienic Preparation</li>
          <li>✔ No Artificial Preservatives</li>
          <li>✔ Freshly Prepared Daily</li>
          <li>✔ Affordable & Delicious</li>
        </ul>
      </div>

      {/* 🏭 Process */}
      <div className="about-section">
        <h2>Our Process</h2>
        <p>
          We follow a clean and efficient process — from sourcing fresh bananas 
          directly from farms to carefully slicing and frying them using high-quality oil. 
          Each batch is tested to ensure crispiness and taste before reaching you.
        </p>
      </div>

      {/* 📞 CTA */}
      <div className="about-cta">
        <h2>Experience the Crunch!</h2>
        <p>Try our delicious banana chips today.</p>
        <button onClick={() => showSection('products')}>View Products</button>
      </div>

    </section>
  );
}

export default About;