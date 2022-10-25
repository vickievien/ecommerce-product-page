
import { useState } from "react";
import MobileNavContainerComponent from "./mobileNav/mobileNavContainerComponent";
import NavLeftContainerComponent from "./navLeft/navLeftContainerComponent";
import NavRightContainerComponent from "./navRight/navRightContainerComponent";

const NavContainerComponent = () => {
    const [mobileNav, setMobileNav] = useState(false);

    const toggleMobileNav = () => {
        console.log('clicking');
        setMobileNav(!mobileNav);
    }

    return (
        <nav>
            <NavLeftContainerComponent toggleMobileNav={toggleMobileNav}/>
            <NavRightContainerComponent />
            {mobileNav ? <MobileNavContainerComponent toggleMobileNav={toggleMobileNav}/> : ""}
        </nav>
    )
}

export default NavContainerComponent;