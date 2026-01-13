import { useLocation } from "react-router-dom";
import "../styles/Payment.css";

function Success() {
  const { state } = useLocation();

  return (
    <div className="page-wrapper">
      <div className="success-card">
        <h1>✅ Order Confirmed</h1>
        <p>Payment Method: {state?.paymentMethod}</p>
        <p>Amount Paid: ₹{state?.amount}</p>
        <p>Your order is on the way 🚀</p>
      </div>
    </div>
  );
}

export default Success;