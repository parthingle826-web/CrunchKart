import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  return (
    <section id="services">

      {/* Hero */}
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Delivering Quality, Consistency and Trust</p>
      </div>

      {/* Services Cards */}
      <div className="services-container">

        <div className="service-card">
          <h3>Fresh Production</h3>
          <p>
            Premium banana chips made from carefully selected raw bananas 
            with consistent taste and perfect crispiness.
          </p>
        </div>

        <div className="service-card">
          <h3>Bulk Orders</h3>
          <p>
            Cost-effective bulk supply for retailers, businesses, and events 
            with guaranteed quality.
          </p>
        </div>

        <div className="service-card">
          <h3>Fast Delivery</h3>
          <p>
            Quick and reliable delivery ensuring freshness and secure packaging.
          </p>
        </div>

        <div className="service-card">
          <h3>Wholesale Supply</h3>
          <p>
            Regular supply to shops and distributors with consistent availability.
          </p>
        </div>

        <div className="service-card">
          <h3>Custom Orders</h3>
          <p>
            Flexible quantity and packaging options for events and special needs.
          </p>
        </div>

        <div className="service-card">
          <h3>Quality Assurance</h3>
          <p>
            Strict hygiene standards and quality checks for every batch produced.
          </p>
        </div>

      </div>

      {/* Benefits */}
      <div className="services-benefits">
        <h2>Why Choose Us</h2>

        <ul>
          <li>High-quality ingredients</li>
          <li>Affordable pricing</li>
          <li>Reliable service</li>
          <li>Customer satisfaction focus</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="services-cta">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today and experience premium quality.</p>
        <button onClick={() => navigate("/contact")}>
          Contact Now
        </button>
      </div>

    </section>
  );
}

export default Services;