import React from "react";
import { useState } from "react";
import OrkArmy from "../ArmyIcon/Army";

const Hex = (props) => {
    const [armyPresent, setArmyPresent] = useState(false);
    const data = props.data;


    //on drop use a useEffect to change the data of the hexs in questions

    const dropHandler = (e) => {
        e.preventDefault();
        e.target.appendChild(document.getElementById('ork-1'))
        //change json data so is army === true and the current hex is army === false
    }


    return (
        <div className="hex">
            <div className="hex_top"></div>  
                <div className="hex_body" id={data.id} onDrop={dropHandler} onDragOver={dropHandler.bind(this)}>

                    {data.army.isArmy && <OrkArmy idName="ork-1"/>}
                </div>
            <div className="hex_bottom"></div>
        </div>
    )
}

export default Hex;