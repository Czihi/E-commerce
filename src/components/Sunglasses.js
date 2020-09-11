import React from "react";
import line from "../images/blueLine.png"
import Sunglass from "./Sunglass";
import pinkArrow from "../images/pinkArrow.png"
import pinkLine from "../images/pinkLineDown.png"
import left from "../images/left.png";
import right from "../images/right.png";


const Sunglasses = (props) => {
    function show() {
        document.getElementById("va").style.width = "150px"
    }

    function hide() {
        document.getElementById("va").style.width = "0px"
    }

    return (<div id="sunglasses" className="sunglassesContainer">
        <img src={left} alt="left" className="sunglasses__left" unselectable={true} draggable={false}/>
        <img src={right} alt="right" className="sunglasses__right" unselectable={true} draggable={false}/>
        <p className="sunglasses__title">Sunglasses</p>
        <img className="blueLine" src={line} alt="line"/>
        <div className="sunglasses">
            <Sunglass
                name="UV protected oval wayfarer unisex sunglasses"
                color="blue"
                price="Rs. 1,549,80"
                id="sunglasses1"
                clickHeart={() => props.clickHeart(3)}
                heartIcon={props.heartIcon[3]}
            />
            <Sunglass
                name="Green Kartz Unisex Sunglasses (wyo58|40|)"
                color="green"
                price="Rs. 1,615,74"
                id="sunglasses2"
                clickHeart={() => props.clickHeart(4)}
                heartIcon={props.heartIcon[4]}
            />
            <Sunglass
                name="Raybon trendy sunglasses (White Frame) (P222BR2)"
                color="orange"
                price="Rs. 2,430.68"
                id="sunglasses3"
                clickHeart={() => props.clickHeart(5)}
                heartIcon={props.heartIcon[5]}
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