import React from "react";
import Support from "./Support";
import QuickLinks from "./QuickLinks";
import Newsletter from "./Newsletter";
import Follow from "./Follow";

const EndingSection = (props) => {
    return (<div id="about">
        <hr className="horLine"/>
        <div className="groupEnding">
            <Support/>
            <QuickLinks/>
            <Newsletter/>
            <Follow
            twitter={props.twitter}
            google={props.google}
            facebook={props.facebook}
            logos={props.logos}
            clear={props.clear}
            />
        </div>
        <p className="copyright">Copyright © 2017; Black Box Private Limited. All Rights Reserved</p>
    </div>)


};
export default EndingSection;