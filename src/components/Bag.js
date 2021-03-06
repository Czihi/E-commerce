import React from "react";
import blueBag from "../images/blueHandbag.png"
import redBag from "../images/redHandbag.png"
import greyBag from "../images/grayHandbag.png"
import heart from "../images/heart.png"
import heartClicked from "../images/heartClicked.png"
const Bag = (props) => {
    const heartIcons={"heart": heart, "heartClicked": heartClicked};

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    function show() {
        document.getElementById(props.id).style.opacity = "1";
    }

    function hide() {
        document.getElementById(props.id).style.opacity = "0";

    }

    const bags = {"blue": blueBag, "red": redBag, "grey": greyBag};
    return (<div onMouseOver={show} onMouseOut={hide} className="bag">
        <div className="normalBag">
            <p className="bagName">{props.name}</p>
            <img id={"image" + props.id} className="bagImage" src={bags[props.color]} alt={props.color} unselectable={true} draggable={false}/>
            <div id={"gh" + props.id} className="groupHeartPrice">
                <div className="price">{props.price}</div>
                <img onClick={props.clickHeart} className="heart" src={heartIcons[props.heartIcon]} alt="fav" unselectable={true} draggable={false}/>
            </div>
        </div>
        <div id={props.id} className="groupBuy">
            <button onClick={topFunction} className="add">Add to Cart</button>
            <button onClick={topFunction} className="buy">Buy Now</button>
        </div>
    </div>)
};

export default Bag;