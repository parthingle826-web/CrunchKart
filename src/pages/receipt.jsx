import logo from "./assets/logo3.png";

function Receipt({ cart, user }) {

  const total = cart.reduce((sum, item) =>
    sum + (item.price - item.discount) * item.qty, 0);

  return (
    <div className="receipt">

      {/* 🏷 Logo */}
      <div className="receipt-header">
        <img src={logo} alt="logo" />
        <h2>CrunchKart</h2>
      </div>

      {/* 👤 User Info */}
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Mobile:</strong> {user.mobile}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong> {user.address}</p>

      {/* 🛒 Products */}
      <h3>Products</h3>
      {cart.map(item => (
        <p key={item.id}>
          {item.name} x {item.qty}
        </p>
      ))}

      <h2>Total Paid: ₹{total}</h2>

      <p>Payment Status: ✅ Success</p>

    </div>
  );
}

export default Receipt;