import { Link } from "react-router-dom";


function About() {
  return (
    <section id="about">

      {/* Hero */}
      <div className="about-hero">
        <h1>About CrunchKart</h1>
        <p>Crafting Quality Snacks with Consistency and Care</p>
      </div>

      {/* Brand Intro */}
      <div className="about-container">

        <div className="about-card">
          <h2>Who We Are</h2>
          <p>
            CrunchKart is a growing snack brand focused on delivering high-quality 
            banana chips with consistent taste and freshness. We combine traditional 
            preparation methods with modern hygiene standards to ensure every product 
            meets premium expectations.
          </p>
        </div>

        <div className="about-card">
         

          <h2>Our Products</h2>
          <p>
            Our range includes classic salted chips, spicy variants, and customized 
            flavors. Each product is prepared using carefully selected bananas and 
            processed to maintain natural taste and crisp texture.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Approach</h2>
          <p>
            From sourcing raw materials to final packaging, every stage is handled 
            with strict quality control. We focus on consistency, hygiene, and 
            customer satisfaction in every batch we produce.
          </p>
        </div>

      </div>

      {/* Timeline */}
      <div className="about-timeline">
        <h2>Our Journey</h2>

        <div className="timeline">
          <div className="timeline-item">
            <span>2024</span>
            <p>Brand concept and product research initiated.</p>
          </div>

          <div className="timeline-item">
            <span>2025</span>
            <p>Production started with focus on quality and local distribution.</p>
          </div>

          <div className="timeline-item">
            <span>2026</span>
            <p>Expansion into online platform and wider customer reach.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
     <div className="about-cta">
  <h2>Experience the Quality</h2>
  <p>Explore our products and discover the perfect crunch.</p>

  <Link to="/products">
    <button>View Products</button>
  </Link>

</div>

    </section>
  );
}

export default About;