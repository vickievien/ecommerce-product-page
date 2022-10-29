import { useState } from "react";
import LightBoxContainerComponent from "../lightBox/lightboxContainerComponent";
import CarouselContainerComponent from "./carousel/carouselContainerComponent";
import TextContentContainerComponent from "./textContent/textContentContainer";

const ProductContainerComponent = (props) => {
    const [lightbox, setLightbox] = useState(false);

    const toggleLightBox = () => {
        setLightbox(!lightbox);
      }

    return (
        <section className="product-container">
            <CarouselContainerComponent lightbox={lightbox} toggleLightBox={toggleLightBox}/>
            <TextContentContainerComponent  addItemToCart={props.addItemToCart} deleteItemToCart={props.deleteItemToCart} counter={props.counter} addToCartButton={props.addToCartButton} productPrice={props.productPrice} discount={props.discount} discountedPrice={props.discountedPrice} />
            {lightbox ? 
                <LightBoxContainerComponent lightbox={lightbox}  className="lightbox" toggleLightBox={toggleLightBox}/>
            : ""}
        </section>
    )
}

export default ProductContainerComponent;