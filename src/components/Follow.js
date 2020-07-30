import React from "react";
import gp from "../images/googlePlusLogo.png"
import fb from "../images/facebookLogo.png"
import t from "../images/twitterLogo.png"
import gph from "../images/googlePlusLogoHover.png"
import fbh from "../images/facebookLogoHover.png"
import th from "../images/twitterLogoHover.png"
const Follow = (props) => {

    const images={0: t, 1: th, 2: fb, 3: fbh, 4:gp, 5:gph};
    return (<div>
        <h3 className="responsiveTitle">Follow us on</h3>
        <hr/>
        <div>
            <img onMouseOver={props.twitter} onMouseOut={props.clear} className="followImage" src={images[props.logos[0]]} alt="t"/>
            <img onMouseOver={props.facebook} onMouseOut={props.clear} className="followImage" src={images[props.logos[1]]} alt="fb"/>
            <img onMouseOver={props.google}  onMouseOut={props.clear} className="followImage" src={images[props.logos[2]]} alt="gp"/>
        </div>
        <p className="follows"> contact@blackbox.lk</p>
        <p className="follows">Whatsapp - 947 666 85 333</p>
        <p className="follows">Viber - 947 666 85 333</p>
        <p className="follows">Telegram - 947 666 85 333</p>
    </div>)
};
export default Follow;