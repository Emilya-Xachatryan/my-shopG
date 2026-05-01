import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div>
          <h3>Shop</h3>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/shoes">Shoes</Link>
        </div>

        <div>
          <h3>About</h3>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </div>

        <div>
          <h3>Help</h3>
          <Link to="/faq">FAQ</Link>
          <Link to="/shipping">Shipping</Link>
          <Link to="/returns">Returns</Link>
        </div>

        <div>
          <h3>Follow</h3>
          <a href="https://www.facebook.com/share/1BEXMmLXxg/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/sahakyanads?igsh=MXV2bmh4eGVsOG1xeg==" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.threads.com/@sahakyanads?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">Threads</a>
        </div>

      </div>

      <p className={styles.copy}>© 2026 MyShop</p>
    </footer>
  );
}

export default Footer;