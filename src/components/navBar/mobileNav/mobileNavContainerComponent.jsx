import NavMainListItemsComponent from "../navLeft/navMainListItemsComponent";

const MobileNavContainerComponent = (props) => {

    return (
        <div className="mobile-nav-container">
            <img src="/images/icon-close.svg" alt="close" className="nav-close-icon" onClick={props.toggleMobileNav}/>
            <ul className="mobile-nav-list-container">
                <NavMainListItemsComponent />
            </ul>
        </div>
    )
}

export default MobileNavContainerComponent;