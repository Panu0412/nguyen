import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <>
  <SmoothScroll />

  <ScrollToTop />

  <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />
      </Routes>
    </>
  );
}

export default App;