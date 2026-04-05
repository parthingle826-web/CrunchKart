import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/products/oip.jpg";
import img2 from "../assets/products/balajiwafer05.webp";
import img3 from "../assets/products/bowlwafer.jpg";
import img4 from "../assets/products/chhedas-wafer.jpg";
import img5 from "../assets/products/chhedasbananawafer.jpg";
import img6 from "../assets/products/download.jpg";
import img7 from "../assets/products/images-(1).jpg";
import img8 from "../assets/products/images-(2).jpg";
import img9 from "../assets/products/images-(3).jpg";
import img10 from "../assets/products/images-(4).jpg";
import img11 from "../assets/products/images-(5).jpg";
import img12 from "../assets/products/images-(6).jpg";
import img13 from "../assets/products/images-(7).jpg";
import img14 from "../assets/products/images.jpg";
import img15 from "../assets/products/wafers.jpg";


function Products() {
  const { cart, setCart } = useContext(CartContext);

 const products = [
  { id: 1, name: "Classic Banana Chips", price: 100, discount: 20, img: img1 },
  { id: 2, name: "Balaji Wafer Special", price: 120, discount: 15, img: img2 },
  { id: 3, name: "Premium Crunch Chips", price: 150, discount: 25, img: img3 },
  { id: 4, name: "Cheda's Wafer", price: 130, discount: 10, img: img4 },
  { id: 5, name: "Cheda Banana Wafer", price: 140, discount: 18, img: img5 },
  { id: 6, name: "Crispy Banana Chips", price: 110, discount: 12, img: img6 },
  { id: 7, name: "Salted Wafer Pack", price: 90, discount: 8, img: img7 },
  { id: 8, name: "Spicy Chips Pack", price: 115, discount: 15, img: img8 },
  { id: 9, name: "Masala Crunch Chips", price: 135, discount: 20, img: img9 },
  { id: 10, name: "Golden Fried Chips", price: 125, discount: 10, img: img10 },
  { id: 11, name: "Premium Wafer Pack", price: 160, discount: 22, img: img11 },
  { id: 12, name: "Family Pack Chips", price: 180, discount: 30, img: img12 },
  { id: 13, name: "Crunchy Delight", price: 140, discount: 18, img: img13 },
  { id: 14, name: "Everyday Snack Pack", price: 95, discount: 5, img: img14 },
  { id: 15, name: "Classic Wafer Pack", price: 105, discount: 10, img: img15 }
];

const navigate = useNavigate();

const buyNow = (product) => {
  navigate("/checkout", { state: { product } });
};


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

      {/* HEADER */}
      <div className="products-hero">
        <h1>Our Products</h1>
        <p>Explore our premium range of freshly prepared banana chips</p>
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {products.map(p => (
          <div className="product-card" key={p.id}>

            {/* Discount Badge */}
            <span className="discount-badge">
              {p.discount}% OFF
            </span>

            {/* Image */}
            <div className="product-img">
              <img src={p.img} alt={p.name} />
            </div>

            {/* Info */}
            <div className="product-info">
              <h3>{p.name}</h3>

              <div className="price-box">
                <span className="new-price">
                  ₹{p.price - p.discount}
                </span>
                <span className="old-price">
                  ₹{p.price}
                </span>
              </div>

              <p className="review">4.0 Rating (120 Reviews)</p>

              <button onClick={() => addToCart(p)}>
                Add to Cart
              </button>
<button
  className="buy-btn"
  onClick={() =>
    navigate("/checkout", {
      state: {
        product: p   // ✅ ONLY product
      },
    })
  }
>
  Buy Now
</button>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Products;