import React from "react";
import pinkLine from "../images/pinkLine.png";
import search from "../images/serach.png";

const Search = ()=>{
    return(
        <div className="searchGroup">
            <img className="searchLine" src={pinkLine} alt="pl"/>
            <input className="searchInput" placeholder="Search Your Product..."/>
            <img className="searchIcon" src={search} alt="search"/>

        </div>
    )
};
export default Search