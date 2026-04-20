import { useState } from "react";
import styles from "./Register.module.css";
import nickeImg from "../../assets/image/nickeImg.png"
import nickImg3 from "../../assets/image/nickImg3.png"
function Register() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${form.email}\nPassword: ${form.password}`);
  };

  return (
    <form className={styles.register} onSubmit={handleSubmit}>
      <div>
        <img className={styles.nickeImg3} src={nickImg3} alt="nickImg3" />
      </div>
      <h2>Create Account</h2>
      
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />


      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      

      <button type="submit">Register</button>

      <div >
        <img className={styles.nickeImg} src={nickeImg} alt="nickimg" />
      </div>
    </form>
  );
}

export default Register;