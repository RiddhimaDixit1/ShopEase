import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ShopEase</h1>
          <p>Find useful products at simple and affordable prices.</p>

          <Link to="/products" className="shop-button">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="home-section">
        <h2>Why Shop With Us?</h2>

        <div className="features">
          <div className="feature-card">
            <h3>Quality Products</h3>
            <p>Explore products selected for everyday use.</p>
          </div>

          <div className="feature-card">
            <h3>Easy Shopping</h3>
            <p>Search and browse products with ease.</p>
          </div>

          <div className="feature-card">
            <h3>Simple Experience</h3>
            <p>A clean and easy-to-use shopping experience.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;