import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const product = state?.product;
  const cart = state?.cart;

  // ✅ Quantity state (important)
  const [qty, setQty] = useState(product?.qty || 1);

  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    payment: "cod"
  });

  // ✅ Dynamic total calculation
  const total = product
    ? (product.price - product.discount) * qty
    : cart?.reduce(
        (sum, item) =>
          sum + (item.price - item.discount) * item.qty,
        0
      );

  // ✅ Place order with qty
  const handleOrder = () => {
    navigate("/success", {
      state: {
        product,
        cart,
        user: { ...user, qty } // ✅ send qty
      }
    });
  };

  return (
    <section className="checkout-page">

      <h1>Secure Checkout</h1>

      <div className="checkout-layout">

        {/* LEFT SIDE */}
        <div className="checkout-form">

          <h2>Delivery Details</h2>

          <input
            placeholder="Full Name"
            onChange={e => setUser({ ...user, name: e.target.value })}
          />

          <input
            placeholder="Mobile Number"
            onChange={e => setUser({ ...user, mobile: e.target.value })}
          />

          <input
            placeholder="Email Address"
            onChange={e => setUser({ ...user, email: e.target.value })}
          />

          <textarea
            placeholder="Full Address"
            onChange={e => setUser({ ...user, address: e.target.value })}
          />

          <h3>Payment Method</h3>

          <select
            onChange={e => setUser({ ...user, payment: e.target.value })}
          >
            <option value="cod">Cash on Delivery</option>
            <option value="upi">UPI</option>
            <option value="card">Credit/Debit Card</option>
          </select>

        </div>

        {/* RIGHT SIDE */}
        <div className="checkout-summary">

          <h2>Order Summary</h2>

          {/* ✅ BUY NOW PRODUCT */}
          {product && (
            <>
              <p>{product.name}</p>

              {/* ✅ Quantity Control UI */}
              <div className="qty-box">
                <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </>
          )}

          {/* CART ITEMS */}
          {cart && cart.map(item => (
            <p key={item.id}>
              {item.name} × {item.qty}
            </p>
          ))}

          <h3>Total: ₹{total}</h3>

          <button className="order-btn" onClick={handleOrder}>
            Place Order
          </button>

        </div>

      </div>

    </section>
  );
}

export default Checkout;