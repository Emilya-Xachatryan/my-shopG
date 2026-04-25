import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <h4>Premium Sports Brand</h4>
          <h1>Jordan & Adidas Inspired Streetwear Store</h1>
          <p>
            Discover next-level sneakers, backpacks and sportswear designed for
            performance and style.
          </p>

          <button>Shop Now</button>

          <span className={styles.location}>📍 Global Online Store</span>
        </div>
      </section>

      {/* FEATURES */}
      <div className={styles.features}>
        <div>🚚 Fast Worldwide Shipping</div>
        <div>💰 Secure Payments</div>
        <div>🏆 Premium Quality</div>
        <div>🔒 100% Safe Checkout</div>
      </div>

      {/* ABOUT */}
      <section className={styles.about}>
        <div className={styles.aboutText}>
          <h2>About Our Brand</h2>
          <p>
            We are inspired by Jordan & Adidas culture — combining streetwear,
            sport performance and modern fashion into one identity.
            Our mission  is to deliver premium sneakers and apparel worldwide.
             We are inspired by Jordan & Adidas culture — combining streetwear,
            sport performance and modern fashion into one identity.
            Our mission  is to deliver premium sneakers and apparel worldwide.
             We are inspired by Jordan & Adidas culture — combining streetwear,
            sport performance and modern fashion into one identity.
            Our mission  is to deliver premium sneakers and apparel worldwide.
            is to deliver premium sneakers and apparel worldwide.
          </p>
        </div>

        <div className={styles.aboutImg}>
          <img
            src="https://i.pinimg.com/1200x/dd/c6/c7/ddc6c7586448c1644018beda7e1e7c8f.jpg"
            alt="streetwear"
          />
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className={styles.products}>
        <h2>Featured Drops</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="https://i.pinimg.com/736x/1a/8d/8a/1a8d8a0b5aa16df4d7c81f7f3b1b7346.jpg" alt="" />
            <h4>Urban Street Style</h4>
            <span>Jordan Inspired Look</span>
          </div>

          <div className={styles.card}>
            <img src="https://i.pinimg.com/736x/d8/cd/f8/d8cdf8215ad657c1d73e91376af0edda.jpg" alt="" />
            <h4>Adidas Training Fit</h4>
            <span>Sport Performance</span>
          </div>

          <div className={styles.card}>
            <img src="https://i.pinimg.com/1200x/2a/04/ff/2a04ffa2aecd897eb93045cb53004567.jpg" alt="" />
            <h4>Street Basketball Vibe</h4>
            <span>Streetwear Culture</span>
          </div>

          <div className={styles.card}>
            <img src="https://i.pinimg.com/736x/54/3c/dc/543cdc46d31f5f6d900a8e78f2228dd5.jpg"  alt=""/>
            <h4>Running Lifestyle</h4>
            <span>Active Wear</span>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className={styles.map}>
        <h2>Our Global Presence</h2>
        <iframe
          src="https://www.google.com/maps?q=New York&output=embed"
          loading="lazy" 
          title="map"
        />
      </section>

    </div>
  );
}