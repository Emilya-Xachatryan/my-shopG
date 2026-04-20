import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.notfound}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;