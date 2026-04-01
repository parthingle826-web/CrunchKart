function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <section id="contact">

      {/* 🌟 Header */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you!</p>
      </div>

      {/* 📦 Main Container */}
      <div className="contact-container">

        {/* 📝 Contact Form */}
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

        {/* 📞 Contact Info */}
        <div className="contact-info">
          <h2>Contact Information</h2>

          <p><strong>Email:</strong> support@crunchkart.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Location:</strong><br/>
            Jaymala Nagar, Old Sangvi,<br/>
            Pune, Maharashtra, India
          </p>
        </div>

      </div>

      {/* 🔗 Quick Links */}
      <div className="contact-links">
        <h2>Quick Links</h2>

        <div className="links">
          <button onClick={() => showSection('home')}>Home</button>
          <button onClick={() => showSection('about')}>About</button>
          <button onClick={() => showSection('products')}>Products</button>
          <button onClick={() => showSection('services')}>Services</button>
        </div>
      </div>

    </section>
  );
}

export default Contact;