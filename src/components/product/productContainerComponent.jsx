import CarouselContainerComponent from "./carousel/carouselContainerComponent";
import TextContentContainerComponent from "./textContent/textContentContainer";

const ProductContainerComponent = (props) => {

    return (
        <section className="product-container">
            <CarouselContainerComponent />
            <TextContentContainerComponent  addItemToCart={props.addItemToCart} deleteItemToCart={props.deleteItemToCart} numItemInCart={props.numItemInCart}/>
        </section>
    )
}

export default ProductContainerComponent;