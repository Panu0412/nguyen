import { useState } from "react";
import "./StoryProductSection.css";
import storyProducts from "../../data/storyProducts";

function StoryProductSection() {
  const [current, setCurrent] = useState(0);
  const [incoming, setIncoming] = useState(null);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (dir) => {
    if (isAnimating) return;

    const nextIndex =
      dir === "next"
        ? (current + 1) % storyProducts.length
        : (current - 1 + storyProducts.length) %
          storyProducts.length;

    setDirection(dir);
    setIncoming(nextIndex);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrent(nextIndex);
      setIncoming(null);
      setIsAnimating(false);
    }, 900);
  };

  const currentProduct = storyProducts[current];
  const incomingProduct =
    incoming !== null
      ? storyProducts[incoming]
      : null;

  return (
    <section className="story-section">
      <div className="story-header">
        <div className="header-line"></div>
        <span>THE COLLECTION</span>
        <div className="header-line"></div>
      </div>

      <div
  key={`bg-${
    incomingProduct
      ? incomingProduct.id
      : currentProduct.id
  }`}
  className="background background-reveal"
  style={{
    backgroundImage: `url(${
      incomingProduct
        ? incomingProduct.backgroundImage
        : currentProduct.backgroundImage
    })`,
  }}
/>

      <div className="story-overlay">
        <button
          className="nav-btn"
          onClick={() => changeSlide("prev")}
        >
          ←
        </button>

        <div className="product-stage">
          <div
            className={`product-slide current-slide ${
              isAnimating
                ? direction === "next"
                  ? "exit-left"
                  : "exit-right"
                : ""
            }`}
          >
            <img
              src={currentProduct.productImage}
              alt={currentProduct.name}
            />

            <h2>{currentProduct.name}</h2>

            <p>{currentProduct.description}</p>

            <div className="slide-indicator">
              {String(current + 1).padStart(2, "0")}
              {" / "}
              {String(storyProducts.length).padStart(
                2,
                "0"
              )}
            </div>
          </div>

          {incomingProduct && (
            <div
              className={`product-slide incoming-slide ${
                direction === "next"
                  ? "enter-right"
                  : "enter-left"
              }`}
            >
              <img
                src={incomingProduct.productImage}
                alt={incomingProduct.name}
              />

              <h2>{incomingProduct.name}</h2>

              <p>{incomingProduct.description}</p>

              <div className="slide-indicator">
                {String(incoming + 1).padStart(
                  2,
                  "0"
                )}
                {" / "}
                {String(
                  storyProducts.length
                ).padStart(2, "0")}
              </div>
            </div>
          )}
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