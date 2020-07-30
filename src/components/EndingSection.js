import React from "react";
import Support from "./Support";
import QuickLinks from "./QuickLinks";
import Newsletter from "./Newsletter";
import Follow from "./Follow";

const EndingSection = () => {
    return (<div>
        <hr className="horLine"/>
        <div className="groupEnding">
            <Support/>
            <QuickLinks/>
            <Newsletter/>
            <Follow/>
        </div>
        <p className="copyright">Copyright © 2017; Black Box Private Limited. All Rights Reserved</p>
    </div>)


};
export default EndingSection;