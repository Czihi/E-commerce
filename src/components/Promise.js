import React from "react";
import bbt from "../images/blackBoxTrust.png"
import swc from "../images/shopWithConfidence.png"
import op from "../images/ourPromise.png"
import fd from "../images/freeDelievery.png"
import pinkArrow from "../images/pinkArrow.png";
const Promise = (props) => {
    const images={"bbt": bbt, "swc": swc, "op": op, "fd":fd};
    return(<div className="promise">
        <img className="promiseImage" src={images[props.src]} alt={props.src}/>
        <h5 className="title">{props.title}</h5>
        <div className="desc">{props.desc}</div>
        <div className="groupKnowMore">
            <h6 className="knowMore">Know More</h6>
            <img className="pinkArrow" src={pinkArrow} alt="pinkArrow"/>
        </div>
    </div>)
};

export default Promise;