import { useState, useEffect } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Cart from'./components/Cart/Cart';
import ShoppingList from './components/ShoppingList/ShoppingList';
import QuestionForm from './components/QuestionForm/QuestionForm';
import  Footer from './components/Footer/Footer';



const App = () => {
  const Description = 'Ici achetez toutes les plantes dont vous avez toujours rêvé';
  const [cart, updateCart] = useState([])
  const [first, updateFirst] = useState(true)

  useEffect(() => {
    first
      ? (() => {
          const save = JSON.parse(localStorage.getItem('cart'));
          console.log(save);
          save !== null && updateCart(save);
          updateFirst(false);
        })()
      : localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart, first]);

  return (
    <div className="App">
      <Banner/>
      <div className='lmj-layout-inner'>
        <Cart 
						cart={cart}
            updateCart={updateCart}
					/>
        <ShoppingList 
            cart={cart} 
            updateCart={updateCart}
        />
      </div>
      <QuestionForm />
      <Footer />
    </div>
  )
}


export default App;
