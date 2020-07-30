import React from "react";
import Topbar from "./Topbar";
import background from "../images/mainLogoBackground.png"
const TopPart=()=>{
    return(
        <div>
            <img className="background" src={background} alt="background"/>
            <Topbar/>
        </div>
    )
};

export default TopPart;