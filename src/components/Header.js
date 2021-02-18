import styles from "../styles/Header.module.scss";
import React from "react";

function Header() {
  return (
    <>
      <button className={styles.nav_toggle} aria-label="toggle navigation">
        <span className={styles.hamburger}>
          <i class="ri-menu-line"></i>
        </span>
      </button>
      <h1>MÀLTTON</h1>
      <button className={styles.carrito} aria-label="ir al carrito">
        <i class="ri-shopping-bag-fill"></i>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            {/* <a href="#" className="nav__link"></a> */}
          </li>
          <li className="nav__item">
            <a href="#inicio" className="nav__link">
              Inicio
            </a>
          </li>
          <li className="nav__item">
            <a href="#productos" className="nav__link">
              Products
            </a>
          </li>
          <li className="nav__item">
            <a href="#contacto" className="nav__link">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
