import React from "react";
import pinkCircle from "../images/pinkCircle.png"
const Video=()=>{
    return(<div className="groupVideo">
        <img className="pinkCircle" src={pinkCircle} alt={pinkCircle} unselectable={true} draggable={false}/>
        <p className="watchVideo">Watch Video</p>
    </div>)
};

export default Video;