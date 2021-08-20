import React from "react";
import useDataAPI from '../../Hooks/Data';
import OrkArmy from "../ArmyIcon/Army";
// import AppData from '../../Data/app-data';
// import useArmyData from './../../Hooks/armyDataHook';




// Only need to render this function once and use it to check location
const movementCheck = (armyPointX, armyPointY, mapPointX, mapPointY) => {
    console.log(mapPointX, mapPointX - 1)
    console.log(mapPointY, mapPointY - 1)
    console.log(armyPointX)
    console.log(armyPointY)
    const PointX  = armyPointX - mapPointX === 0 || armyPointX - mapPointX - 1 >= 0 || armyPointX + mapPointX + 1 === 0 ? true : false;
    const PointY =  armyPointY - mapPointY === 0 || armyPointY - mapPointY - 1 >= 0 || armyPointY - mapPointY + 1 === 0 ? true : false;

    console.log('PointXTruthy:', PointX);
    console.log('PointYTruthy:', PointY);


    if(PointX === true && PointY === true){
      return true;
    }
    else{
      return false;
    }

}

const Hex = (props) => {
    const data = props.data;
    const fullArmyData = useDataAPI('armies');
    let armyData = [];
    let currentArmy;

    // loop though army data to see if there is an army data for that point
    //I did not do this from with setState as did not want the function to rerender
    if(fullArmyData !== undefined) {
        armyData.push(fullArmyData);
        //console.log(armyData)
        for (const iterator of armyData) { 
          for (const result of iterator) {
            for (const finalResult of result) {
              if(finalResult.x === data.x && finalResult.y === data.y){
                currentArmy = finalResult
              }

            }
            
           }

        }
    }

    const dropHandler = (e) => {
        e.preventDefault();
        const armyCoOrdinated = JSON.parse(e.dataTransfer.getData("text/plain"));
        console.log(armyCoOrdinated)
        const locationArmyMovingTo = {x: e.target.getAttribute("x"), y:  e.target.getAttribute("y")}

        // console.log(armyCoOrdinated, locationArmyMovingTo);
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
            armyData={currentArmy}
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