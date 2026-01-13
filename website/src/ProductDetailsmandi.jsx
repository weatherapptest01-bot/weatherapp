import { useState, useContext } from "react";
import { CartContext } from "./App.jsx";
import { FaHome } from "react-icons/fa";
import "./Pages.css";

import muttonmandiImg from "./assets/muttonmandi.jpeg";
import chickenmandiImg from "./assets/chiceknmandi.jpeg";
import fishmandiImg from "./assets/fishmandi.jpeg";
import prawnmandiImg from "./assets/prawnmandi.jpeg";
import vegmandiImg from "./assets/vegmandi.jpeg"; 

function ProductDetailsmandi() {
  const { setCart } = useContext(CartContext);
  const [activeCard, setActiveCard] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [search, setSearch] = useState("");

  const relatedItems = [
    { name: "Chicken Mandi", image: chickenmandiImg, price: 200 },
    { name: "Mutton Mandi", image: muttonmandiImg, price: 250 },
    { name: "Fish Mandi", image: fishmandiImg, price: 180 },
    { name: "Prawn Mandi", image: prawnmandiImg, price: 220 },
    { name: "Veg Mandi", image: vegmandiImg, price: 170 },
  ];

  const getPrice = (qty, basePrice) => {
    switch (qty) {
      case "Full": return basePrice;
      case "Half": return Math.round(basePrice / 2);
      case "Quarter": return Math.round(basePrice / 4);
      default: return basePrice;
    }
  };

  const handleBuyNowClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleAdd = (product, index) => {
    const selectedQty = quantities[index] || "Full";
    setCart(prev => [
      ...prev,
      {
        name: product.name,
        price: getPrice(selectedQty, product.price),
        quantity: selectedQty,
      },
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
      <h1 className="menu-heading-center">PIZZA PLAZA</h1>

      {/* SEARCH BAR */}
      <div className="menu-search-elegant">
        <input
          type="text"
          placeholder="Search Mandi items..."
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
              onClick={() => handleBuyNowClick(index)}
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
                  handleBuyNowClick(index);
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
                        checked={quantities[index] === q || (!quantities[index] && q === "Full")}
                        onChange={() =>
                          setQuantities({ ...quantities, [index]: q })
                        }
                        style={{ marginRight: "10px", cursor: "pointer" }}
                      />
                      {q} – ₹{getPrice(q, item.price)}
                    </label>
                  ))}

                  <button
                    onClick={() => handleAdd(item, index)}
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

export default ProductDetailsmandi;