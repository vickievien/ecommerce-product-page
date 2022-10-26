import logo from './logo.svg';
import './App.css';
import NavContainerComponent from './components/navBar/navContainerComponent';
import ProductContainerComponent from './components/product/productContainerComponent';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);
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
    let newNum = navCartNum + counter;
    setNavCartNum(newNum);
    setCounter(1)

    if(newNum > 0) {
      setNavCart(true);
    }else if(newNum === 0) {
      setNavCart(false)
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
