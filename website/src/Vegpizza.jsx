import { useNavigate } from "react-router-dom";

function Vegpizza({ name, image, price, rating, discount }) {
  const navigate = useNavigate();

  const numericRating = Number(rating);
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(i <= Math.round(numericRating) ? "★" : "☆");
  }

  const handleClick = () => {
    navigate(`/product/${name}`, {
      state: { name, image, price, rating, discount }
    });
  };

  return (
    <div className="card">
      <div className="img-box">
        <img src={image} alt={name} />
        {discount && <div className="discount">{discount}% OFF</div>}
      </div>

      <div className="rating-right">
        <span className="stars">{stars.join("")}</span>
      </div>

      <div className="card-content center-text">
        <h3>{name}</h3>
        <p className="price"> {price}</p>

        <button className="order-btn" onClick={handleClick}>
          CLICK ME
        </button>
      </div>
    </div>
  );
}

export default Vegpizza;