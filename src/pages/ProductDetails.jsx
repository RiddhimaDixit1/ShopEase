import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ addToCart }) {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <main>
        <h1>Product Not Found</h1>
        <p>The product you are looking for does not exist.</p>
      </main>
    );
  }

  return (
    <main>
      <div className="product-details">
        <img src={product.image} alt={product.name} />

        <div className="details-info">
          <p className="product-category">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="details-price">₹{product.price}</p>
          <p>{product.description}</p>

          <button
            className="cart-button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;