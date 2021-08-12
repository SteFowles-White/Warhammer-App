import React from "react";
 import { useState} from "react";
import OrkArmy from "../ArmyIcon/Army";

const Hex = (props) => {
//I think these state andlogic need to be in a custom hook beacuse everytime I 
// move the army icon to another hex I loose the getArmyCordinares data
//So when I get back to it I an going to try and make a customer hook with state information to see if 
//holding state data outside of the hex solves this problem

    const data = props.data;
    const [getArmyCordinates, setgetArmyCordinates] = useState({});
    let armyPresent = false;
    // let armyPosition = {};

    if (data.army.isArmy) {
        armyPresent = true;
    }
 
    const getLocation = (x, y)=> {
        setgetArmyCordinates({x: x, y: y});
      }
      console.log(getArmyCordinates);

    const dropHandler = (e) => {
        e.preventDefault();

        e.target.appendChild(document.getElementById("ork-1"));
        const targetX = e.target.getAttribute("x");
        const targetY = e.target.getAttribute("y");

        console.log("current location", targetX, targetY);
        // console.log("getArmyLocation", getArmyCordinates)
        //change json data so is army === true and the current hex is army === false
    };
    const dragHandler = (e) => {
        e.preventDefault();
        console.log('getArmyCordinates', getArmyCordinates);
        // console.log(e.target.getAttribute("x"))
        // setArmyCordinates({x: data.x, y: data.y})
    };




  return (
    <div className="hex">
      <div className="hex_top"></div>
      <div
        className="hex_body"
        id={data.id}
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
