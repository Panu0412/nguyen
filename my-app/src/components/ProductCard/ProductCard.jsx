import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="image-wrapper">

        <img
          src={product.image1}
          alt={product.name}
          className="image-main"
        />

        <img
          src={product.image2}
          alt={product.name}
          className="image-hover"
        />

        <Link
  to={`/product/${product.id}`}
  className="view-btn"
>
  VIEW DETAIL
</Link>

      </div>

      <h3>{product.name}</h3>

      <p>{product.price}</p>

    </div>
  );
}

export default ProductCard;