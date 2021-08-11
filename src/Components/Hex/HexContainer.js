import React from "react";
import Hex from "./Hex";
// import HexContainer from './HexContainer';

const HexContainer = (props) => {
    const HexContainerInformation = props.data;
    const HexArray = [];
    const HexContainerClasses = `hex__container hex-row-${props.hex_row}`;

    for (const key in HexContainerInformation) {
        HexArray.push(HexContainerInformation[key]);
    }

    return (
        <div className={HexContainerClasses}> 
            {
                HexArray.map((result, key) => {
                    return <Hex data={result} key={key}/>
                })
            }
        </div>
    )
}

export default HexContainer;