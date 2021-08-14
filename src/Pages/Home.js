import React, { useContext } from "react";
import  AppData from '../Data/app-data-hook';
import CampagnImage from '../assets/images/BattleCompanies_MapCampaign.jpg'
import HexContainer from "../Components/Hex/HexContainer.js";


const HomePage = () => {

  let HexContainerInformation = useContext(AppData);
  HexContainerInformation = HexContainerInformation.appData.mapDataContainer;


  return (
    <main>

      <header className="container-fluid text-center">
        <h1>Warhammer World - Age of Sigmar</h1>
        <h2>The world that the game is working on</h2>
      </header>
      <section className="container-fluid">
          <div className="container">
            <div className="row">
              <section className="col-3 col-sm-3">
                <header>
                    <h2>Your Armies</h2>
                </header>
                <article>
                    <header>
                        <h3>Army One</h3>
                    </header>
                    <div>
                        <ul>
                            <li>
                              General - Legolas
                              <ul>
                                <li>1 Legion - Spear</li>
                                <li>1 Legion - Archer</li>
                                <li>1 Legion - Sword Master</li>
                                <li>1 Legion - Knight</li>
                                <li>1 Legion - Spear</li>
                              </ul>
                            </li>
                            <li>
                              General - Legolas
                              <ul>
                                <li>1 Legion - Spear</li>
                                <li>1 Legion - Archer</li>
                                <li>1 Legion - Sword Master</li>
                                <li>1 Legion - Knight</li>
                                <li>1 Legion - Spear</li>
                              </ul>
                            </li>
                            <li>
                              General - Legolas
                              <ul>
                                <li>1 Legion - Spear</li>
                                <li>1 Legion - Archer</li>
                                <li>1 Legion - Sword Master</li>
                                <li>1 Legion - Knight</li>
                                <li>1 Legion - Spear</li>
                              </ul>
                            </li>
                            <li>
                              General - Legolas
                              <ul>
                                <li>1 Legion - Spear</li>
                                <li>1 Legion - Archer</li>
                                <li>1 Legion - Sword Master</li>
                                <li>1 Legion - Knight</li>
                                <li>1 Legion - Spear</li>
                              </ul>
                            </li>
                            <li>
                              General - Legolas
                              <ul>
                                <li>1 Legion - Spear</li>
                                <li>1 Legion - Archer</li>
                                <li>1 Legion - Sword Master</li>
                                <li>1 Legion - Knight</li>
                                <li>1 Legion - Spear</li>
                              </ul>
                            </li>
                        </ul>
                    </div>

                </article>
              </section>
              <section className="col-9 col-sm-9 map__container">
                <div className="map__inner__container">
                  <img src={CampagnImage} alt=""/>
                  {
                        HexContainerInformation.map((result, key) => {
                        let classNumber = key + 1;
                        return <HexContainer key={key} hex_row={classNumber} data={result}/>
                      })
                    }

                </div>
              </section>
            </div>
          </div>
      </section>
    </main>
  );
};

export default HomePage;
