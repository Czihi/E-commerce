import React from "react";
const DropDownPart=()=>{
    function goToCategory(){
        const option=document.getElementById("category").value;
        if(option==="1"){
            const element=document.getElementById("handbags");
            element.scrollIntoView()
        }else{
            if(option==="2"){
                const element=document.getElementById("sunglasses");
                element.scrollIntoView()
            }else{
                if(option==="3"){
                    const element=document.getElementById("promises");
                    element.scrollIntoView()
                }else{
                    if(option==="4"){
                        const element=document.getElementById("about");
                        element.scrollIntoView()
                    }
                }
            }
        }
    }
    return(
    <div className="dropdownMenu">
        <select id="category" defaultValue="categories" className="dropdown__categories" onChange={()=>{goToCategory()}}>
            <option value="categories" disabled hidden>Categories</option>
            <option onSelect={()=>{console.log("test")}} value="1">Handbags</option>
            <option value="2">Sunglasses</option>
            <option value="3">Our promises</option>
            <option value="4">About</option>
        </select>
    </div>
    )
};
export default DropDownPart;