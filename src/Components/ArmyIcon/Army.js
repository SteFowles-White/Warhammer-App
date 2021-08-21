import React from 'react';
import orkImage from '../../assets/images/ork-army.png'

const Army = (props) => {
    const getLocationHandler = (e) => {
        e.dataTransfer.setData("text/plain", 
        `{"x": "${e.target.getAttribute('x')}", "y": "${e.target.getAttribute('y')}", "id": "${props.idName}", "points": "${props.armyPoints}", "hexId": "${props.idHex}" }`);
    }

    return(
        <div id={props.idName} className="text-center" draggable onDragStart={getLocationHandler}>
            <img src={orkImage} alt="Ork Army" className="army__icon" x={props.mapPointX} y={props.mapPointY} onDragStart={getLocationHandler}/>
        </div>
    )
}

export default Army;