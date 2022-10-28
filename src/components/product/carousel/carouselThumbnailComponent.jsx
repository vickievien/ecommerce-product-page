const CarouselThumbnailComponent = (props) => {
    const imageThumbnails = props.imageSrcThumbnails.map (x => 
        <div className={`carousel-thumbnail-image-wrapper ${props.imageSrcThumbnails.indexOf(x) + 1 === props.imageNum ? 'focus' : ''}`} onClick={() => props.changeThumbnail(x)}>
            <img src={`./images/${x}-thumbnail.jpg`} alt="product-image" key={`thumbnail-${x}`} className="carousel-thumbnail-image" />
        </div>
    )

    return (
        <div className="carousel-thumbnail-container">
                {imageThumbnails}
            </div>
    )
}

export default CarouselThumbnailComponent;