const AddToCartButtonComponent = (props) => {

    return (
        <a href="#" className="button button-primary add-to-cart" onClick={props.addToCartButton}>
            <img src="/images/icon-cart-white.svg" alt="cart" className="cart-icon"/>
            <p>Add to cart</p>
        </a>
    )
}

export default AddToCartButtonComponent;