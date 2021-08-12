import React from 'react';
import orkImage from '../../assets/images/ork-army.png'

const Army = (props) => {

    
    return(
        <div id={props.idName} className="text-center" draggable>
            <img src={orkImage} alt="Ork Army" className="army__icon"/>
        </div>
    )
}

export default Army;