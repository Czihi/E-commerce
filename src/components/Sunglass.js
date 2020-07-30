import React from "react";
import blueGlass from "../images/blueGlasses.png"
import greenGlass from "../images/greenGlasses.png"
import orangeGlass from "../images/orangeGlasses.png"
import heart from "../images/heart.png"

const Sunglass = (props) => {
    function show() {
        document.getElementById(props.id).style.display = "flex";
        document.getElementById("image" + props.id).style.width = "60%";
        document.getElementById("gh" + props.id).style.bottom = "25%"
    }

    function hide() {
        document.getElementById(props.id).style.display = "none";
        document.getElementById("image" + props.id).style.width = "80%";
        document.getElementById("gh" + props.id).style.bottom = "5%"
    }

    const bags = {"blue": blueGlass, "green": greenGlass, "orange": orangeGlass};
    return (<div onMouseOver={show} onMouseOut={hide} className="sunglass">
        <div className="normalGlasses">
            <h5 className="sunglassName">{props.name}</h5>
            <img id={"image" + props.id} className="sunglassesImage" src={bags[props.color]} alt={props.color}/>
            <div id={"gh" + props.id} className="groupHeartPrice">
                <h6 className="price">{props.price}</h6>
                <img className="heart" src={heart} alt="fav"/>
            </div>
        </div>
        <div id={props.id} className="groupBuy">
            <button className="add">Add to Cart</button>
            <button className="buy">Buy Now</button>
        </div>
    </div>)
}

export default Sunglass;