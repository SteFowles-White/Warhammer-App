import React from 'react';
import './App.css';
import HomePage from './Pages/Home';
import Header from './Components/NavBar/NavBar';
import useDataAPI from './Hooks/useDataFetchApi';

function App() {

  let hexMapData = useDataAPI("hexGrid");
  let mapData = [];

  if(hexMapData !== undefined) {mapData = hexMapData;}

  return (
    <React.Fragment>
      <Header/>
      <HomePage mapData={mapData}></HomePage>
    </React.Fragment>
  );
}

export default App;
