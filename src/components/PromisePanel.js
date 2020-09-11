import React from "react";
import Promise from "./Promise";
import line from "../images/blueLine.png";


const PromisePanel = () =>{

    return(<div id="promises" className="promisesContainer">
        <h3>What we promise?</h3>
        <img src={line} alt="line"/>
        <div className="promises">
            <div className="promises2">
        <Promise
            title="Black Box Trust"
            src="bbt"
            desc="Your money is yours. All refunds come with no question asked guarantee."
        />
        <Promise
            title="Shop with Confidence"
            src="swc"
            desc="At Black Box, we provide 100% assurance. If you have any issue, your money is immediately refunded."
        />
            </div>
                <div className="promises2">
        <Promise
            title="Our Promise"
            src="op"
            desc="Happiness is guaranteed at Black Box. If we fall short of your expectations, give us about."
        />
            <Promise
                title="FREE Delivery"
                src="fd"
                desc="Next day FREE delivery available for most of our products."
            />
                </div>
        </div>
    </div>)
};

export default PromisePanel;