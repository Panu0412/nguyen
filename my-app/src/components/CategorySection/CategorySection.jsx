import "./CategorySection.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

function CategorySection() {

  const sectionRef = useScrollAnimation();

  const categories = [
  {
    name: "PERFUME",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800",
  },

  {
    name: "BODY CARE",
    image:
      "https://images.unsplash.com/photo-1600959907703-125ba1374a12?w=800",
  },

  {
    name: "GIFT SET",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800",
  },

  {
    name: "HOME SCENT",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800",
  },
];

  return (
    <section
      ref={sectionRef}
      className="category-section hidden"
    >
      <h2>SHOP BY CATEGORY</h2>

      <div className="category-grid">

        {categories.map((item, index) => (
          <div
            className="category-card"
            key={index}
          >
            <img
              src={item.image}
              alt={item.name}
            />

            <div className="category-overlay">
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default CategorySection;