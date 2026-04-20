import { Link, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext"; 
import { FavoritesContext } from "../../context/FavoritesContext";
import styles from "./Header.module.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { favorites } = useContext(FavoritesContext);
  // 👇 Dark mode
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          MyShop
        </Link>

        {/* Desktop Menu */}
        <nav className={styles.nav}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>
            Home
          </NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Right Side */}
        <div className={styles.actions}>
          <Link to="/cart">🛒</Link>
          <Link to="/register">👤</Link>
          <Link to="/favorites" className={styles.favBtn}>
            ❤️ {favorites.length}
          </Link>

          {/* 🌙 DARK MODE BUTTON */}
          <button onClick={toggleTheme} className={styles.themeBtn}>
            {dark ? "🌙" : "☀️"}
          </button>

          {/* Mobile Button */}
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;