import "./FloatingGallerySection.css";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800",
  "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800",
  "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800",
  "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800",
  "https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?w=800",
  "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=800",
  "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=800",
  "https://images.unsplash.com/photo-1619994403073-2cec2e7999d5?w=800",
  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800",
  "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800",
];

const positions = [
  { x: -5, y: 20 },
  { x: 10, y: 55 },
  { x: 18, y: 15 },

  { x: 30, y: 80 },

  { x: 72, y: 15 },

  { x: 92, y: 30 },

  { x: 100, y: 60 },

  { x: 82, y: 82 },

  { x: 25, y: 90 },

  { x: 55, y: 92 },
];

const rotations = [
  -12,
  7,
  -5,
  10,
  -8,
  5,
  -14,
  9,
  -4,
  12,
];

export default function FloatingGallerySection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="floating-section">
      <div className="floating-left">
        <h2>
          Born In
          <br />
          Black
        </h2>
      </div>

      <div
        className="floating-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`floating-image ${
              hovered ? "show" : "hide"
            }`}
            style={{
              left: `${positions[index].x}%`,
              top: `${positions[index].y}%`,
              "--delay": `${index * 250}ms`,
              "--rotate": `${rotations[index]}deg`,
            }}
          />
        ))}

        <img
          className="main-product"
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1200"
          alt=""
        />
      </div>

      <div className="floating-right">
        <p>
          A deep woody fragrance infused with leather,
          incense and dark amber. Crafted for those who
          appreciate timeless luxury and artistic
          perfumery.
        </p>
      </div>
    </section>
  );
}