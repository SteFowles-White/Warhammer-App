import React, { useState, useEffect } from "react";
import Hex from "./Hex";

// Only need to render this function once and use it to check location
const movementCheck = (armyPointX, armyPointY, mapPointX, mapPointY) => {
  console.log("armyPointX: ", armyPointX);
  console.log("armyPointY: ", armyPointY);
  console.log("mapPointX: ", mapPointX);
  console.log("mapPointY: ", mapPointY);

  const armyX =
    typeof armyPointX === "string" ? parseInt(armyPointX) : armyPointX;
  const armyY =
    typeof armyPointY === "string" ? parseInt(armyPointY) : armyPointY;
  const mapX = typeof mapPointX === "string" ? parseInt(mapPointX) : mapPointX;
  const mapY = typeof mapPointY === "string" ? parseInt(mapPointY) : mapPointY;
  let armyPointXOdd = armyX % 2 === 0;
  let armyPointYOdd = armyY % 2 === 0;

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
      armyPointXOdd === false &&
      armyPointYOdd === true &&
      ((armyX + 1 === mapX && mapY === armyY + 1) ||
        (armyX + 1 === mapX && mapY === armyY - 1))
    ) {
      return false;
    } else if (
      armyPointXOdd === false &&
      (mapY - (armyY + 1) !== 0 || mapY - (armyY + 1) !== -2 || mapY - (armyY + 1) !== -1) &&
      (mapX - (armyX + 1) !== 0 || mapX - (armyX + 1) !== -2 || mapX - (armyX + 1) !== -1)
    ) {
      if (mapY - (armyY + 1) === 0 && mapX - (armyX + 1) === -2){
        if(armyPointYOdd === true) {
          return true;
        }
        return false;
      }else if(mapY - (armyY + 1) === -2 && mapX - (armyX + 1) === -2){
        if(armyPointYOdd === true) {
          return true;
        }
        return false;
      }else if(mapY - (armyY + 1) === -1 && mapX - (armyX + 1) === -1){
        return true
      }
        else{
        return true
      }
    }
  } else {
    return false;
  }
};
let newMoveid = "";

const HexContainer = (props) => {
  const HexArray = [];
  const HexContainerClasses = `hex__container hex-row-${props.hex_row}`;
  const [armyMovment, setArmyMovment] = useState({ army: {}, moved: false });

  useEffect(() => {
    if (armyMovment.moved) {
      localStorage.setItem(
        `army-${armyMovment.army.id}`,
        JSON.stringify(armyMovment)
      );
    }
  }, [armyMovment]);

  const dropHandler = (e) => {
    e.preventDefault();
    const armyCoOrdinated = JSON.parse(e.dataTransfer.getData("text/plain"));
    const newHex = newMoveid.getAttribute("id");
    const armymovement = armyCoOrdinated.id;

    const locationArmyMovingTo = {
      x: newMoveid.getAttribute("x"),
      y: newMoveid.getAttribute("y"),
    };

    const army = {
      id: armyCoOrdinated.id,
      previousHexId: armyCoOrdinated.hexId,
      currentHexId: newHex.id,
      armyList: [],
      x: locationArmyMovingTo.x,
      y: locationArmyMovingTo.y,
      points: armyCoOrdinated.points,
    };

    console.log(army);

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
          newMoveid.getAttribute("x"),
          newMoveid.getAttribute("y")
        )
      ) {
        // if so append to the map
        document
          .getElementById(newHex)
          .appendChild(document.getElementById(armymovement));
        setArmyMovment({ army: army, moved: true });
      } else {
        return;
      }
    }
  };

  const dragHandler = (e) => {
    e.preventDefault();
    newMoveid = e.target;
  };

  for (const key in props.data) {
    HexArray.push(props.data[key]);
  }

  return (
    <div className={HexContainerClasses} onDragOver={dragHandler}>
      {HexArray.map((result, key) => {
        return (
          <Hex
            data={result}
            key={key}
            armyData={props.armyData}
            dropHandler={dropHandler}
          />
        );
      })}
    </div>
  );
};

export default HexContainer;
