import React, {useContext} from 'react';
import './App.css';
import HomePage from './Pages/Home';
import  AppData from './Data/app-data-hook';


function App() {
  const appData = useContext(AppData);

  return (
    <AppData.Provider value={{appData: appData.data}}>
      <HomePage />
    </AppData.Provider>
  );
}

export default App;
