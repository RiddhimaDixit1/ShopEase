function Cart({ cart, setCart }) {
  function removeFromCart(index) {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  }

  const total = cart.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  return (
    <main>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map((product, index) => (
            <div className="cart-item" key={index}>
              <img src={product.image} alt={product.name} />

              <div className="cart-item-info">
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>

                <button
                  className="remove-button"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h2>Total: ₹{total}</h2>
          </div>
        </div>
      )}
    </main>
  );
}

export default Cart;