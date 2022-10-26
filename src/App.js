import logo from './logo.svg';
import './App.css';
import NavContainerComponent from './components/navBar/navContainerComponent';
import ProductContainerComponent from './components/product/productContainerComponent';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [navCartNum, setNavCartNum] = useState(0);
  const [navCart, setNavCart] = useState(false);

  const addItemToCart = () => {
    let newCounter = counter + 1;
    setCounter(newCounter);
  }

  const deleteItemToCart = () => {
    let newCounter = counter - 1;
    setCounter(newCounter);
  }

  const addToCartButton = () => {
    if(counter > 0) {
      setNavCart(true);
      setNavCartNum(counter);
    }else if(counter === 0) {
      setNavCart(false)
      setNavCartNum(counter);
    }
  }


  return (
    <div className="App">
      <NavContainerComponent counter={counter} navCart={navCart} navCartNum={navCartNum}/>
      <ProductContainerComponent addItemToCart={addItemToCart} deleteItemToCart={deleteItemToCart} counter={counter} addToCartButton={addToCartButton}/>
    </div>
  );
}

export default App;
