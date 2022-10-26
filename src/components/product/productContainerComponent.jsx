import CarouselContainerComponent from "./carousel/carouselContainerComponent";
import TextContentContainerComponent from "./textContent/textContentContainer";

const ProductContainerComponent = (props) => {

    return (
        <section className="product-container">
            <CarouselContainerComponent />
            <TextContentContainerComponent  addItemToCart={props.addItemToCart} deleteItemToCart={props.deleteItemToCart} counter={props.counter} addToCartButton={props.addToCartButton} productPrice={props.productPrice} discount={props.discount} discountedPrice={props.discountedPrice} />
        </section>
    )
}

export default ProductContainerComponent;