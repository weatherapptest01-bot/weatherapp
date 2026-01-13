import { useNavigate } from "react-router-dom";
import { FaHome, FaShoppingCart, FaBars } from "react-icons/fa";
import "./Pages.css"; // IMPORTANT

function ProductHeader() {
  const navigate = useNavigate();

  return (
    <header className="product-header">
      {/* Home Icon */}
      <FaHome
        className="home-icon"
        onClick={() => navigate("/")}
        title="Go to Home"
      />

      {/* Right Icons */}
      <div className="header-icons">
        <FaShoppingCart
          className="header-icon"
          title="Cart"
          onClick={() =>
            document.querySelector(".floating-cart")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        />
        <FaBars className="header-icon" title="Menu" />
      </div>
    </header>
  );
}

export default ProductHeader;