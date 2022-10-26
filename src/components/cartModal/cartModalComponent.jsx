const CartModalComponent = () => {

    return (
        <section className="cart-modal-container">
            <h3 className="cart-modal-title">Cart</h3>
            <ul className="cart-list-container">
                <li className="cart-list-item-container">
                    <a href="#" className="cart-list-item-image-link">
                        <img src="./images/image-product-1-thumbnail.jpg" alt="product-image" />
                    </a>
                    <div className="cart-list-item-detail-container">
                        <p>Fall Limited Edition Sneakers</p>
                        <p>CALCULATE PRICE</p>
                    </div>
                </li>
            </ul>
            <a href="#" className="button-primary">Checkout</a>
        </section>
    )
}

export default CartModalComponent;