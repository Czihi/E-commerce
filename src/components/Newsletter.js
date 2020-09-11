import React from "react";
import pinkLine from "../images/pinkLine.png";
import gp from "../images/googlePlayLogo.png";
import as from "../images/appStoreLogo.png"
const Newsletter = ()=>{
    return(<div>
        <h3 className="responsiveTitle">Blackbox.lk newsletter</h3>
        <hr/>
        <div className="mailGroup">
            <img className="searchLine" src={pinkLine} alt="pl"/>
            <input className="mailInput" placeholder="Email"/>
        </div>
        <p className="registerNow">Register now to get updates on promotions and coupons</p>
        <b>Get it On</b>
        <div className="groupApp">
        <img className="appImg" src={gp} alt="gp" unselectable={true} draggable={false}/>
        <img className="appImg" src={as} alt="as" unselectable={true} draggable={false}/>
        </div>
    </div>)
};
export default Newsletter;