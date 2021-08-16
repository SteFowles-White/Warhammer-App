import React from "react";
 import { useContext } from "react";
import OrkArmy from "../ArmyIcon/Army";
import AppData from '../../Data/app-data';
// import useArmyData from './../../Hooks/armyDataHook';

const Hex = (props) => {
    // const [getArmyCordinates, setgetArmyCordinates] = useState({});
    const data = props.data;
    const armies = useContext(AppData);

    let orkAmies = armies.appData.orkArmies;
    // let sigmarArmies = armies.appData.sigmarArmies;
    let currentArmy;

    //filter through the ork army data to see if there is an ork amy on the hex, if so return the army data
    orkAmies.forEach(element => {
      if(element.x === data.x && element.y === data.y){
        return currentArmy = element;
      }else{
        return currentArmy = false;
      }
    });
   
    //this function is the props lift up function to get army corodinates and data
    const getLocation = ()=> {

         return;
      }

    const dropHandler = (e) => {
        e.preventDefault();
        const armyCoOrdinated = JSON.parse(e.dataTransfer.getData("text/plain"));
        const locationArmyMovingTo = {x: e.target.getAttribute("x"), y:  e.target.getAttribute("y")}

        // console.log(armyCoOrdinated, locationArmyMovingTo);
        if(armyCoOrdinated.x === locationArmyMovingTo.x && armyCoOrdinated.y === locationArmyMovingTo.y){
          return;
        }else{
         //check to see if can move to this part of the map
          // if so append to the map
          // and update the json file for the map and the data
          e.target.appendChild(document.getElementById("ork-1"));
        };
 


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
        onDragOver={dragHandler}
        onDrop={dropHandler}
        x={data.x}
        y={data.y}
      >
        {currentArmy && (
          <OrkArmy
            idName="ork-1"
            mapPointX={currentArmy.x}
            mapPointY={currentArmy.y}
            onClickEvent={getLocation}
          />
        )}
      </div>
      <div className="hex_bottom"></div>
    </div>
  );
};

export default Hex;
