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
    const links={0: "https://www.amazon.com/", 1:"https://www.casio.com/", 2:"https://www.fastrack.in/", 3:"https://www.adidas.com/us", 4:"https://www.fossil.com/en-us/", 5:"https://google.com/", 6:"https://us.puma.com/", 7:"https://www.levi.com/US/en_US/"};
    return(<div className="brand">
        <a href={links[props.src]} target="_blank" rel="noopener noreferrer"><img className="brandImage" src={logos[props.src]} alt={props.src} unselectable={true} draggable={false}/></a>
    </div>)
};

export default Brand;