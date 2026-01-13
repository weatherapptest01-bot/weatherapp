import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData } = location.state || {};
  const [selectedPayment, setSelectedPayment] = useState("");

  if (!formData) {
    navigate("/checkout");
    return null;
  }

  const handleConfirm = () => {
    if (!selectedPayment) {
      alert("Please select a payment method");
      return;
    }

    if (selectedPayment === "Cash on Delivery") {
      navigate("/success", {
        state: { paymentMethod: "Cash on Delivery", amount: 100 }
      });
    } else {
      navigate("/payment-gateway", {
        state: { paymentMethod: selectedPayment, amount: 100 }
      });
    }
  };

  return (
    // Page wrapper with fade-in animation
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="payment-card"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="title"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Choose Payment
        </motion.h1>
        <motion.p
          className="subtitle"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Secure & fast checkout
        </motion.p>

        <div className="options">
          {[
            "Cash on Delivery",
            "Google Pay",
            "Paytm",
            "Debit / Credit Card"
          ].map((method) => (
            <motion.div
              key={method}
              className={`option ${selectedPayment === method ? "active" : ""}`}
              onClick={() => setSelectedPayment(method)}
              whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {method}
            </motion.div>
          ))}
        </div>

        {/* Confirm Button with hover & click animation */}
        <motion.button
          className="confirm-btn"
          onClick={handleConfirm}
          whileHover={{ scale: 1.05, backgroundColor: "#ff7f50" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Confirm Order
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default Payment;