import AddToCartButtonComponent from "./addToCartButtonComponent";
import CounterContainerComponent from "./counterContainerComponent";

const CartCounterContainerComponent = (props) => {

    return (
        <section className="cart-counter-container">
            <CounterContainerComponent addItemToCart={props.addItemToCart} deleteItemToCart={props.deleteItemToCart}  counter={props.counter}/>
            <AddToCartButtonComponent addToCartButton={props.addToCartButton}/>
        </section>
    )
}

export default CartCounterContainerComponent;