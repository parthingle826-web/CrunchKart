import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";

function Cart() {
  const { cart } = useContext(CartContext);
  const [user, setUser] = useState({ name: "", mobile: "", email: "", address: "" });

  const total = cart.reduce((sum, item) => sum + (item.price - item.discount) * item.qty, 0);

  return (
    <section>
      <h1>🛒 Your Cart</h1>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Qty: {item.qty}</p>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      <div>
        <h2>Delivery Details</h2>
        <input placeholder="Name" onChange={e => setUser({ ...user, name: e.target.value })} />
        <input placeholder="Mobile" onChange={e => setUser({ ...user, mobile: e.target.value })} />
        <input placeholder="Email" onChange={e => setUser({ ...user, email: e.target.value })} />
        <textarea placeholder="Address" onChange={e => setUser({ ...user, address: e.target.value })} />
        <button onClick={() => alert("Payment Successful!")}>Pay Now</button>
      </div>
    </section>
  );
}

export default Cart;