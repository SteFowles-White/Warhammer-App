import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./Pages/Home";
import Header from "./Components/NavBar/NavBar";

function App() {
  const [getData, setData] = useState(undefined);
  const [dataGot, setDataGot] = useState(false);

  useEffect(() => {
    fetch(
      "https://warhammer-web-app-default-rtdb.europe-west1.firebasedatabase.app/hexGrid.json"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        let array = [];

        for (const key in data) {
          array.push(data[key]);
        }
        setData(array);
      })
      .catch((error) => {
        console.error("Http request error on App");
      })
      .finally(() => {
        setDataGot(true);
      });
  }, []);

  return (
    <React.Fragment>
      <Header />
      {dataGot === true && <HomePage mapData={getData}></HomePage>}
    </React.Fragment>
  );
}

export default App;
