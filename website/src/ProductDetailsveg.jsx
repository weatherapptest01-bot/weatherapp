import React, { useState, useContext } from "react";
import { CartContext } from "./App.jsx";
import { FaHome } from "react-icons/fa";
import "./Pages.css";

import PannerImg from "./assets/panner.jpeg";
import JackImg from "./assets/jackbriyani.jpeg";
import PulaoImg from "./assets/pulao.jpeg";
import MushroomImg from "./assets/mushroombriyani.jpeg";
import VegbriyaniImg from "./assets/vegbriyani.jpeg";

function ProductDetailsveg() {
  const { setCart } = useContext(CartContext);
  const [activeCard, setActiveCard] = useState(null);
  const [selectedQty, setSelectedQty] = useState({});
  const [search, setSearch] = useState("");

  const relatedItems = [
    { name: "Paneer Biryani", image: PannerImg, price: 500 },
    { name: "Jackfruit Biryani", image: JackImg, price: 900, discount: 30 },
    { name: "Veg Pulao", image: PulaoImg, price: 850, discount: 20 },
    { name: "Mushroom Biryani", image: MushroomImg, price: 950, discount: 20 },
    { name: "Veg Biryani", image: VegbriyaniImg, price: 450 },
  ];

  const getPrice = (qty, basePrice) => {
    switch (qty) {
      case "Half":
        return Math.round(basePrice / 2);
      case "Quarter":
        return Math.round(basePrice / 4);
      default:
        return basePrice;
    }
  };

  const handleBuyNow = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleAddToCart = (item, index) => {
    const qty = selectedQty[index] || "Full";
    setCart((prev) => [
      ...prev,
      { name: item.name, price: getPrice(qty, item.price), quantity: qty },
    ]);
    setActiveCard(null);
  };


  
  return (
    <div className="page-container-full menu-bg">
      {/* HOME ICON */}
      <div className="home-icon">
        <FaHome size={40} onClick={() => (window.location.href = "/")} />
      </div>

      {/* HEADING */}
      <h1 className="menu-heading-center">VEG MENU</h1>

      {/* SEARCH BAR */}
      <div className="menu-search-elegant">
        <input
          type="text"
          placeholder="Search veg items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* CARDS */}
      <div
        className="card-wrapper"
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {relatedItems
          .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
          .map((item, index) => (
            <div
              key={index}
              className="card"
              style={{
                width: activeCard === index ? "350px" : "280px",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#fff",
                borderRadius: "20px",
                padding: "15px",
                boxShadow:
                  activeCard === index
                    ? "0 15px 40px rgba(0,0,0,0.35)"
                    : "0 10px 30px rgba(0,0,0,0.25)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onClick={() => handleBuyNow(index)}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "15px",
                  marginBottom: "12px",
                }}
              />
              <h3 style={{ fontSize: "20px", fontWeight: "700", margin: "8px 0" }}>
                {item.name}
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#009900",
                  marginBottom: "12px",
                }}
              >
                ₹{item.price}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleBuyNow(index);
                }}
                style={{
                  padding: "10px 18px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#009900",
                  color: "#fff",
                  fontWeight: "700",
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
              >
                BUY NOW
              </button>

              {activeCard === index && (
                <div
                  style={{
                    width: "100%",
                    marginTop: "15px",
                    background: "linear-gradient(135deg,#ccffcc,#99ff99)",
                    padding: "15px",
                    borderRadius: "15px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  {["Full", "Half", "Quarter"].map((q) => (
                    <label
                      key={q}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "600",
                        fontSize: "16px",
                        color: "#333",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        checked={
                          selectedQty[index] === q || (!selectedQty[index] && q === "Full")
                        }
                        onChange={() =>
                          setSelectedQty({ ...selectedQty, [index]: q })
                        }
                        style={{ marginRight: "10px", cursor: "pointer" }}
                      />
                      {q} – ₹{getPrice(q, item.price)}
                    </label>
                  ))}

                  <button
                    onClick={() => handleAddToCart(item, index)}
                    style={{
                      marginTop: "10px",
                      padding: "10px 20px",
                      borderRadius: "10px",
                      border: "none",
                      background: "#009900",
                      color: "#fff",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductDetailsveg;