
const NavContainerComponent = () => {

    return (
        <nav>
            <div className="nav-left">
                <a href="#" className="nav-logo-link">
                    <img src="/images/logo.svg" alt="logo" className="nav-logo"/>
                </a>
                <div className="nav-menu-container">
                    <img src="/images/icon-menu.svg" alt="menu" className="nav-menu-icon"/>
                </div>
                <ul className="nav-main-list">
                    <li>
                        <a href="#">Collections</a>
                    </li>
                    <li>
                        <a href="#">Men</a>
                    </li>
                    <li>
                        <a href="#">Women</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <ul className="nav-right-list">
                <li>
                    <a href="#" className="cart-link">
                        <img src="/images/icon-cart.svg" alt="cart" />
                    </a>
                </li>
                <li>
                    <a href="#" className="avatar-link">
                        <img src="/images/image-avatar.png" alt="avatar" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavContainerComponent;