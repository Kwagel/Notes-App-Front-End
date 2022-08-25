import React from 'react';
import {Link} from "react-router-dom";
const NavBar = () => {
    return (

        <div className="u-custom-menu u-nav-container">
            <ul className="u-nav u-spacing-30 u-unstyled u-nav-1">
                <li className="u-nav-item"><a
                    className="u-border-2 u-border-active-palette-1-base u-border-grey-90 u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                    href="Home.html" style="padding: 10px 0px;">Home</a>
                    <Link to="/App">Notes App</Link>
                </li>
                <li className="u-nav-item"><a
                    className="u-border-2 u-border-active-palette-1-base u-border-grey-90 u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                    href="About.html" style="padding: 10px 0px;">About</a>
                    <Link to="/About">About </Link>
                </li>
                <li className="u-nav-item"><a
                    className="u-border-2 u-border-active-palette-1-base u-border-grey-90 u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                    href="Login.html" style="padding: 10px 0px;">Login</a>
                    <Link to="/Login">Login</Link>
                </li>
            </ul>
        </div>
    )
}
export default NavBar
