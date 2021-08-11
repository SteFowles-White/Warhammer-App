import React from "react";
import OrkArmy from "../ArmyIcon/Army";

const Hex = (props) => {
    const data = props.data;



    return (
        <div className="hex">
            <div className="hex_top"></div>  
            <div className="hex_body">
                {data.army.isArmy && <OrkArmy/>}
            </div>
            <div className="hex_bottom"></div>
        </div>
    )
}

export default Hex;