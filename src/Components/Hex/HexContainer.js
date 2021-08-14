import React from "react";
import Hex from "./Hex";

const HexContainer = (props) => {

    const HexArray = [];
    const HexContainerClasses = `hex__container hex-row-${props.hex_row}`;

    for (const key in props.data) {
        HexArray.push(props.data[key]);
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