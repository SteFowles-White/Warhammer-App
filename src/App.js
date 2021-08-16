import React, {useContext} from 'react';
import './App.css';
import HomePage from './Pages/Home';
import  AppData from './Data/app-data';
import useDataAPI from './Hooks/Data';


function App() {
  const appData = useContext(AppData);
  const API = useDataAPI()

  console.log('this API', API);

  return (
    <AppData.Provider value={{appData: appData.data}}>
      <HomePage />
    </AppData.Provider>
  );
}

export default App;
