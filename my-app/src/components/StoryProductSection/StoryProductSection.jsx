import { useState } from "react";
import "./StoryProductSection.css";
import storyProducts from "../../data/storyProducts";

function StoryProductSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (dir) => {
    if (isAnimating) return;

    setDirection(dir);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrent((prev) => {
        if (dir === "next") {
          return prev === storyProducts.length - 1 ? 0 : prev + 1;
        }

        return prev === 0 ? storyProducts.length - 1 : prev - 1;
      });

      setIsAnimating(false);
    }, 800);
  };

  const product = storyProducts[current];

  return (
    <section className="story-section">
      <div className="story-intro">
        <span className="story-subtitle">
          FEATURED SCENTS
        </span>

        <h1>
          Crafted Around Stories
        </h1>

        <p>
          Every fragrance tells a story,
          capturing memories, places and emotions.
        </p>

        <div className="intro-line"></div>
      </div>

      <div
        className={`background ${
          isAnimating
            ? direction === "next"
              ? "bg-exit-left"
              : "bg-exit-right"
            : ""
        }`}
        style={{
          backgroundImage: `url(${product.backgroundImage})`,
        }}
      />

      <div className="story-overlay">
        <button
          className="nav-btn"
          onClick={() => changeSlide("prev")}
        >
          ←
        </button>

        <div
          className={`product-content ${
            isAnimating
              ? direction === "next"
                ? "product-exit-left"
                : "product-exit-right"
              : ""
          }`}
        >
          <img
            src={product.productImage}
            alt={product.name}
          />

          <h2>{product.name}</h2>

          <p>{product.description}</p>

          <div className="slide-indicator">
            {String(current + 1).padStart(2, "0")}
            {" / "}
            {String(storyProducts.length).padStart(2, "0")}
          </div>
        </div>

        <button
          className="nav-btn"
          onClick={() => changeSlide("next")}
        >
          →
        </button>
      </div>
    </section>
  );
}

export default StoryProductSection;