const CarouselThumbnailComponent = (props) => {
    const imageThumbnails = props.imageSrcThumbnails.map (x => 
        <img src={`./images/${x}-thumbnail.jpg`} alt="product-image" key={`thumbnail-${x}`} className={`carousel-thumbnail-image ${props.imageSrcThumbnails.indexOf(x) + 1 === props.imageNum ? 'focus' : ''}`} onClick={() => props.changeThumbnail(x)}/>
    )

    return (
        <div className="carousel-thumbnail-container">
                {imageThumbnails}
            </div>
    )
}

export default CarouselThumbnailComponent;