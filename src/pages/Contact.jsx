import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <section id="contact">

      {/* Hero */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
      </div>

      {/* Main Container */}
      <div className="contact-container">

        {/* Form */}
        <div className="contact-form">
          <h2>Send Message</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Mobile Number" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Info */}
        <div className="contact-info">
          <h2>Contact Information</h2>

          <p><strong>Email:</strong> crunchkart@gmail.com</p>
          <p><strong>Phone:</strong> +91 6263579995</p>
          <p>
            <strong>Location:</strong><br />
            Jaymala Nagar,Lane No.01 Near SP Classes Old Sangvi,<br />
            Pune, Maharashtra, India
          </p>
          
        </div>

        

      </div>

      {/* Quick Links */}
      <div className="contact-links">
        <h2>Quick Navigation</h2>

        <div className="links">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/products")}>Products</button>
          <button onClick={() => navigate("/services")}>Services</button>
        </div>
      </div>

    </section>
  );
}

export default Contact;