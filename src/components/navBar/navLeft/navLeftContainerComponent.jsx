import NavLogoComponent from "./navLogoComponent";
import NavMainListComponent from "./navMainListComponent";
import NavMenuComponent from "./navMenuComponent";


const NavLeftContainerComponent = () => {

    return (
        <div className="nav-left">        
            <NavLogoComponent />
            <NavMenuComponent />
            <NavMainListComponent />
        </div>
    )
}

export default NavLeftContainerComponent;