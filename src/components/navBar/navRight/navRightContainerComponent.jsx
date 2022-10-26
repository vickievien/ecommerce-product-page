const NavRightContainerComponent = (props) => {

    return (
        <ul className="nav-right-list">
            <li>
                <a href="#" className="cart-link">
                    {props.navCart ? 
                        <div className="nav-cart-num">
                            <p>{props.navCartNum}</p>
                        </div>
                    : ""
                    }
                    <img src="/images/icon-cart.svg" alt="cart" />
                </a>
            </li>
            <li>
                <a href="#" className="avatar-link">
                    <img src="/images/image-avatar.png" alt="avatar" />
                </a>
            </li>
        </ul>
    )
}

export default NavRightContainerComponent;