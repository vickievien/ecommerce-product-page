import logo from './logo.svg';
import './App.css';
import NavContainerComponent from './components/navBar/navContainerComponent';
import ProductContainerComponent from './components/product/productContainerComponent';
import { useState } from 'react';

function App() {
  const [numItemInCart, setNumItemInCart] = useState(0);

  const addItemToCart = () => {
    let newNumItemInCart = numItemInCart + 1;
    setNumItemInCart(newNumItemInCart);
  }

  const deleteItemToCart = () => {
    let newNumItemInCart = numItemInCart - 1;
    setNumItemInCart(newNumItemInCart);
  }


  return (
    <div className="App">
      <NavContainerComponent />
      <ProductContainerComponent addItemToCart={addItemToCart} deleteItemToCart={deleteItemToCart} numItemInCart={numItemInCart}/>
    </div>
  );
}

export default App;
