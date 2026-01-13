import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";   // ✅ ADD THIS
import Vegpizza from "./Vegpizza.jsx";
import "./Pages.css";
//the menu

/* Images */
import VegImg from "./assets/vegg.jpeg";
import ChickenImg from "./assets/muttonbriyani.jpeg";
import BbqImg from "./assets/muttonmandi.jpeg";
import TandooriImg from "./assets/vegpizza.jpeg";
import SpicyImg from "./assets/dessert.jpeg";

function Menu() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const pizzas = [
    { name: "VEG", image: VegImg,  },
    { name: "NON VEG", image: ChickenImg,  },
    { name: "MANDI", image: BbqImg,  },
    { name: "PIZZA", image: TandooriImg,  },
    { name: "DESSERTS", image: SpicyImg, },
  ];

  const filteredPizzas = pizzas.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCardClick = (item) => {
    if (item.name === "VEG") navigate("/veg");
    else if (item.name === "NON VEG") navigate("/nonveg");
    else if (item.name === "MANDI") navigate("/mandi");
    else if (item.name === "PIZZA") navigate("/pizza");
    else if (item.name === "DESSERTS") navigate("/desserts");
  };

  return (
    <div className="menu-page-full menu-bg">

      {/* HOME ICON (fade + scale on load) */}
      <motion.div
        className="home-icon"
        onClick={() => navigate("/")}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <FaHome size={38} />
      </motion.div>

      {/* HEADING (slide from top) */}
      <motion.h1
        className="menu-heading-center"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        OUR MENU
      </motion.h1>

      {/* SEARCH BAR (fade in) */}
      <motion.div
        className="menu-search-elegant"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <input
          type="text"
          placeholder="Search your favourite food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </motion.div>

      {/* HORIZONTAL SCROLL CARDS (ANIMATE ON SCROLL) */}
      <div className="menu-horizontal-wrapper">
        {filteredPizzas.map((pizza, index) => (
          <motion.div
            key={index}
            className="menu-horizontal-card"
            onClick={() => handleCardClick(pizza)}

            /* 🔥 SCROLL ANIMATION */
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}   // animate only once
            transition={{ duration: 0.6, delay: index * 0.15 }}

            /* 🔥 HOVER EFFECT */
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Vegpizza
              {...pizza}
              cardStyle={{
                background: "linear-gradient(145deg,#ff9e5d,#ff6600)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Menu;