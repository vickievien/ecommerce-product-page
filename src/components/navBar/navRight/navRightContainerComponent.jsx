import CartIconComponent from "./cartIconComponent";

const NavRightContainerComponent = (props) => {

    return (
        <ul className="nav-right-list">
            <li onClick={props.toggleCartModal}>
                <a href="#" className="cart-link">
                    {props.navCart ? 
                        <div className="nav-cart-num">
                            <p>{props.navCartNum}</p>
                        </div>
                    : ""
                    }
                    <CartIconComponent />
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