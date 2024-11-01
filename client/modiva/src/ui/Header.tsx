import React from "react";
import { logo } from "../assets";

const Header = () => {
    <div className="w-full bg-whiteText">
        <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between">
            <img src={logo} alt="logo" className="w-44"/>
        </div>
    </div>
}
export default Header;