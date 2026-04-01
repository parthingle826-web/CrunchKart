// src/router.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Card from "./components/Card.jsx";

function AppRouter({ cart }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card" element={<Card card={card} />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;