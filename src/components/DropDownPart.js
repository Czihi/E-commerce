import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/cjs/DropdownButton";
const DropDownPart=()=>{
    return(
    <div className="dropdownMenu">
        {[DropdownButton].map((DropdownType, idx) => (
            <DropdownType
                className="categories"
                key={idx}
                id={`dropdown-button-drop-${idx}`}
                size="sm"
                title="Categories"
            >
                <Dropdown.Item eventKey="1">Handbags</Dropdown.Item>
                <Dropdown.Item eventKey="2">Sunglasses</Dropdown.Item>
                <Dropdown.Item eventKey="3">Our promises</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">About</Dropdown.Item>
            </DropdownType>
        ))}
    </div>
    )
};
export default DropDownPart;