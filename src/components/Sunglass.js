import React from "react";
import blueGlass from "../images/blueGlasses.png"
import greenGlass from "../images/greenGlasses.png"
import orangeGlass from "../images/orangeGlasses.png"
import heart from "../images/heart.png"
const Sunglass=(props)=>{
    const bags={"blue": blueGlass, "green": greenGlass, "orange":orangeGlass}
    return(<div className="sunglass">
        <h5 className="sunglassName">{props.name}</h5>
        <img  className="sunglassesImage" src={bags[props.color]} alt={props.color}/>
        <div className="groupHeartPrice">
            <h6 className="price">{props.price}</h6>
            <img className="heart" src={heart} alt="fav"/>
        </div>
    </div>)
}

export default Sunglass;