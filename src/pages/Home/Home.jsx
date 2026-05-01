import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import hero from '../../assets/image/hero.png'
import hero2 from '../../assets/image/hero2.png'
function Home() {
  const [showAd, setShowAd] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  const elements = document.querySelectorAll(`.${styles.section}, .${styles.sectionReverse}`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => {
    el.classList.add(styles.hidden);
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

  return (
    <div className={styles.home}>
      
      {/* 🔥 AD */}
      {showAd && (
        <div className={styles.ad}>
          <p>🔥 Big Sale - 50% OFF 🔥</p>
          <button onClick={() => setShowAd(false)}>✖</button>
        </div>
      )}

      {/* HERO */}
      <section className={styles.hero}>
        <img
          src="https://i.pinimg.com/1200x/e9/a3/f0/e9a3f0212b8c85c32ffae7bd111f5f36.jpg"
          alt="hero"
        />
        <div className={styles.overlay}>
          <h1>Style That Speaks </h1>
          <p>
            Discover the latest trends, premium quality products, and elevate your lifestyle with us.
          </p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className={styles.section}>
        <div className={styles.text}>
          <h2>New Collection</h2>
          <p>
            Discover the latest trends, premium quality products, and elevate your lifestyle with us.
            Discover the latest trends, premium quality products, and elevate your lifestyle with us.
            The shoe’s journey from afterthought to global icon defies convention, 
            which begins to explain why the Converse Chuck Taylor All Star has 
            served as a talisman of self-expression for multiple generations.
            Discover the latest trends, premium quality products, and elevate your lifestyle with us.
            The shoe’s journey from afterthought to global icon defies convention, 
            which begins to explain why the Converse Chuck Taylor All Star has 
            served as a talisman of self-expression for multiple generations.
            Discover the latest trends, premium quality products, and elevate your lifestyle with us.
          </p>
        </div>

        <img
          src={hero}
          alt="collection"
        />
      </section>

      {/* SECTION 3 */}
      <section className={styles.sectionReverse}>
        <img
          src={hero2}
          alt="fashion"
        />

        <div className={styles.text}>
          <h2>Premium Quality</h2>
          <p>
            Our products are crafted with the highest standards to ensure durability and elegance.
            Discover the latest trends, premium quality products, and elevate your lifestyle with us.
            Discover the latest trends, premium quality products, and elevate your lifestyle with us.
            The shoe’s journey from afterthought to global icon defies convention, 
            which begins to explain why the Converse Chuck Taylor All Star has 
            served as a talisman of self-expression for multiple generations.
            Discover the latest trends, premium quality products, and elevate your lifestyle with us.
            The shoe’s journey from afterthought to global icon defies convention, 
            which begins to explain why the Converse Chuck Taylor All Star has 
            served as a talisman of self-expression for multiple generations.
            Discover the latest trends, premium quality products, and elevate your lifestyle with us.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Home;