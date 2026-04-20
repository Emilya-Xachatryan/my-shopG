import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../../data/products";
import styles from "./ProductDetails.module.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  const [selected, setSelected] = useState(product?.variants?.[0] || null);

  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [loadingComment, setLoadingComment] = useState(false);

  if (!product) return <p>Product Not Found</p>;

  // 💬 ADD COMMENT (delay + animation)
  const handleAddComment = () => {
    if (!commentInput.trim()) return;

    const newComment = {
      id: Date.now(),
      text: commentInput,
      image: selected.image,
    };

    setLoadingComment(true);
    setCommentInput("");

    setTimeout(() => {
      setComments((prev) => [...prev, newComment]);
      setLoadingComment(false);
    }, 800);
  };

  // 🛒 ADD TO CART (fix image)
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const alreadyInCart = existingCart.find(
      (item) => item.id === product.id
    );

    if (alreadyInCart) {
      // եթե կա → quantity ավելացնենք
      const updated = existingCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );

      localStorage.setItem("cart", JSON.stringify(updated));
      alert("Quantity updated 🛒");
      return;
    }

    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: selected.image, // 🔥 կարևոր
      quantity: 1,
    };

    localStorage.setItem(
      "cart",
      JSON.stringify([...existingCart, newItem])
    );

    alert("Added to cart ✅");
  };

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.backBtn}>
        ← Go Back
      </button>

      {/* PRODUCT */}
      <div
        className={styles.product}
        style={{ backgroundColor: selected?.color }}
      >
        <div className={styles.left}>
          <h2>{product.title}</h2>
          <p className={styles.price}>${product.price}</p>
          <p>{product.description}</p>

          <button className={styles.addBtn} onClick={handleAddToCart}>
            Add to Cart 🛒
          </button>
        </div>

        <div className={styles.right}>
          <img src={selected?.image} alt="shoe" />

          <div className={styles.thumbnails}>
            {product.variants.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt="variant"
                onClick={() => setSelected(item)}
                className={
                  selected?.image === item.image ? styles.active : ""
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* COMMENTS */}
      <div className={styles.comments}>
        <h3>Comments</h3>

        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Write comment..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <button onClick={handleAddComment}>
            {loadingComment ? "Adding..." : "Add"}
          </button>
        </div>

        <div className={styles.commentsList}>
          {comments.map((c) => (
            <div key={c.id} className={styles.commentCard}>
              <img src={c.image} alt="shoe" />
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;