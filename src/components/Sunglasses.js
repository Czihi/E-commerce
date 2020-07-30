import React from "react";
import line from "../images/blueLine.png"
import Sunglass from "./Sunglass";
import pinkArrow from "../images/pinkArrow.png"
const Sunglasses = () => {
    return (<div className="sunglassesContainer">
        <h3>Sunglasses</h3>
        <img src={line} alt="line"/>
        <div className="sunglasses">
            <Sunglass
                name="UV protected oval wayfarer unisex sunglasses"
                color="blue"
                price="Rs. 1,549,80"
            />
            <Sunglass
                name="Green Kartz Unisex Sunglasses (wyo58|40|)"
                color="green"
                price="Rs. 1,615,74"
            />
            <Sunglass
                name="Raybon trendy sunglasses (White Frame) (P222BR2)"
                color="orange"
                price="Rs. 2,430.68"
            />
        </div>
        <div className="groupViewAll">
        <h6 className="viewAll">View All Category</h6>
        <img className="pinkArrow" src={pinkArrow} alt="pinkArrow"/>
        </div>
        <br/>
        <br/>
    </div>)
};

export default Sunglasses;