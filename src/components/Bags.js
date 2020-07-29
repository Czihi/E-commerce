import React from "react";
import line from "../images/blueLine.png"
import Bag from "./Bag";

const Bags = () => {
    return (<div className="bagContainer">
        <h3>Handbags</h3>
        <img src={line} alt="line"/>
        <div className="bags">
            <Bag
                name="Fostelo Women's Shoulder Bei..."
                color="grey"
                price="Rs. 2,708,62"
            />
            <Bag
                name="Fostelo Women's Red Handbag Tourq..."
                color="red"
                price="Rs. 2,708,62"
            />
            <Bag
                name="Lapis O Lupo Women's Sling Tourq..."
                color="blue"
                price="Rs. 3,057.20"
            />
        </div>
    </div>)
};

export default Bags;