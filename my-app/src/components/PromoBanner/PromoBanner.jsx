import "./PromoBanner.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";


function PromoBanner() {
    const sectionRef = useScrollAnimation();

  return (
    <section
  ref={sectionRef}
  className="promo-banner hidden"
>

      <div className="promo-overlay">

        <span>NEW COLLECTION</span>

        <h2>
          Summer Collection 2026
        </h2>

        <button>
          SHOP NOW
        </button>

      </div>

    </section>
  );
}

export default PromoBanner;