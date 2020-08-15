import React from "react";
import blueGlass from "../images/blueGlasses.png"
import greenGlass from "../images/greenGlasses.png"
import orangeGlass from "../images/orangeGlasses.png"
import heart from "../images/heart.png"
import heartClicked from "../images/heartClicked.png";

const Sunglass = (props) => {
    const heartIcons={"heart": heart, "heartClicked": heartClicked}
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    function show() {
        document.getElementById(props.id).style.opacity="1"
    }

    function hide() {
        document.getElementById(props.id).style.opacity="0"
    }

    const bags = {"blue": blueGlass, "green": greenGlass, "orange": orangeGlass};
    return (<div onMouseOver={show} onMouseOut={hide} className="sunglass">
        <div className="normalGlasses">
            <p className="sunglassName">{props.name}</p>
            <img id={"image" + props.id} className="sunglassesImage" src={bags[props.color]} alt={props.color}/>
            <div id={"gh" + props.id} className="groupHeartPrice">
                <div className="price">{props.price}</div>
                <img onClick={props.clickHeart} className="heart" src={heartIcons[props.heartIcon]} alt="fav"/>
            </div>
        </div>
        <div id={props.id} className="groupBuy">
            <button  onClick={topFunction} className="add">Add to Cart</button>
            <button  onClick={topFunction} className="buy">Buy Now</button>
        </div>
    </div>)
}

export default Sunglass;