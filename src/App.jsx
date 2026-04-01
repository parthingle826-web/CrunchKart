import { useState, useEffect } from "react";
import AppRouter from "./router.jsx";
import { startAnimation } from "./animation.js"; // your star animation

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [cart, setCart] = useState([]); // your cart state

  useEffect(() => {
    // Splash screen timer
    const timer = setTimeout(() => setShowSplash(false), 3000);
    startAnimation(); // start canvas animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="splash-screen">
          <canvas id="stars"></canvas>
          <div className="logo-container">
            <img src="../logo3.png" alt="Brand Logo" className="logo" />
            <h1 className="brand-name">CrunchKart</h1>
          </div>
        </div>
      ) : (
        <AppRouter Card={card} /> // pass cart to router
      )}
    </>
  );
}

export default App;