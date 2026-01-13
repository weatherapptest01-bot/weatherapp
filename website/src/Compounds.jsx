import { useState } from "react";
import "./Compounds.css";
import Vegpizza from "./Vegpizza";

// Page Images
import AboutImg from "./assets/about.jpeg";
import ContactImg from "./assets/contact.jpeg";
import HelpImg from "./assets/help.jpeg";

// Menu Images
import VegImg from "./assets/vegpizza.jpeg";
import ChickenImg from "./assets/chickenpizza.jpeg";
import BbqImg from "./assets/bbqchickenpizza.jpeg";
import TandooriImg from "./assets/tandooripizza.jpeg";
import SpicyImg from "./assets/spicychickenpizza.jpeg";
import CokeImg from "./assets/coke.jpeg";
import SpriteImg from "./assets/sprite.jpeg";
import KunafaImg from "./assets/kunafa.jpeg";
import TiramisuImg from "./assets/tiramisu.jpeg";
import BubbleTeaImg from "./assets/bubbletea.jpeg";
import ChocoBrownieImg from "./assets/chocobrowine.jpeg";

/* MENU DATA */
const menuItems = [
  { name: "Veg Pizza", image: VegImg, price: 250, rating: 5, category: "pizza" },
  { name: "Chicken Pizza", image: ChickenImg, price: 480, rating: 5, category: "pizza" },
  { name: "BBQ Chicken Pizza", image: BbqImg, price: 490, rating: 4.9, category: "pizza" },
  { name: "Tandoori Pizza", image: TandooriImg, price: 470, rating: 4.8, category: "pizza" },
  { name: "Spicy Chicken Pizza", image: SpicyImg, price: 460, rating: 4.7, category: "pizza" },

  { name: "Coke", image: CokeImg, price: 60, rating: 4.5, category: "drink" },
  { name: "Sprite", image: SpriteImg, price: 60, rating: 4.5, category: "drink" },
  { name: "Bubble Tea", image: BubbleTeaImg, price: 150, rating: 4.6, category: "drink" },

  { name: "Kunafa", image: KunafaImg, price: 180, rating: 4.9, category: "dessert" },
  { name: "Tiramisu", image: TiramisuImg, price: 220, rating: 4.8, category: "dessert" },
  { name: "Choco Brownie", image: ChocoBrownieImg, price: 200, rating: 4.7, category: "dessert" },
];

function Compounds({ page }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("alZl");

  const filteredMenu = menuItems.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "all" || item.category === category;
    return matchSearch && matchCategory;
  });

  if (page === "menu") {
    return (
      <div className="card-wrapper">
        <h1 className="page-title pro-title">Our Menu</h1>

        <input
          className="pro-search"
          type="text"
          placeholder="Search menu items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filter-buttons pro-filters">
          {["all", "pizza", "drink", "dessert"].map((cat) => (
            <button
              key={cat}
              className={category === cat ? "active" : ""}
              onClick={() => setCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="card-container">
          {filteredMenu.length === 0 && <p>No items found</p>}
          {filteredMenu.map((item, index) => (
            <Vegpizza key={index} {...item} />
          ))}
        </div>
      </div>
    );
  }

  // Other Pages
  const pageImages = { about: AboutImg, contact: ContactImg, help: HelpImg };

  return (
    <div className="page-image-overlay">
      <img src={pageImages[page]} alt={page} className="full-bg-image" />
      <div className="overlay-content">
        {page === "about" && <h1>About Us – Pizza Foodie Plaza 🍕</h1>}
        {page === "contact" && <h1>Contact Us</h1>}
        {page === "help" && <h1>Help & Support</h1>}
      </div>
    </div>
  );
}

export default Compounds;