import { useState } from "react";
import CarouselThumbnailComponent from "./carouselThumbnailComponent";

const CarouselContainerComponent = () => {
    const array = [1,2,3,4];
    const images = array.map(x => `./images/image-product-${x}.jpg`);
    const [mainCarouselImage, setMainCarouselImage] = useState(`${images[0]}`);
    const imageSrcThumbnails = array.map(x => `image-product-${x}`);

    let [imageNum, setImageNum] = useState(1);
    const numOfImages = imageSrcThumbnails.length;

    const nextSlide = () => {
        let newImageNum = imageNum;
        if(imageNum === numOfImages) {
            newImageNum = 1;
        } else {
            newImageNum = imageNum + 1;
        }
        setImageNum(newImageNum);
        setMainCarouselImage(`./images/image-product-${newImageNum}.jpg`);
    }

    const prevSlide = () => {
        let newImageNum = imageNum;
        if(imageNum === 1) {
            newImageNum = numOfImages;
        } else {
            newImageNum = imageNum - 1;
        }
        setImageNum(newImageNum);
        setMainCarouselImage(`./images/image-product-${newImageNum}.jpg`);
    }

    const changeThumbnail = (image) => {
        setMainCarouselImage(`./images/${image}.jpg`);
        let imageNumPosition = (imageSrcThumbnails.indexOf(image)) + 1;
        setImageNum(imageNumPosition);
    }

    // const imageThumbnails = imageSrcThumbnails.map (x => 
    //     <img src={`./images/${x}-thumbnail.jpg`} alt="product-image" key={`thumbnail-${x}`} className={`carousel-thumbnail-image ${imageSrcThumbnails.indexOf(x) + 1 === imageNum ? 'focus' : ''}`} onClick={() => changeThumbnail(x)}/>
    // )

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
            <CarouselThumbnailComponent imageNum={imageNum} imageSrcThumbnails={imageSrcThumbnails} changeThumbnail={changeThumbnail}/>
        </section>
    )
}

export default CarouselContainerComponent;