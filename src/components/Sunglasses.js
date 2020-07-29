import React from "react";
import line from "../images/blueLine.png"
import Sunglass from "./Sunglass";

const Sunglasses = () => {
    return (<div className="sunglassesContainer">
        <h3>Sunglasses</h3>
        <img src={line} alt="line"/>
        <div className="sunglasses">
            <Sunglass
                name="Fostelo Women's Shoulder Bei..."
                color="blue"
                price="Rs. 2,708,62"
            />
            <Sunglass
                name="Fostelo Women's Red Handbag Tourq..."
                color="green"
                price="Rs. 2,708,62"
            />
            <Sunglass
                name="Lapis O Lupo Women's Sling Tourq..."
                color="orange"
                price="Rs. 3,057.20"
            />
        </div>
    </div>)
};

export default Sunglasses;