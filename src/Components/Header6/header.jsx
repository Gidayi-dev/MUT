import "./header.css";

function HeaderNavigation() {
  return (
    <div className="header-hero">
      <div className="header-navigation">
        <h1 className="logo-text">MUTC</h1>
        <nav>
          <ol className="navigation-list">
            <li className="navigation-item">
              <a href="/" className="navigation-link">Home</a>
            </li>
            <li className="navigation-item">
              <a href="/leadership" className="navigation-link">Leadership</a>
            </li>
            <li className="navigation-item">
              <a href="/events" className="navigation-link">Events</a>
            </li>
            <li className="navigation-item">
              <a href="/overview" className="navigation-link">Overview</a>
            </li>
          </ol>
        </nav>
      </div>
      <div className="hero"></div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <HeaderNavigation />
    </header>
  );
}

export default Header;
