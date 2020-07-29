import React from "react";
import Topbar from "./Topbar";
import background from "../images/mainLogoBackground.png"
import shop from "../images/mainShopLogo.png"
const TopPart=()=>{
    return(
        <div>
            <img className="background" src={background} alt="background"/>
            <img className="shop" src={shop} alt="shop"/>
            <Topbar/>
        </div>
    )
};

export default TopPart;