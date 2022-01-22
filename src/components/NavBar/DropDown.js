import { useState } from "react";

const DropDownMenu = ({ svgIcon, value, setValue, placeholder, width="5rem", options=[], callbackFunction=null }) => {
    const [open, setOpen] = useState(false);

    const toggleOptions = () => {
        setOpen((value)=>!value);
    }
    const handleOption = (value) => {
        console.log(`list value : ${value}`);
        setValue(value);
        toggleOptions();
    }

    return <div className={"dropdown-container"}>
        <div
            onClick={ toggleOptions }
            className={"dropdown-menu"}
            style={{width: width}}>
            { svgIcon }
            <div>{ value ? value : placeholder }</div>
        </div>
        <div
            style={{ display: open? "block" : "none",
        width: width }}
            className={"dropdown-options"}>
            {options.map((listValue, index) => (
                <li
                    key={index.toString()}
                    className={"option"}
                    onClick={(e)=>{ handleOption(listValue, e) } }>
                    { listValue }
                </li>
            )) }
        </div>
    </div>
}

export default DropDownMenu;