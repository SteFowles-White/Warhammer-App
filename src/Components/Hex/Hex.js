import React, { useState, useEffect } from "react";
import OrkArmy from "../ArmyIcon/Army";
// import AppData from '../../Data/app-data';
// import useArmyData from './../../Hooks/armyDataHook';



const Hex = (props) => {

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
   const hexOwnerHander = () => {
    if(data.ownedFaction === 'Orruks'){
      return 'hex orruksHex';
    }else if(data.ownedFaction === 'Sigmar') {
      return 'hex sigmarHex';
    }else{
      return 'hex';
    }
  }


  return (
    <div className={hexOwnerHander()}>
      <div className="hex_top"></div>
      <div
        className="hex_body"
        id={data.id}
        x={data.x}
        y={data.y}
        onDrop={props.dropHandler}
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
