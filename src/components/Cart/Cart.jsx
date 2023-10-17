import { useState, useEffect } from 'react';



const Cart = ({ cart, updateCart }) => {
    const items = Object.keys(cart)
    const [isOpen, setIsOpen] = useState(true);
    const total = items.reduce(
		(acc, item) => acc + cart[item].amount * cart[item].price,
		0
	)

    useEffect(() => {
        alert(`J'aurai ${total}€ à payer 💸`)
    }, [total])
    
    return isOpen ? (
        <div className='lmj-cart'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>
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
        <div className='lmj-cart-closed'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>
                Ouvrir le Panier
            </button>
        </div>
    );
};


export default Cart;

// const prix_plante1 = 8;
// const prix_plante2 = 10;
// const prix_bouquet= 15;
  // return (<div className='lmj-cart'>
  //   <h2>Panier</h2>
  //   <ul>
  //     <li>Monstrera {prix_plante1}€</li>
  //     <li>Lierre {prix_plante2} €</li>
  //     <li>Bouquet de fleurs {prix_bouquet} €</li>
  //   </ul>
  //   <div>
  //     Total : {prix_plante1 + prix_plante2 + prix_bouquet}
  //   </div>
  // </div>)
    