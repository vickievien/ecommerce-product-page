const AddToCartButtonComponent = (props) => {

    return (
        <a href="#" className="button add-to-cart">
            <img src="/images/icon-cart-white.svg" alt="cart" className="cart-icon"/>
            <p onClick={props.addToCartButton}>Add to cart</p>
        </a>
    )
}

export default AddToCartButtonComponent;