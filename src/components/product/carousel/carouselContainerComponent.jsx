import { useState } from "react";

const CarouselContainerComponent = () => {
    const array = [1,2,3,4];
    const images = array.map(x => `image-product-${x}.jpg`);
    const imageSrcThumbnails = array.map(x => `image-product-${x}-thumbnail.jpg`);

    let [index, setIndex] = useState(0);

    const numOfImages = images.length - 1;

    const nextSlide = () => {
        setIndex(index === numOfImages ? 0 : index + 1)
    }

    const prevSlide = () => {
        setIndex(index > 0 ? index - 1 : numOfImages)
    }

    const imageThumbnails = imageSrcThumbnails.map (x => 
        <img src={`./images/${x}`} alt="product-image" />
        )

    return (
        <section className="carousel-container">
            <img className="carousel-image" src={`./images/${images[index]}`} alt="image-product" />
            <div className="arrows-container">
                <div className="arrow-wrapper" onClick={prevSlide}>
                    <img className="arrow" src="./images/icon-previous.svg" alt="previous arrow" />
                </div>
                <div className="arrow-wrapper" onClick={nextSlide}>
                    <img className="arrow" src="./images/icon-next.svg" alt="next arrow" />
                </div>
            </div>
            <div className="carousel-thumbnail-container">
                {imageThumbnails}
            </div>
        </section>
    )
}

export default CarouselContainerComponent;