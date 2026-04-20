import { NavLink } from "react-router-dom";
import styles from "./MobileMenu.module.css";

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.menu}>
      <NavLink to="/" onClick={onClose}>Home</NavLink>
      <NavLink to="/products" onClick={onClose}>Products</NavLink>
      <NavLink to="/about" onClick={onClose}>About</NavLink>
      <NavLink to="/contact" onClick={onClose}>Contact</NavLink>
    </div>
  );
}

export default MobileMenu;