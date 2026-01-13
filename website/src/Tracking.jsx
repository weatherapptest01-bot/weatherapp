import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUtensils, FaBox, FaTruck, FaSmile } from "react-icons/fa";
import "./Pages.css";
import "./Tracking.css";

function Tracking() {
  const navigate = useNavigate();

  const stages = [
    { title: "Order Placed", desc: "We have received your order.", icon: <FaUtensils /> },
    { title: "Preparing", desc: "Our chefs are preparing your delicious food.", icon: <FaBox /> },
    { title: "Out for Delivery", desc: "Your order is on the way!", icon: <FaTruck /> },
    { title: "Delivered", desc: "Enjoy your meal! 🎉", icon: <FaSmile /> },
  ];

  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        if (prev < stages.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tracking-fullpage">
      <div className="home-icon" onClick={() => navigate("/")}>
        <FaHome size={40} title="Go to Home" />
      </div>

      <h1 className="tracking-title">Order Tracking</h1>
      <p className="tracking-subtitle">Follow your order step by step in real-time</p>

      <div className="tracking-wrapper">
        {stages.map((stage, index) => (
          <div key={index} className="tracking-step">
            <div className={`step-icon ${index <= currentStage ? "active" : ""}`}>
              {stage.icon}
            </div>
            <div className={`step-number ${index <= currentStage ? "active" : ""}`}>{index + 1}</div>
            <div className="step-title">{stage.title}</div>
            <div className="step-desc">{stage.desc}</div>
            {index < stages.length - 1 && (
              <div className={`progress-bar ${index < currentStage ? "active" : ""}`}></div>
            )}
          </div>
        ))}
      </div>

      {currentStage === stages.length - 1 && (
        <p className="delivered-msg">🎉 Your order has been delivered successfully!</p>
      )}
    </div>
  );
}

export default Tracking;