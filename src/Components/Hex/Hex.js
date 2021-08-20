import React from "react";
import useDataFetchApi from '../../Hooks/useDataFetchApi';
import OrkArmy from "../ArmyIcon/Army";
// import AppData from '../../Data/app-data';
// import useArmyData from './../../Hooks/armyDataHook';




// Only need to render this function once and use it to check location
const movementCheck = (armyPointX, armyPointY, mapPointX, mapPointY) => {
    const armyX =   typeof(armyPointX) === 'string' ? parseInt(armyPointX) : armyPointX;
    const armyY =   typeof(armyPointY) === 'string' ? parseInt(armyPointY) : armyPointY;
    const mapX =   typeof(mapPointX) === 'string' ? parseInt(mapPointX) : mapPointX;
    const mapY =   typeof(mapPointY) === 'string' ? parseInt(mapPointY) : mapPointY;

    const PointX  = mapX - armyX === 0 || 
                    ((mapX  - armyX) <= 0 && (mapX  - armyX) >= -1 ) ||
                    ((mapX  - armyX) >= 0 && (mapX  - armyX) <= 1 ) ? true : false; 



    const PointY =  mapY - armyY === 0 ||
                  ((mapY  - armyY) <= 0 && (mapY  - armyY) >= -1 ) ||
                  ((mapY  - armyY) >= 0 && (mapY  - armyY) <= 1 )? true : false;


    // console.log('first', mapX - armyX)
    // console.log('Second',  mapY - armyY )
    // console.log('mapx', PointX, PointY );
    console.log('first', armyX % 2)
    console.log('second', (armyX + 1 === mapX) && (mapY === armyY + 1))
    console.log('second', (armyX + 1 === mapX) && (mapY === armyY + 1))
    console.log('third', (armyX + 1  === mapX) && (mapY === armyY - 1))

    //&& PointY === true

      if(PointX === true && PointY === true) {
        if(armyX % 2 !== 0 && 
          ((mapY - (armyX + 1)) === 1 || 
          (mapY - (armyX + 1)) === -1)){
              return false;
            }
        if( ((mapY - (armyY + 1)) !== 0 || (mapY - (armyY + 1)) !== -2 ) && 
            ((mapX - (armyX + 1)) !== 0 || (mapX - (armyX + 1)) !== -2 )){
          return true;
        }
      }
      else{
        return false;
      }

}

const Hex = (props) => {
    const data = props.data;
    const fullArmyData = useDataFetchApi('armies');
    let armyData = [];
    let currentArmy;

    // loop though army data to see if there is an army data for that point
    //I did not do this from with setState as did not want the function to rerender
    if(fullArmyData !== undefined) {
        armyData.push(fullArmyData);
        for (const iterator of armyData) { 
          for (const result of iterator) {
            for (const finalResult of result) {
              if(finalResult.x === data.x && finalResult.y === data.y){
                currentArmy = finalResult
                console.log(currentArmy)
              }
            } 
          }
        }
    }


    const dropHandler = (e) => {
        e.preventDefault();
        const armyCoOrdinated = JSON.parse(e.dataTransfer.getData("text/plain"));
        const locationArmyMovingTo = {x: e.target.getAttribute("x"), y:  e.target.getAttribute("y")}
        const army = {
                "id": "armyCoOrdinated.id",
                "armyList": [],
                "x": armyCoOrdinated.x,
                "y": armyCoOrdinated.y,
                "points": armyCoOrdinated.points
        };

        if(armyCoOrdinated.x === locationArmyMovingTo.x && armyCoOrdinated.y === locationArmyMovingTo.y){
          return;
        }else{
            //check to see if can move to this part of the map
            if(movementCheck(armyCoOrdinated.x, armyCoOrdinated.y, locationArmyMovingTo.x, locationArmyMovingTo.y)) {
              // if so append to the map
              e.target.appendChild(document.getElementById(armyCoOrdinated.id));
              
              // and update the json file for the map and the data
            }else {
              return
            }
        };
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
        onDragOver={dragHandler}
        onDrop={dropHandler}
        x={data.x}
        y={data.y}
      >
        {currentArmy && (
          <OrkArmy
            idName={currentArmy.id}
            armyPoints={currentArmy.points}
            mapPointX={currentArmy.x}
            mapPointY={currentArmy.y}
          />
        ) }
      </div>
      <div className="hex_bottom"></div>
    </div>
  );
};

export default Hex;