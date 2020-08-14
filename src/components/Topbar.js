import React from "react";
import cart from "../images/cart.png"
import dropdownMenu from "../images/dropDownMenu.png"
import DropDownPart from "./DropDownPart";

const Topbar = () =>{
    return(<div className="groupTopbar">
        <h3 className="name">Blackbox.lk</h3>
        <DropDownPart/>
        <img className="cart" src={cart} alt="cart"/>
        <button className="loginButton">Login</button>
        <img className="dropDown" src={dropdownMenu} alt="dropdown"/>

    </div>)
}
export default Topbar;