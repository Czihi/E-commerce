import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/cjs/DropdownButton";
const DropDownPart=()=>{
    return(
    <div>
        {[DropdownButton].map((DropdownType, idx) => (
            <DropdownType
                className="categories"
                key={idx}
                id={`dropdown-button-drop-${idx}`}
                size="sm"
                title="Categories"
            >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownType>
        ))}
    </div>
    )
};
export default DropDownPart;