import React from "react";
import cart from "../images/cart.png"
import dropdownMenu from "../images/dropDownMenu.png"
import DropDownPart from "./DropDownPart";

const Topbar = () =>{
    return(<div className="groupTopbar">
        <h3 className="name">Blackbox.lk</h3>
        <DropDownPart/>
        <div className="cart">
        <img className="cart__image" src={cart} alt="cart" unselectable={true} draggable={false}/>
        <div className="cart__number">1</div>
        </div>
        <button className="loginButton">Login</button>
        <img className="dropDown" src={dropdownMenu} alt="dropdown" unselectable={true} draggable={false}/>

    </div>)
};
export default Topbar;