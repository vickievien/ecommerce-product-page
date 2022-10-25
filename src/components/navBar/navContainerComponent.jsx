
import NavLeftContainerComponent from "./navLeft/navLeftContainerComponent";
import NavRightContainerComponent from "./navRight/navRightContainerComponent";

const NavContainerComponent = () => {

    return (
        <nav>
            <NavLeftContainerComponent />
            <NavRightContainerComponent />
        </nav>
    )
}

export default NavContainerComponent;