import React, { createContext, useState } from "react";

// Create the context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  // Example cart state
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};