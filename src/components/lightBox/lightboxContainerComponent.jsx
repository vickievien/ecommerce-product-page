import CarouselContainerComponent from "../product/carousel/carouselContainerComponent";
import ImageCloseComponent from "./imageCloseComponent";

const LightBoxContainerComponent = (props) => {

    return (
        <section className="lightbox-container">
            <ImageCloseComponent toggleLightBox={props.toggleLightBox}/>
            <CarouselContainerComponent lightbox={props.lightbox} className="lightbox"/>
        </section>
    )
}

export default LightBoxContainerComponent;