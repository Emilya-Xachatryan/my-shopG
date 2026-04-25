import { useEffect, useState } from "react";
import styles from "./Cart.module.css";

function Cart() {
  const [cart, setCart] = useState([]);

  // load cart
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const addOne = (id) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // ➖ REMOVE ONE
  const removeOne = (id) => {
    const updated = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // ❌ DELETE
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Delete this product?");
    if (!confirmDelete) return;

    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // 💰 TOTAL PRICE
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className={styles.empty}>No items yet 😢</p>
      ) : (
        <>
          <div className={styles.grid}>
            {cart.map((item) => (
              <div key={item.id} className={styles.card}>
                
                {/* IMAGE */}
                <img
                  src={item.image || item.variants?.[0]?.image}
                  alt={item.title}
                  className={styles.image}
                />

                <h3>{item.title}</h3>

                {/* PRICE */}
                <p className={styles.price}>
                  ${item.price * (item.quantity || 1)}
                  <p>Total: {total}</p>
                </p>

                {/* QUANTITY */}
                <div className={styles.qty}>
                  <button onClick={() => removeOne(item.id)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => addOne(item.id)}>+</button>
                </div>

                {/* DELETE */}
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete ❌
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;