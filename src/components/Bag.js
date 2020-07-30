import React from "react";
import blueBag from "../images/blueHandbag.png"
import redBag from "../images/redHandbag.png"
import greyBag from "../images/grayHandbag.png"
import heart from "../images/heart.png"

const Bag = (props) => {
    function show() {
        document.getElementById(props.id).style.display = "flex";
        document.getElementById("image" + props.id).style.width = "60%";
        document.getElementById("gh" + props.id).style.bottom = "20%"
    }

    function hide() {
        document.getElementById(props.id).style.display = "none";
        document.getElementById("image" + props.id).style.width = "80%";
        document.getElementById("gh" + props.id).style.bottom = "5%"
    }

    const bags = {"blue": blueBag, "red": redBag, "grey": greyBag};
    return (<div onMouseOver={show} onMouseOut={hide} className="bag">
        <div className="normalBag">
            <h5 className="bagName">{props.name}</h5>
            <img id={"image" + props.id} className="bagImage" src={bags[props.color]} alt={props.color}/>
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

export default Bag;