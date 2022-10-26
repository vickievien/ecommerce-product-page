const PriceContainerComponent = (props) => {
    
    return (
        <section className="price-container">
            <div className="price-left">
                <p>${(props.discountedPrice).toFixed(2)}</p>
                <p>{(props.discount*100)}%</p>
            </div>
            <p>${(props.productPrice).toFixed(2)}</p>
        </section>
    )
}

export default PriceContainerComponent;