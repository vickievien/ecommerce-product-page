import NavLogoComponent from "./navLogoComponent";
import NavMainListComponent from "./navMainListComponent";
import NavMenuComponent from "./navMenuComponent";


const NavLeftContainerComponent = (props) => {

    return (
        <div className="nav-left">        
            <NavLogoComponent />
            <NavMenuComponent toggleMobileNav={props.toggleMobileNav}/>
            <NavMainListComponent />
        </div>
    )
}

export default NavLeftContainerComponent;