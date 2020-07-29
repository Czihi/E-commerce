import React from "react";
import pinkCircle from "../images/pinkCircle.png"
import play from "../images/play.png"
const Video=()=>{
    return(<div className="groupVideo">
        <img className="pinkCircle" src={pinkCircle} alt={pinkCircle}/>
        <img className="play" src={play} alt="play"/>
        <text className="watchVideo">Watch Video</text>
    </div>)
};

export default Video;