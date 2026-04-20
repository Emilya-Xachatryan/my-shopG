import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>

      <div className={styles.info}>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>

      <button className={styles.btn}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;