import "./ProductGrid.css";

import ProductCard from "../ProductCard/ProductCard";

import products from "../../data/products";

import useScrollAnimation from "../../hooks/useScrollAnimation";

function ProductGrid() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className="product-section hidden"
    >
      <h2>
        NEW ARRIVALS
      </h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;