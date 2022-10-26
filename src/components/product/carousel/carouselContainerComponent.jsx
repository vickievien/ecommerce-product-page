import { useState } from "react";

const CarouselContainerComponent = () => {
    const array = [1,2,3,4];
    const images = array.map(x => `image-product-${x}.jpg`);
    const imageThumbnails = array.map(x => `image-product-${x}-thumbnail.jpg`);

    let [index, setIndex] = useState(0);
    console.log(images[0]);


    return (
        <section className="carousel-container">
            <img className="carousel-image" src={`./images/${images[index]}`} alt="image-product" />
            <div className="arrows-container">
                <div className="arrow-wrapper">
                    <img className="arrow" src="./images/icon-previous.svg" alt="previous arrow" />
                </div>
                <div className="arrow-wrapper">
                    <img className="arrow" src="./images/icon-next.svg" alt="next arrow" />
                </div>
            </div>
        </section>
    )
}

export default CarouselContainerComponent;