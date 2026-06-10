import "./FloatingGallerySection.css";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600",
  "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600",
  "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600",
  "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600",
  "https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?w=600",
  "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600",
  "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=600",
  "https://images.unsplash.com/photo-1619994403073-2cec2e7999d5?w=600",
  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600",
  "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600",
];

const positions = [
  { x: -420, y: -180 },
  { x: -360, y: 60 },
  { x: -260, y: -40 },
  { x: -180, y: 220 },
  { x: -80, y: -260 },

  { x: 120, y: -240 },
  { x: 260, y: -80 },
  { x: 360, y: 100 },
  { x: 250, y: 240 },
  { x: 80, y: 320 },
];

export default function FloatingGallerySection() {
  const [hovered, setHovered] = useState(false);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  return (
    <section className="floating-section">
      <div className="floating-left">
        <h2>Born In Black</h2>
      </div>

      <div
        className="floating-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();

          const x =
            ((e.clientX - rect.left) / rect.width - 0.5) * 2;

          const y =
            ((e.clientY - rect.top) / rect.height - 0.5) * 2;

          setMouse({ x, y });
        }}
      >
        {images.map((img, index) => {
          const moveStrength = 20 + index * 3;

          return (
            <img
              key={index}
              src={img}
              alt=""
              className={`floating-image ${
                hovered ? "show" : "hide"
              }`}
              style={{
                "--x": `${positions[index].x}px`,
                "--y": `${positions[index].y}px`,
                "--mx": `${mouse.x * moveStrength}px`,
                "--my": `${mouse.y * moveStrength}px`,
                "--delay": `${index * 100}ms`,
              }}
            />
          );
        })}

        <img
          className="main-product"
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800"
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