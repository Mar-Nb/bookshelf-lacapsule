"use client";

import { faBook, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

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
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link className="navbar-item" href="/">
            Accueil
          </Link>
          <Link className="navbar-item" href="/category">
            Catégories
          </Link>
          <Link className="navbar-item" href="/about">
            À propos
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <Link href="/cart">
              <button className="button">
                <span className="icon">
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
