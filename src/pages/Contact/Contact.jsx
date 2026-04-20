import Register from "../Register/Register";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact Us</h2>
      <Register/>
    </div>
  );
}

export default Contact;