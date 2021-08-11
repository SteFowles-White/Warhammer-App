import React from 'react';
import orkImage from '../../assets/images/ork-army.png'

const Army = () => {
    return(
        <div className="text-center">
            <img src={orkImage} alt="Ork Army" className="army__icon"/>
        </div>
    )
}

export default Army;