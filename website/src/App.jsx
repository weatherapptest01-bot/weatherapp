import { useState, createContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";


/* Components */
import Vegpizza from "./Vegpizza.jsx";
import Checkout from "./Checkout";
import ProductDetailsveg from "./ProductDetailsveg.jsx";
import ProductDetailsnonveg from "./ProductDetailsnonveg.jsx";
import ProductDetailsmandi from "./ProductDetailsmandi.jsx";
import ProductDetailspizza from "./ProductDetailspizza.jsx";
import ProductDetailsdesserts from "./ProductDetails.jsx";
import Payment from "./Payment.jsx";
import Success from "./Success.jsx";
import Login from "./Login.jsx";
import PaymentGateway from "./Paymentgateway.jsx";
import Successs from "./Success.jsx";
import Failure from "./Failure.jsx";


/* Pages */
import About from "./About.jsx";
import Menu from "./Menu.jsx";
import Contact from "./Contact.jsx";
import Tracking from "./Tracking.jsx";

/* Icons */
import { FaSearch, FaBars, FaUser } from "react-icons/fa";

/* Images */
import VegImg from "./assets/vegg.jpeg";
import ChickenImg from "./assets/muttonbriyani.jpeg";
import BbqImg from "./assets/muttonmandi.jpeg";
import TandooriImg from "./assets/vegpizza.jpeg";
import SpicyImg from "./assets/dessert.jpeg";

/* Context */
export const CartContext = createContext();

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);

  const navigate = useNavigate();

  const pizzas = [
    { name: "VEG", image: VegImg,discount:20 },
    { name: "NON VEG", image: ChickenImg },
    { name: "MANDI", image: BbqImg },
    { name: "PIZZA", image: TandooriImg ,discount:30},
    { name: "DESSERTS", image: SpicyImg },
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

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, setCart, loggedUser, setLoggedUser }}>
      <div className="app-layout">
        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <div
                style={{
                  minHeight: "100vh",
                  background: "linear-gradient(135deg,#ffe6cc,#ffcc99)",
                  paddingTop: "120px",
                  paddingBottom: "80px",
                }}
              >
                {/* HEADER */}
                <header
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "15px 25px",
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(10px)",
                    zIndex: 1000,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* LEFT */}
                  <div style={{ display: "flex", gap: "15px", alignItems: "center", position: "relative" }}>
                    <FaBars
                      size={26}
                      color="#ff6600"
                      style={{ cursor: "pointer" }}
                      onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <FaSearch size={24} color="#ff6600" />

                    {/* DROPDOWN MENU */}
                    {menuOpen && (
                      <div
                        style={{
                          position: "absolute",
                          top: "60px",
                          left: 0,
                          background: "#fff",
                          borderRadius: "12px",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                          width: "200px",
                          overflow: "hidden",
                          zIndex: 2000,
                        }}
                      >
                        {["Home", "About", "Menu", "Contact", "Tracking"].map((page) => (
                          <div
                            key={page}
                            style={{
                              padding: "14px 18px",
                              fontWeight: "700",
                              color: "#ff6600",
                              cursor: "pointer",
                              borderBottom: "1px solid #eee",
                            }}
                            onClick={() => {
                              navigate(page === "Home" ? "/" : `/${page.toLowerCase()}`);
                              setMenuOpen(false);
                            }}
                          >
                            {page}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* TITLE */}
                  <h1
                    style={{
                      fontSize: "46px",
                      fontWeight: "900",
                      background: "linear-gradient(90deg,#ff6600,#ffcc66)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Food Plaza
                  </h1>

                  {/* USER ICON + USERNAME */}
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    {loggedUser && (
                      <span style={{ fontWeight: "700", color: "#ff6600", fontSize: "16px" }}>
                        {loggedUser.username}
                      </span>
                    )}
                    <FaUser
                      size={26}
                      color="#ff6600"
                      style={{ cursor: "pointer" }}
                      onClick={() => !loggedUser && navigate("/login")}
                    />
                  </div>
                </header>

                {/* SEARCH */}
                <div style={{ textAlign: "center", margin: "30px 0" }}>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                      width: "380px",
                      padding: "16px",
                      borderRadius: "30px",
                      border: "2px solid #ff6600",
                      fontSize: "18px",
                    }}
                  />
                </div>

                {/* CATEGORY CARDS */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    overflowX: "auto",
                    gap: "30px",
                    padding: "20px 30px",
                    justifyContent: "center",
                  }}
                >
                  {filteredPizzas.map((pizza, index) => (
                    <div
                      key={index}
                      onClick={() => handleCardClick(pizza)}
                      style={{
                        minWidth: "320px",
                        borderRadius: "20px",
                        overflow: "hidden",
                        cursor: "pointer",
                        boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                      }}
                    >
                      <Vegpizza {...pizza} />
                     
                    </div>
                  ))}
                </div>

                {/* WORDING SECTION */}
                <div className="info-section">
                  <div className="info-card">
                    <h2>🍽️ Why Food Plaza?</h2>
                    <p>Premium-quality Meals Prepared With Fresh Ingredients To Deliver a Restaurant-Style Experience At Home.</p>
                  </div>
                  <div className="info-card">
                    <h2>🌶️ Authentic Flavours</h2>
                    <p>Traditional Recipes Blended With Modern Taste To Satisfy Every Food Lover.</p>
                  </div>
                  <div className="info-card">
                    <h2>🚀 Fast Delivery</h2>
                    <p>Lightning-Fast Delivery Ensures Your Food Arrives Hot, Fresh, And On Time.</p>
                  </div>
                  <div className="info-card">
                    <h2>🥗 Fresh Ingredients</h2>
                    <p>Only The Freshest Vegetables, Meats, And Spices Are Used To Maintain Quality And Health.</p>
                  </div>
                  <div className="info-card">
                    <h2>⭐ Customer Satisfaction</h2>
                    <p>Thousands Of Happy Customers Trust Food Plaza For Taste, Hygiene, And Service.</p>
                  </div>
                  <div className="info-card">
                    <h2>🔥 Wide Variety</h2>
                    <p>From Veg To Non-Veg, Mandi To Desserts, Enjoy A Wide Range Of Delicious Options.</p>
                  </div>
                </div>
              </div>
            }
          />

          {/* ROUTES */}
          <Route path="/veg" element={<ProductDetailsveg />} />
          <Route path="/nonveg" element={<ProductDetailsnonveg />} />
          <Route path="/mandi" element={<ProductDetailsmandi />} />
          <Route path="/pizza" element={<ProductDetailspizza />} />
          <Route path="/desserts" element={<ProductDetailsdesserts />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/payment-gateway" element={<PaymentGateway />} />
        <Route path="/successs" element={<Successs />} />
        <Route path="/failure" element={<Failure />} />  
        </Routes>

        {/* FLOATING CART */}
        <div className="floating-cart">
          <h3>🛒 Cart</h3>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <>
              {cart.map((item, i) => (
                <div key={i} className="cart-item">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </div>
              ))}
              <p>Total: ₹{totalAmount}</p>
              <button onClick={() => navigate("/checkout")}>Buy Now</button>
            </>
          )}
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;