import React from "react";
import Hex from "./Hex";

const HexContainer = (props) => {
    console.log('here', props.data);

    const HexArray = [];
    const HexContainerClasses = `hex__container hex-row-${props.hex_row}`;

    for (const key in props.data) {
        HexArray.push(props.data[key]);
    }



    //army data and there locations should be stored here with and used on the hex drag and drop location



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