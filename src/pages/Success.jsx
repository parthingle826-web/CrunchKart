import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import logo from "../assets/logo3.png";
function Success() {
  const { state } = useLocation();

  // prevent crash if user refreshes page
  const product = state?.product;
  const cart = state?.cart;
  const user = state?.user;

  useEffect(() => {
    if (!user) return;

    const orderDetails = product
      ? `${product.name} (Qty: ${user.qty})`
      : cart?.map(item => `${item.name} x${item.qty}`).join(", ");

    const totalAmount = product
      ? product.price - product.discount
      : cart?.reduce(
          (sum, item) =>
            sum + (item.price - item.discount) * item.qty,
          0
        );

    const templateParams = {
      user_name: user.name,
  user_email: user.email,
  user_mobile: user.mobile,
  user_address: user.address,

  product_name: product ? product.name : orderDetails,
 quantity: product
  ? user.qty || product.qty || 1
  : cart?.map(item => `${item.name} x${item.qty}`).join(", "),

  payment_method: user.payment
    };

    emailjs
      .send(
        "service_rody4ur",     // 🔁 replace
        "template_bs5kpzm",    // 🔁 replace
        templateParams,
        "BvVhgddScY5deg4DF"      // 🔁 replace
      )
      .then(() => console.log("Email sent successfully"))
      .catch(err => console.log(err));

  }, [user, product, cart]);

  return (
    <section className="success">

      <div className="success-card">

        {/* SUCCESS ICON */}
        <div className="tick">✔</div>

        <h2>Order Confirmed</h2>
        <p className="success-msg">
          Your order has been placed successfully.
        </p>

        {/* LOGO */}
        <img src={logo} className="receipt-logo" alt="logo" />

        {/* USER DETAILS */}
        <div className="receipt-box">
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Mobile:</strong> {user?.mobile}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Address:</strong> {user?.address}</p>
        </div>

        <hr />

        {/* ORDER DETAILS */}
        <div className="receipt-box">
          {product && (
            <>
              <h3>{product.name}</h3>
              <p>Quantity: {user?.qty || product.qty || 1}</p>
            </>
          )}

          {cart && cart.map(item => (
            <p key={item.id}>
              {item.name} × {item.qty}
            </p>
          ))}

        <p>
  <strong>Payment:</strong>{" "}
  {user?.payment === "upi"
    ? "UPI"
    : user?.payment === "cod"
    ? "Cash on Delivery"
    : user?.payment === "card"
    ? "Card Payment"
    : user?.payment}
</p>
        </div>

      </div>

    </section>
  );
}

export default Success;