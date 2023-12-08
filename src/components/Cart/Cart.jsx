import { useState, useEffect } from "react";
import "./Cart.module.css";

const Cart = ({ cart, updateCart }) => {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce((acc, cart) => acc + cart.amount * cart.price, 0);

  useEffect(() => {
    document.title = `J'aurai ${total}€ à payer 💸`;
  }, [total]);

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <li key={`${name}-${index}`}>
                {name} {price}€ x {amount}
              </li>
            ))}
          </ul>
          <h3>Total : {total}€</h3>
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
};

export default Cart;
