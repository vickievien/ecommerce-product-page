import logo from './logo.svg';
import './App.css';
import NavContainerComponent from './components/navBar/navContainerComponent';
import ProductContainerComponent from './components/product/productContainerComponent';
import { useState } from 'react';

function App() {
  const [numItemInCart, setNumItemInCart] = useState(0);
  const [navCartNum, setNavCartNum] = useState(0);
  const [navCart, setNavCart] = useState(false);

  const addItemToCart = () => {
    let newNumItemInCart = numItemInCart + 1;
    setNumItemInCart(newNumItemInCart);
  }

  const deleteItemToCart = () => {
    let newNumItemInCart = numItemInCart - 1;
    setNumItemInCart(newNumItemInCart);
  }

  const addToCartButton = () => {
    if(numItemInCart > 0) {
      setNavCart(true);
      setNavCartNum(numItemInCart);
    }else if(numItemInCart === 0) {
      setNavCart(false)
      setNavCartNum(numItemInCart);
    }
  }


  return (
    <div className="App">
      <NavContainerComponent numItemInCart={numItemInCart} navCart={navCart} navCartNum={navCartNum}/>
      <ProductContainerComponent addItemToCart={addItemToCart} deleteItemToCart={deleteItemToCart} numItemInCart={numItemInCart} addToCartButton={addToCartButton}/>
    </div>
  );
}

export default App;
