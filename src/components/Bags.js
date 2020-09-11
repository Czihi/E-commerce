import React from "react";
import line from "../images/blueLine.png"
import left from "../images/left.png"
import right from "../images/right.png"
import Bag from "./Bag";

const Bags = (props) => {
    return (<div id="handbags" className="bagContainer">
        <img src={left} alt="left" className="left" unselectable={true} draggable={false}/>
        <img src={right} alt="right" className="right" unselectable={true} draggable={false}/>
        <p className="bags__title">Handbags</p>
        <img className="line" src={line} alt="line"/>
        <div className="bags">
            <Bag
                name="Fostelo Women's Shoulder Bei..."
                color="grey"
                price="Rs. 2,708,62"
                id="bag1"
                clickHeart={() => props.clickHeart(0)}
                heartIcon={props.heartIcon[0]}
            />
            <Bag
                name="Fostelo Women's Red Handbag Tourq..."
                color="red"
                price="Rs. 2,708,62"
                id="bag2"
                clickHeart={() => props.clickHeart(1)}
                heartIcon={props.heartIcon[1]}
            />
            <Bag
                name="Lapis O Lupo Women's Sling Tourq..."
                color="blue"
                price="Rs. 3,057.20"
                id="bag3"
                clickHeart={() => props.clickHeart(2)}
                heartIcon={props.heartIcon[2]}
            />
        </div>
    </div>)
};

export default Bags;