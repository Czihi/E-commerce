import React from "react";
import line from "../images/blueLine.png"
import Sunglass from "./Sunglass";
import pinkArrow from "../images/pinkArrow.png"
import pinkLine from "../images/pinkLineDown.png"

const Sunglasses = () => {
    function show() {
        document.getElementById("va").style.width = "150px"
    }

    function hide() {
        document.getElementById("va").style.width = "0px"
    }

    return (<div className="sunglassesContainer">
        <h3>Sunglasses</h3>
        <img src={line} alt="line"/>
        <div className="sunglasses">
            <Sunglass
                name="UV protected oval wayfarer unisex sunglasses"
                color="blue"
                price="Rs. 1,549,80"
                id="sunglasses1"
            />
            <Sunglass
                name="Green Kartz Unisex Sunglasses (wyo58|40|)"
                color="green"
                price="Rs. 1,615,74"
                id="sunglasses2"
            />
            <Sunglass
                name="Raybon trendy sunglasses (White Frame) (P222BR2)"
                color="orange"
                price="Rs. 2,430.68"
                id="sunglasses3"
            />
        </div>
        <div className="groupViewAll">
            <h6 onMouseOver={show} onMouseOut={hide} className="viewAll">View All Category</h6>
            <img className="pinkArrow" src={pinkArrow} alt="pinkArrow"/>
        </div>
        <img id="va" className="pinkLine" src={pinkLine} alt="pinkLine"/>
        <br/>
        <br/>
    </div>)
};

export default Sunglasses;