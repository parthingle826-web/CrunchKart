import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <AppRouter />
    </CartProvider>
  </React.StrictMode>,
);
