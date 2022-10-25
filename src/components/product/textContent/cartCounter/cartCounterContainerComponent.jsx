import AddToCartButtonComponent from "./addToCartButtonComponent";
import CounterContainerComponent from "./counterContainerComponent";

const CartCounterContainerComponent = () => {

    return (
        <section className="cart-counter-container">
            <CounterContainerComponent />
            <AddToCartButtonComponent />
        </section>
    )
}

export default CartCounterContainerComponent;