import { useParams } from "react-router-dom";

import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="product-detail">

      <div className="detail-container">

        <div className="detail-image">

          <img
            src={product.image1}
            alt={product.name}
          />

        </div>

        <div className="detail-content">

          <span className="detail-category">
            LUXURY FRAGRANCE
          </span>

          <h1>
            {product.name}
          </h1>

          <h2>
            {product.price}
          </h2>

          <p>
            Crafted with premium ingredients and
            inspired by timeless elegance.
            This fragrance delivers a sophisticated
            experience designed for modern lifestyles.
          </p>

          <div className="quantity">

            <button>-</button>

            <span>1</span>

            <button>+</button>

          </div>

          <button className="cart-btn">
            ADD TO CART
          </button>

        </div>

      </div>

      <section className="related-products">

  <h2>
    YOU MAY ALSO LIKE
  </h2>

  <div className="related-grid">

    {products
      .filter(item => item.id !== product.id)
      .slice(0, 4)
      .map(item => (
        <ProductCard
          key={item.id}
          product={item}
        />
      ))}

  </div>

</section>

    </div>
  );
}

export default ProductDetail;