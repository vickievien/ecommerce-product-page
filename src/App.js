import logo from './logo.svg';
import './App.css';
import NavContainerComponent from './components/navBar/navContainerComponent';
import ProductContainerComponent from './components/product/productContainerComponent';
import { useState } from 'react';
import CartModalComponent from './components/cartModal/cartModalComponent';

function App() {
  const [counter, setCounter] = useState(1);
  const [navCartNum, setNavCartNum] = useState(0);
  const [navCart, setNavCart] = useState(false);
  const [productPrice, setProductPrice] = useState(250);
  const [discount, setDiscount] = useState(0.5);
  const [discountedPrice, setDiscountedPrice] = useState(productPrice * discount);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartModal, setCartModal] = useState(false);

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

    setCartTotal(newNum * discountedPrice);
  }

  const toggleCartModal = () => {
    setCartModal(!cartModal);
  }


  return (
    <div className="App">
      <NavContainerComponent counter={counter} navCart={navCart} navCartNum={navCartNum} toggleCartModal={toggleCartModal}/>
      <ProductContainerComponent addItemToCart={addItemToCart} deleteItemToCart={deleteItemToCart} counter={counter} addToCartButton={addToCartButton} productPrice={productPrice} discount={discount} discountedPrice={discountedPrice} />
      {cartModal ?
      <CartModalComponent cartTotal={cartTotal} discountedPrice={discountedPrice} navCartNum={navCartNum}/>
      :
      ""}
    </div>
  );
}

export default App;
