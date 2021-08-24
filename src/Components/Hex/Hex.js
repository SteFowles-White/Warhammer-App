import React, { useState, useEffect } from "react";
import OrkArmy from "../ArmyIcon/Army";
// import AppData from '../../Data/app-data';
// import useArmyData from './../../Hooks/armyDataHook';

// Only need to render this function once and use it to check location
const movementCheck = (armyPointX, armyPointY, mapPointX, mapPointY) => {
  const armyX =
    typeof armyPointX === "string" ? parseInt(armyPointX) : armyPointX;
  const armyY =
    typeof armyPointY === "string" ? parseInt(armyPointY) : armyPointY;
  const mapX = typeof mapPointX === "string" ? parseInt(mapPointX) : mapPointX;
  const mapY = typeof mapPointY === "string" ? parseInt(mapPointY) : mapPointY;
  let armyOdd = armyX % 2 === 0;

  const PointX =
    mapX - armyX === 0 ||
    (mapX - armyX <= 0 && mapX - armyX >= -1) ||
    (mapX - armyX >= 0 && mapX - armyX <= 1)
      ? true
      : false;
  const PointY =
    mapY - armyY === 0 ||
    (mapY - armyY <= 0 && mapY - armyY >= -1) ||
    (mapY - armyY >= 0 && mapY - armyY <= 1)
      ? true
      : false;

  if (PointX === true && PointY === true) {
    if (
      armyOdd === false &&
      ((armyX + 1 === mapX && mapY === armyY + 1) ||
        (armyX + 1 === mapX && mapY === armyY - 1))
    ) {
      return false;
    }
    if (
      (mapY - (armyY + 1) !== 0 || mapY - (armyY + 1) !== -2) &&
      (mapX - (armyX + 1) !== 0 || mapX - (armyX + 1) !== -2)
    ) {
      return true;
    }
  } else {
    return false;
  }
};

const Hex = (props) => {
  const [armyMovment, setArmyMovment] = useState({ army: {}, moved: false });
  const data = props.data;
  let currentArmy;

  // loop though army data to see if there is an army data for that point
  //I did not do this from with setState as did not want the function to rerender
  if (props.armyData !== undefined) {
    for (const key in props.armyData) {
      for (const result of props.armyData[key]) {
        if (result.x === data.x && result.y === data.y) {
                currentArmy = result;
        }
      }
    }
  }
 
  useEffect(() => {
    if (armyMovment.moved) {
      localStorage.setItem(`army-${armyMovment.army.id}`, JSON.stringify(armyMovment));
    }
  }, [armyMovment]);

  const dropHandler = (e) => {
    e.preventDefault();
    const armyCoOrdinated = JSON.parse(e.dataTransfer.getData("text/plain"));
    const locationArmyMovingTo = {
      x: e.target.getAttribute("x"),
      y: e.target.getAttribute("y"),
    };
    const army = {
      id: armyCoOrdinated.id,
      previousHexId: armyCoOrdinated.hexId,
      currentHexId: data.id,
      armyList: [],
      x: locationArmyMovingTo.x,
      y: locationArmyMovingTo.y,
      points: armyCoOrdinated.points,
    };

    if (
      armyCoOrdinated.x === locationArmyMovingTo.x &&
      armyCoOrdinated.y === locationArmyMovingTo.y
    ) {
      return;
    } else {
      //check to see if can move to this part of the map
      if (
        movementCheck(
          armyCoOrdinated.x,
          armyCoOrdinated.y,
          locationArmyMovingTo.x,
          locationArmyMovingTo.y
        )
      ) {
        // if so append to the map
        e.target.appendChild(document.getElementById(armyCoOrdinated.id));
        setArmyMovment({ army: army, moved: true });
      } else {
        return;
      }
    }
  };
  const hexOwnerHander = () => {
    if(data.ownedFaction === 'Orruks'){
      return 'hex orruksHex';
    }else if(data.ownedFaction === 'Sigmar') {
      return 'hex sigmarHex';
    }else{
      return 'hex';
    }
  }

  const dragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={hexOwnerHander()}>
      <div className="hex_top"></div>
      <div
        className="hex_body"
        id={data.id}
        onDragOver={dragHandler}
        onDrop={dropHandler}
        x={data.x}
        y={data.y}
      >
        {currentArmy && (
          <OrkArmy
            idName={currentArmy.id}
            idHex={data.id}
            armyPoints={currentArmy.points}
            mapPointX={currentArmy.x}
            mapPointY={currentArmy.y}
          />
        )}
      </div>
      <div className="hex_bottom"></div>
    </div>
  );
};

export default Hex;
