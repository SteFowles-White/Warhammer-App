import React, { useState, useEffect } from "react";

const NavBar = (props) => {
  const [gameInformation, setGameInformation] = useState();

  useEffect(() => {
    fetch(
      "https://warhammer-web-app-default-rtdb.europe-west1.firebasedatabase.app/overallGame.json"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setGameInformation(data);
      })
      .catch((error) => {
        console.error("Error Caught NavBar Component:", error);
      })
      .finally();
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="row">
            {gameInformation !== undefined && (
              <div className="col-sm-12">
                <p>Turn: {gameInformation.turn}</p>
                <p>Army: {Object.keys(gameInformation.armyTurn[0])}</p>
                <p>Year: {gameInformation.year}</p>
                <p>Week: {gameInformation.week}</p>
                <button>End of Turn</button>
              </div>
            )}

            <div className="col-sm-12">
              <p>Weekly Resources:</p>
              <p>Total Number of Companies: </p>
              <p>Total Points of Armies: </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
