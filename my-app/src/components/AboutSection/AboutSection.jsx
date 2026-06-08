import "./AboutSection.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

function AboutSection() {
    const sectionRef = useScrollAnimation();
  return (
    <section
  ref={sectionRef}
  className="about-section hidden"
>

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200"
          alt="brand"
        />
      </div>

      <div className="about-content">

        <span>OUR STORY</span>

        <h2>
          Crafted For Luxury
        </h2>

        <p>
          Born from a passion for elegance and timeless design,
          our collections are carefully curated to deliver a
          premium experience.
        </p>

        <p>
          Every product reflects sophistication, quality,
          and modern luxury.
        </p>

        <button>
          READ MORE
        </button>

      </div>

    </section>
  );
}

export default AboutSection;