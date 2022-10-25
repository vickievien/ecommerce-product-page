const TextContentContainerComponent = () => {

    return (
        <section className="text-section-container">
            <p className="product-subtitle">Sneaker Company</p>
            <h2 className="product-title">Fall Limited Edition Sneakers</h2>
            <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <section className="price-container">
                <div className="price-left">
                    <p>$125.00</p>
                    <p>50%</p>
                </div>
                <p>$250.00</p>
            </section>
            <section className="cart-counter-container">
                <div className="counter-container">
                    <img src="/images/icon-plus.svg" alt="plus" className="counter-icon"/>
                    <p className="counter">0</p>
                    <img src="/images/icon-minus.svg" alt="minus" className="counter-icon"/>
                </div>
                <a href="#" className="button add-to-cart">
                    <img src="/images/icon-cart-white.svg" alt="cart" className="cart-icon"/>
                    <p>Add to cart</p>
                </a>
            </section>
        </section>
    )
}

export default TextContentContainerComponent;