import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./App.jsx"; // import your cart context
import "./Checkout.css";

function Success() {
  const navigate = useNavigate();
  const { setCart } = useContext(CartContext);

  // Clear cart when the Success page is rendered
  useEffect(() => {
    setCart([]); // empty the cart
  }, [setCart]);

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <h1 className="checkout-title">Payment Successful! 🎉</h1>
        <p className="checkout-subtitle">
          Thank you for your purchase. Your order is on the way.
        </p>
        <button className="pay-btn confirm-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Success;