import React from "react";
import blueBag from "../images/blueHandbag.png"
import redBag from "../images/redHandbag.png"
import greyBag from "../images/grayHandbag.png"
import heart from "../images/heart.png"
const Bag=(props)=>{
    const bags={"blue": blueBag, "red": redBag, "grey":greyBag}
    return(<div className="bag">
        <h5 className="bagName">{props.name}</h5>
        <img src={bags[props.color]} alt={props.color}/>
        <div className="groupHeartPrice">
        <h6 className="price">{props.price}</h6>
        <img className="heart" src={heart} alt="fav"/>
        </div>
    </div>)
}

export default Bag;