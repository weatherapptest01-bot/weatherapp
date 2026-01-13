import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Pages.css";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="page-container-full contact-bg">

      {/* HOME ICON */}
      <div className="home-icon" onClick={() => navigate("/")}>
        <FaHome size={40} title="Go to Home" />
      </div>

      {/* HEADING */}
      <h1 className="contact-heading-big">CONTACT US</h1>

      {/* CONTACT CARDS */}
      <div className="contact-card-container">

        <div className="contact-card scroll-animate">
          <FaPhoneAlt className="contact-icon phone" />
          <h2>Call Us</h2>
          <p>+91 98765 43210</p>
          <p>+91 91234 56789</p>
        </div>

        <div className="contact-card scroll-animate">
          <FaEnvelope className="contact-icon email" />
          <h2>Email Us</h2>
          <p>support@foodieplaza.com</p>
          <p>orders@foodieplaza.com</p>
        </div>

        <div className="contact-card scroll-animate">
          <FaMapMarkerAlt className="contact-icon location" />
          <h2>Visit Us</h2>
          <p>Foodie Plaza</p>
          <p>Main Street, Chennai</p>
        </div>

      </div>
    </div>
  );
}

export default Contact;