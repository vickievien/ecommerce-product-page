const CartModalComponent = (props) => {

    return (
        <section className="cart-modal-container">
            <div className="cart-modal-info-container">
                <h3 className="cart-modal-title">Cart</h3>
                {props.navCartNum > 0 ? 
                    <>
                        <ul className="cart-list-container">
                            <li className="cart-list-item-container">
                                <a href="#" className="cart-list-item-image-link">
                                    <img src="./images/image-product-1-thumbnail.jpg" alt="product-image" />
                                </a>
                                <div className="cart-list-item-detail-container">
                                    <p>Fall Limited Edition Sneakers</p>
                                    <p>${(props.discountedPrice).toFixed(2)} x {props.navCartNum} <span className="cart-total">${(props.cartTotal).toFixed(2)}</span> </p>
                                </div>
                                <img src="./images/icon-delete.svg" className="icon-delete"/>
                            </li>
                        </ul>
                        <a href="#" className="button-primary checkout ">Checkout</a>        
                    </>
                :
                    <p className="cart-empty">Your cart is empty.</p>
                }
                
            </div>
        </section>
    )
}

export default CartModalComponent;