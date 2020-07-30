import React from "react";
import Brand from "./Brand";


const Brands=(props)=>{
    return(<div className="brands">
        <Brand
        src={props.logo[0]}
        />
        <Brand
            src={props.logo[1]}
        />
        <Brand
            src={props.logo[2]}
        />
        <Brand
            src={props.logo[3]}
        />
    </div>)
};

export default Brands;