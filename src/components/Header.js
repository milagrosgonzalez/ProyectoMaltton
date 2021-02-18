import styles from "../styles/Header.module.scss";
import {useState} from "react"


function Header (){
    const [showMenu, setShowMenu] = useState(false)

    function handleClick () {
        setShowMenu(!showMenu)
    }

    function getNavClasses (){
        if (showMenu){
            return `${styles.nav_open} ${styles.nav_toggle}`
        } 
        return `${styles.nav_toggle}`
    }

    return (
        <>
            <button onClick={handleClick} className={styles.nav_toggle} aria-label="toggle navigation">
                <span className={styles.hamburger}><i class="ri-menu-line"></i></span>
            </button>
            <h1>MÀLTTON</h1>
            <button className={styles.carrito} aria-label="ir al carrito">
                <i class="ri-shopping-bag-fill"></i>
            </button>
            <nav className={getNavClasses()}>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        {/* <a href="#" className="nav__link"></a> */}
                    </li>
                    <li className={styles.nav__item}>
                        <a href="#inicio" className={styles.nav__link}>Inicio</a>
                    </li>
                    <li className={styles.nav__item}>
                        <a href="#productos" className={styles.nav__link}>Productos</a>
                    </li>
                    <li className={styles.nav__item}>
                        <a href="#contacto" className={styles.nav__link}>Contacto</a>
                    </li>
                </ul>
            </nav>
      </>
    )
}

export default Header