import React from "react";
import gp from "../images/googlePlusLogo.png"
import fb from "../images/facebookLogo.png"
import t from "../images/twitterLogo.png"
const Follow = () => {
    return (<div>
        <h3>Follow us on</h3>
        <hr/>
        <div>
            <img className="followImage" src={t} alt="t"/>
            <img className="followImage" src={fb} alt="fb"/>
            <img className="followImage" src={gp} alt="gp"/>
        </div>
        <p className="follows"> contact@blackbox.lk</p>
        <p className="follows">Whatsapp - 947 666 85 333</p>
        <p className="follows">Viber - 947 666 85 333</p>
        <p className="follows">Telegram - 947 666 85 333</p>
    </div>)
};
export default Follow;