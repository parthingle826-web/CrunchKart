import React, { createContext, useState } from "react";

// Create the context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  // Example cart state
  const [cart, setCart] = useState([
    { id: 1, name: "Banana Chips", price: 50, discount: 5, qty: 2 },
    { id: 2, name: "Balaji Wafers", price: 40, discount: 0, qty: 3 },
  ]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};