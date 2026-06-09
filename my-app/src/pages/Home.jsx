import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import CategorySection from "../components/CategorySection/CategorySection";
import AboutSection from "../components/AboutSection/AboutSection";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import Footer from "../components/Footer/Footer";
import StoryProductSection from "../components/StoryProductSection/StoryProductSection";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductGrid />
      <StoryProductSection />
      <CategorySection />
      <AboutSection />
      <PromoBanner />
      <Footer />
    </>
  );
}

export default Home;