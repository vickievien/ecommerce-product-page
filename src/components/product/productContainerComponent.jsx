import CarouselContainerComponent from "./carousel/carouselContainerComponent";
import TextContentContainerComponent from "./textContent/textContentContainer";

const ProductContainerComponent = () => {

    return (
        <section className="product-container">
            <CarouselContainerComponent />
            <TextContentContainerComponent />
        </section>
    )
}

export default ProductContainerComponent;