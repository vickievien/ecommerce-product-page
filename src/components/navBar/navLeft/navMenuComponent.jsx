const NavMenuComponent = (props) => {

    return (
        <div className="nav-menu-container" onClick={props.toggleMobileNav}>
            <img src="/images/icon-menu.svg" alt="menu" className="nav-menu-icon"/>
        </div>
    )
}

export default NavMenuComponent;