import { useState } from "react";
import img1 from "../assets/products/oip.jpg";
import img2 from "../assets/products/balajiwafer05.webp";
import img3 from "../assets/products/wafers.jpg";

function Products() {

  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Classic Banana Chips", price: 100, discount: 20, img: img1 },
    { id: 2, name: "Balaji Wafer Special", price: 120, discount: 15, img: img2 },
    { id: 3, name: "Premium Crunch Chips", price: 150, discount: 25, img: img3 }
  ];
const addToCart = (product) => {
  const exist = cart.find(item => item.id === product.id);
  if (exist) {
    setCart(cart.map(item =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    ));
  } else {
    setCart([...cart, { ...product, qty: 1 }]);
  }
};

  return (
    <section id="products">

      <h1>Our Products</h1>

      <div className="product-grid">
        {products.map(p => (
          <div className="product-card" key={p.id}>
            <img src={p.img} alt={p.name} />

            <h3>{p.name}</h3>

            <p>
              ₹{p.price - p.discount}
              <span className="old-price">₹{p.price}</span>
            </p>

            <button onClick={() => addToCard(p)}>
              Add to Card
            </button>

            <p className="review">⭐⭐⭐⭐☆ (120 reviews)</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Products;