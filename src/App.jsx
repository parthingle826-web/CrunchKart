import { useState, useEffect } from "react";
import AppRouter from "./router.jsx";
import { startAnimation } from "./animation.js";
import Navbar from "./components/Navbar.jsx"; // ✅ ADD

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    startAnimation();
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="splash-screen">
          <canvas id="stars"></canvas>
          <div className="logo-container">
            <img src="/logo3.png" alt="Brand Logo" className="logo" />
            <h1 className="brand-name">CrunchKart</h1>
          </div>
        </div>
      ) : (
        <>
          <AppRouter />
        </>
      )}
    </>
  );
}

export default App;
