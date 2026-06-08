import "./Header.css";

function Header() {
  return (
    <header>
      <div className="top-bar">
        <div className="marquee">
          <span>
            WELCOME TO PANU SHOP
          </span>
        </div>
      </div>

      <div className="navbar">
        <div className="logo">
          LUXURY
        </div>

        <ul className="nav-links">
          <li className="nav-item" data-text="HOME">
            <span>HOME</span>
          </li>

          <li className="nav-item" data-text="SHOP">
            <span>SHOP</span>
          </li>

          <li className="nav-item" data-text="COLLECTION">
            <span>COLLECTION</span>
          </li>

          <li className="nav-item" data-text="ABOUT">
            <span>ABOUT</span>
          </li>

          <li className="nav-item" data-text="CONTACT">
            <span>CONTACT</span>
          </li>
        </ul>

        <div className="actions">
          🛒
        </div>
      </div>
    </header>
  );
}

export default Header;