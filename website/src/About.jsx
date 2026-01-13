import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Pages.css";

function About() {
  const navigate = useNavigate();

  return (
    <div className="page-container-full about-bg">

      {/* HOME ICON */}
      <div className="home-icon" onClick={() => navigate("/")}>
        <FaHome size={40} title="Go to Home" />
      </div>

      {/* HEADING – BIG, WHITE, VISIBLE */}
      <h1 className="about-heading-big">ABOUT US</h1>

      {/* CARDS */}
      <div className="about-card-container">

        <div className="about-card">
          <h2>🍕 Who We Are</h2>
          <p>
            Pizza Foodie Plaza Is A Trusted Food Destination Delivering
            Premium-Quality Meals Crafted With Passion And Care.
          </p>
        </div>

        <div className="about-card">
          <h2>🥗 Quality Ingredients</h2>
          <p>
            We Use Fresh Vegetables, Premium Meats, And Hand-Picked Spices
            To Ensure Healthy And Tasty Food Every Time.
          </p>
        </div>

        <div className="about-card">
          <h2>🌶️ Authentic Taste</h2>
          <p>
            Traditional Recipes Blended With Modern Cooking Techniques
            Create Rich And Unforgettable Flavours.
          </p>
        </div>

        <div className="about-card">
          <h2>🚀 Fast Delivery</h2>
          <p>
            Our Delivery System Ensures Your Food Arrives Hot,
            Fresh, And Right On Time.
          </p>
        </div>

        <div className="about-card">
          <h2>⭐ Customer Satisfaction</h2>
          <p>
            Thousands Of Happy Customers Trust Us For Quality,
            Hygiene, And Excellent Service.
          </p>
        </div>

        <div className="about-card">
          <h2>🔥 Wide Variety</h2>
          <p>
            From Pizzas And Sides To Desserts And Beverages,
            We Offer Something Delicious For Everyone.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;