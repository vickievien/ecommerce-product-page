
import { useState } from "react";
import MobileNavContainerComponent from "./mobileNav/mobileNavContainerComponent";
import NavLeftContainerComponent from "./navLeft/navLeftContainerComponent";
import NavRightContainerComponent from "./navRight/navRightContainerComponent";

const NavContainerComponent = (props) => {
    const [mobileNav, setMobileNav] = useState(false);

    const toggleMobileNav = () => {
        console.log('clicking');
        setMobileNav(!mobileNav);
    }

    return (
        <nav>
            <NavLeftContainerComponent toggleMobileNav={toggleMobileNav}/>
            <NavRightContainerComponent navCart={props.navCart} navCartNum={props.navCartNum}/>
            {mobileNav ? <MobileNavContainerComponent toggleMobileNav={toggleMobileNav}/> : ""}
        </nav>
    )
}

export default NavContainerComponent;