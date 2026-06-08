import "./Footer.css";


function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">
          <h2>LUXURY</h2>

          <p>
            Premium fragrances and timeless elegance
            crafted for modern lifestyles.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Collection</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Customer Care</h3>

          <ul>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>

          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>TikTok</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Luxury Store. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;