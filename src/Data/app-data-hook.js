import React from 'react';
import Data from '../Data/hex-row.json';

// console.log(Object.values(Data.armies.orks))

const AppData = React.createContext({
    data: {
        mapDataContainer: Object.values(Data.hexGrid),
        orkArmies: Object.values(Data.armies.orks),
        sigmarArmies : Object.values(Data.armies.sigmar)
      }
})

export default AppData;