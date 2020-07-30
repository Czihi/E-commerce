import React from "react";
import amazon from "../images/amazonLogo.png";
import casio from "../images/casioLogo.png";
import fastrack from "../images/fastrackLogo.png";
import adidas from "../images/adidasLogo.png";
import fossil from "../images/fossilLogo.png";
import google from "../images/googleLogo.png";
import puma from "../images/pumaLogo.png";
import levis from "../images/levisLogo.png";


const Brand=(props)=>{
    const logos={0: amazon, 1: casio, 2: fastrack, 3: adidas, 4: fossil, 5: google, 6: puma, 7: levis};
    return(<div className="brand">
    <img className="brandImage" src={logos[props.src]} alt={props.src}/>
    </div>)
};

export default Brand;