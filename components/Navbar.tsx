import { faBook, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item" style={{ gap: 10 }}>
          <span className="icon">
            <FontAwesomeIcon icon={faBook} />
          </span>

          <span>Bookshelf</span>
        </div>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Accueil</a>
          <a className="navbar-item">Catégories</a>
          <a className="navbar-item">À propos</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <button className="button">
            <span className="icon">
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
