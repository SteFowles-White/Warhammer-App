import React from "react";
import Hex from "./Hex";

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
let newMoveid = ''

const HexContainer = (props) => {
  const HexArray = [];
  const HexContainerClasses = `hex__container hex-row-${props.hex_row}`;
//   const [armyMovment, setArmyMovment] = useState({ army: {}, moved: false });

  const dropHandler = (e) => {
      

    e.preventDefault();
     const armyCoOrdinated = JSON.parse(e.dataTransfer.getData("text/plain"));
    //  console.log(armyCoOrdinated);
     console.log(e)
    const newHex =  newMoveid.getAttribute('id')
    const armymovement = armyCoOrdinated.id;
    console.log(newMoveid, armymovement);

    document.getElementById(newHex).appendChild(document.getElementById(armymovement));

    //   document.getElementById(newMoveid.getAttribute('id').appendChild(document.getElementById(armyCoOrdinated.id))) 
    //  etarget.appendChild(document.getElementById(armyCoOrdinated.id));
    // const locationArmyMovingTo = {
    //   x: e.target.getAttribute("x"),
    //   y: e.target.getAttribute("y"),
    // };
    // const army = {
    //   id: armyCoOrdinated.id,
    //   previousHexId: armyCoOrdinated.hexId,
    //   currentHexId: data.id,
    //   armyList: [],
    //   x: locationArmyMovingTo.x,
    //   y: locationArmyMovingTo.y,
    //   points: armyCoOrdinated.points,
    // };

    // if (
    //   armyCoOrdinated.x === locationArmyMovingTo.x &&
    //   armyCoOrdinated.y === locationArmyMovingTo.y
    // ) {
    //   return;
    // } else {
    //   //check to see if can move to this part of the map
    //   if (
    //     movementCheck(
    //       armyCoOrdinated.x,
    //       armyCoOrdinated.y,
    //       locationArmyMovingTo.x,
    //       locationArmyMovingTo.y
    //     )
    //   ) {
    //     // if so append to the map

    //     setArmyMovment({ army: army, moved: true });
    //   } else {
    //     return;
    //   }
    // }
  };


  const dragHandler = (e) => {
    e.preventDefault();
    newMoveid  =e.target ;
    // console.log(newMoveid)
  };
  const getDataHandler = (e) => {
    console.log('data:', e)
  };

  for (const key in props.data) {
    HexArray.push(props.data[key]);
  }

  return (
    <div className={HexContainerClasses} onDragOver={dragHandler} >
      {HexArray.map((result, key) => {
        return <Hex data={result} getDataHandler={getDataHandler} key={key} armyData={props.armyData} dropHandler={dropHandler}/>;
      })}
    </div>
  );
};

export default HexContainer;
