import { useState } from "react";

const CarouselContainerComponent = () => {
    const array = [1,2,3,4];
    const images = array.map(x => `./images/image-product-${x}.jpg`);
    const [mainCarouselImage, setMainCarouselImage] = useState(`${images[0]}`);
    const imageSrcThumbnails = array.map(x => `image-product-${x}`);

    let [index, setIndex] = useState(0);

    const numOfImages = imageSrcThumbnails.length - 1;

    const nextSlide = () => {
        setIndex(index === numOfImages ? 0 : index + 1)
    }

    const prevSlide = () => {
        setIndex(index > 0 ? index - 1 : numOfImages)
    }

    const changeThumbnail = (image) => {
        setMainCarouselImage(`./images/${image}.jpg`);
    }

    const imageThumbnails = imageSrcThumbnails.map (x => 
        <img src={`./images/${x}-thumbnail.jpg`} alt="product-image" key={`thumbnail-${x}`} className="carousel-thumbnail-image" onClick={() => changeThumbnail(x)}/>
    )

    return (
        <section className="carousel-container">
            <img className="carousel-image" src={mainCarouselImage} alt="image-product" />
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