import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h3>Shop</h3>
          <p>Men</p>
          <p>Women</p>
          <p>Shoes</p>
        </div>

        <div>
          <h3>About</h3>
          <p>About Us</p>
          <p>Contact</p>
          <p>Privacy</p>
        </div>

        <div>
          <h3>Help</h3>
          <p>FAQ</p>
          <p>Shipping</p>
          <p>Returns</p>
        </div>

        <div>
          <h3>Follow</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>

      <p className={styles.copy}>© 2026 MyShop</p>
    </footer>
  );
}

export default Footer;