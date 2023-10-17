import { useState, useEffect } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Cart from'./components/Cart/Cart';
import ShoppingList from './components/ShoppingList/ShoppingList';
import QuestionForm from './components/QuestionForm/QuestionForm';
import  Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import monstera from './assets/monstera.jpg';
import basil from './assets/basil.jpg';
import olivier from './assets/olivier.jpg';
import cactus from './assets/cactus.jpg';


function App() {
  const [cart, updateCart] = useState([])
  const [first, updateFirst] = useState(true)

  useEffect(() => {
    if (first) {
      const save = JSON.parse(localStorage.getItem('cart'));
      console.log(save)
      if (save != null){
        updateCart(save);
      }
      updateFirst(false)
    } else {
      localStorage.setItem('cart',JSON.stringify(cart));
    }
}, [cart])

  return (
    <div className="App">
      <Banner/>
      <Categories/>
      <Cart 
						cart={cart}
            updateCart={updateCart}
					/>
      <ShoppingList 
            cart={cart} 
            updateCart={updateCart}
      />
      <QuestionForm />
      <Footer />
      
      
    </div>
  )
}


// const MyHeader = () => {
//   return (<header className='titre'>
//     <h1>La Maison Jungle</h1>
//     </header>)
// }

export default App;
