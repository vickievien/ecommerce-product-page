import CartCounterContainerComponent from "./cartCounter/cartCounterContainerComponent";
import PriceContainerComponent from "./cartCounter/priceContainerComponent";

const TextContentContainerComponent = () => {

    return (
        <section className="text-section-container">
            <p className="product-subtitle">Sneaker Company</p>
            <h2 className="product-title">Fall Limited Edition Sneakers</h2>
            <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <PriceContainerComponent />
            <CartCounterContainerComponent />
        </section>
    )
}

export default TextContentContainerComponent;