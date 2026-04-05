import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + (item.price - item.discount) * item.qty,
    0
  );

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <section className="cart-page">

      <h1 className="cart-title">Your Shopping Cart</h1>

     {cart.length === 0 ? (
  <div className="empty-cart-box">

    <h2>Your Cart Feels Empty</h2>
    <p>Start adding delicious products to your cart.</p>

    <button
      className="shop-btn"
      onClick={() => navigate("/products")}
    >
      Browse Products
    </button>

  </div>
) : (
        <div className="cart-container">

          {/* LEFT SIDE */}
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-card" key={item.id}>

                <img src={item.img} alt={item.name} />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price - item.discount}</p>

                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <button className="remove-btn"
                    onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="cart-summary">
            <h2>Order Summary</h2>

            <p>Total Items: {cart.length}</p>
            <h3>Total: ₹{total}</h3>

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout", { state: { cart } })}
            >
              Proceed to Checkout
            </button>
          </div>

        </div>
      )}
    </section>
  );
}

export default Cart;