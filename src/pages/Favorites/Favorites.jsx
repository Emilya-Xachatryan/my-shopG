import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import styles from "./Favorites.module.css";

export default function Favorites() {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div className={styles.container}>
      <h2>My Favorites ❤️</h2>

      {favorites.length === 0 ? (
        <p>No favorite products yet.</p>
      ) : (
        <div className={styles.grid}>
          {favorites.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.variants[0].image} />
              <h4>{item.title}</h4>
              <span>${item.price}</span>

              <button onClick={() => toggleFavorite(item)}>
                Remove ❤️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}