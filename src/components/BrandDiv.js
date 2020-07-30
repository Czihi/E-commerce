import React from "react";
import Brands from "./Brands";
import line from "../images/blueLine.png";

const BrandDiv=()=>{
    return(<div className="brandsContainer">
        <h3 className="brandsContainerTitle">Our Brands</h3>
        <img className="blueLine" src={line} alt="line"/>
        <Brands
        logo={[0, 1 ,2 ,3]}
        />
        <Brands
            logo={[4, 5, 6, 7]}
        />
    </div>)
};

export default BrandDiv;