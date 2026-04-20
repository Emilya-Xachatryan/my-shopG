import styles from "./SearchBar.module.css";

function SearchBar({ value, onChange }) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;