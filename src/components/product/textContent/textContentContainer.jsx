import CartCounterContainerComponent from "./cartCounter/cartCounterContainerComponent";
import PriceContainerComponent from "./cartCounter/priceContainerComponent";

const TextContentContainerComponent = (props) => {

    return (
        <section className="text-section-container">
            <p className="product-subtitle">Sneaker Company</p>
            <h2 className="product-title">Fall Limited Edition Sneakers</h2>
            <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <PriceContainerComponent productPrice={props.productPrice} discount={props.discount} discountedPrice={props.discountedPrice} />
            <CartCounterContainerComponent  addItemToCart={props.addItemToCart} deleteItemToCart={props.deleteItemToCart} counter={props.counter} addToCartButton={props.addToCartButton}/>
        </section>
    )
}

export default TextContentContainerComponent;