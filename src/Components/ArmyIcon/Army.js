import React from 'react';
import orkImage from '../../assets/images/ork-army.png'

const Army = React.memo((props) => {

    const getLocationHandler = () => {
        props.onClickEvent(props.mapPointX, props.mapPointY);
    }

    return(
        <div id={props.idName} className="text-center" draggable onMouseEnter={getLocationHandler}>
            <img src={orkImage} alt="Ork Army" className="army__icon" x={props.mapPointX}/>
        </div>
    )
})

export default Army;