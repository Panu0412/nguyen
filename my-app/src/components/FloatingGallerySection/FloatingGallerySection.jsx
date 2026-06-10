import "./FloatingGallerySection.css";
import { useEffect, useRef, useState } from "react";

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
  { x: -15, y: 18 },
  { x: -5, y: 72 },
  { x: 12, y: 35 },
  { x: 25, y: 82 },
  { x: 40, y: 28 },
  { x: 52, y: 68 },
  { x: 65, y: 20 },
  { x: 82, y: 78 },
  { x: 102, y: 30 },
  { x: 112, y: 72 },
];

const rotations = [-12, 7, -5, 10, -8, 5, -14, 9, -4, 12];

export default function FloatingGallerySection() {
  const [states, setStates] = useState(
    Array(images.length).fill("hidden")
  );

  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const handleEnter = () => {
    clearTimers();

    images.forEach((_, i) => {
      const timer = setTimeout(() => {
        setStates((prev) => {
          const next = [...prev];
          next[i] = "visible";
          return next;
        });
      }, i * 220);

      timers.current.push(timer);
    });
  };

  const handleLeave = () => {
    clearTimers();

    [...images]
      .map((_, i) => i)
      .reverse()
      .forEach((i, order) => {
        const timer = setTimeout(() => {
          setStates((prev) => {
            const next = [...prev];
            next[i] = "leaving";
            return next;
          });
        }, order * 220);

        timers.current.push(timer);
      });
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

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
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`floating-image ${states[index]}`}
            style={{
              left: `${positions[index].x}%`,
              top: `${positions[index].y}%`,
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