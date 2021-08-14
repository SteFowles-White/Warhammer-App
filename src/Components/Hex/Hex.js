import React from "react";
 import { useState } from "react";
import OrkArmy from "../ArmyIcon/Army";

const Hex = (props) => {
    const data = props.data;
    let armyPresent = data.army.isArmy ? true : false;
    const [getArmyCordinates, setgetArmyCordinates] = useState(armyPresent ? {x: data.x, y: data.y} : {});
 
    const getLocation = (x, y)=> {
        setgetArmyCordinates({x: x, y: y});
      }



    const dragStart = () =>{
        console.log("set location", getArmyCordinates);
      }



    const dropHandler = (e) => {
        e.preventDefault();

        e.target.appendChild(document.getElementById("ork-1"));
        const targetX = e.target.getAttribute("x");
        const targetY = e.target.getAttribute("y");

        // console.log("set location", getArmyCordinates);
        // console.log("current location", targetX, targetY);


        //change json data so is army === true and the current hex is army === false
    };
    const dragHandler = (e) => {
        e.preventDefault();
    };



  return (
    <div className="hex">
      <div className="hex_top"></div>
      <div
        className="hex_body"
        id={data.id}
        onDragStart={dragStart}
        onDragOver={dragHandler}
        onDrop={dropHandler}
        x={data.x}
        y={data.y}
      >
        {armyPresent && (
          <OrkArmy
            idName="ork-1"
            mapPointX={data.x}
            mapPointY={data.y}
            onClickEvent={getLocation}
          />
        )}
      </div>
      <div className="hex_bottom"></div>
    </div>
  );
};

export default Hex;
