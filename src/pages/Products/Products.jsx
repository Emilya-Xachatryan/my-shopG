import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";
import { FavoritesContext } from "../../context/FavoritesContext";
import products from "../../data/products";
import styles from "./Products.module.css";
import loaderImg from "../../assets/image/nickImg3.png";

function Products() {
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [categoriesOpen, toggleCategories] = useToggle(false);

  const navigate = useNavigate();

  // ❤️ favorites context
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  // Loading simulation
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setFiltered(products);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Filter by category
  const filterCategory = (cat) => {
    if (cat === "all") setFiltered(products);
    else setFiltered(products.filter((p) => p.category === cat));
  };

  // Filter by search input
  const handleSearch = (e) => {
    setSearch(e.target.value);
    const searched = products.filter((p) =>
      p.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFiltered(searched);
  };

  // Categories list
  const categories = ["all"];
  products.forEach((p) => {
    if (!categories.includes(p.category)) categories.push(p.category);
  });

  // Loading screen
  if (loading)
    return (
      <div className={styles.loadingContainer}>
        <img src={loaderImg} alt="loading" className={styles.loaderImg} />
        <p>Loading products...</p>
      </div>
    );

  return (
    <div className={styles.container}>
      {/* Search form */}
      <form onSubmit={(e) => e.preventDefault()} className={styles.searchForm}>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search products..."
          className={styles.searchBar}
        />
      </form>

      {/* Categories Toggle Button */}
      <button onClick={toggleCategories} className={styles.toggleBtn}>
        {categoriesOpen ? "Hide Categories ▲" : "Show Categories ▼"}
      </button>

      {/* Categories */}
      <div className={`${styles.categories} ${categoriesOpen ? styles.open : ""}`}>
        {categories.map((cat, index) => (
          <button
            key={cat}
            onClick={() => filterCategory(cat)}
            className={styles.categoryBtn}
            style={{
              transitionDelay: categoriesOpen ? `${index * 0.1}s` : "0s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className={styles.grid}>
        {filtered.length === 0 ? (
          <p className={styles.noProducts}>No products found 😢</p>
        ) : (
          filtered.map((product) => {
            const isFav = favorites.find((p) => p.id === product.id);

            return (
              <div
                key={product.id}
                className={styles.card}
                onClick={() => navigate(`/products/${product.id}`)}
              >
                {/* ❤️ Favorite button */}
                <button
                  className={styles.heartBtn}
                  onClick={(e) => {
                    e.stopPropagation(); // prevent card click
                    toggleFavorite(product);
                  }}
                >
                  {isFav ? "❤️" : "🤍"}
                </button>

                <img src={product.variants[0].image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Products;