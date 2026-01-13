import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

function PaymentGateway() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    navigate("/");
    return null;
  }

  const { paymentMethod, amount } = state;

  const handlePay = () => {
    if (paymentMethod === "Google Pay") {
      window.location.href =
        "upi://pay?pa=merchant@upi&pn=FoodStore&am=" +
        amount +
        "&cu=INR";
    } else {
      navigate("/success", { state });
    }
  };

  return (
    <div className="page-wrapper">
      <div className="gateway-card">
        <h1 className="title">{paymentMethod}</h1>

        <div className="amount-box">
          <span>Total Amount</span>
          <h2>₹{amount}</h2>
        </div>

        <button className="pay-btn" onClick={handlePay}>
          Pay Now
        </button>

        <button className="cancel-btn" onClick={() => navigate("/failure")}>
          Cancel Payment
        </button>
      </div>
    </div>
  );
}

export default PaymentGateway;