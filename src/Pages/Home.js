import React from "react";
import mapData from '../Data/hex-row.json';
import CampagnImage from '../assets/images/BattleCompanies_MapCampaign.jpg'

import HexContainer from "../Components/Hex/HexContainer.js";
import Hex from "../Components/Hex/Hex.js";

const HomePage = () => {
  const mapDataContainer = Object.entries(mapData);

  const formateDataHandler = () => {
    for (const iterator of mapDataContainer) {
        for (const key in iterator[1]) {
          console.log(iterator[1][key]);
        }
    }
}


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



                  <div className="hex__container hex-row">     
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                  </div>
                  <div className="hex__container hex-row-2">
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                  </div>
                  <div className="hex__container hex-row-3">
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                  </div>
                  <div className="hex__container hex-row-4">
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                  </div>
                  <div className="hex__container hex-row-5">
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                  </div>
                  <div className="hex__container hex-row-6">
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                  </div>
                  <div className="hex__container hex-row-7">
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                  </div>
                  <div className="hex__container hex-row-8">
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                  </div>
                  <div className="hex__container hex-row-9">
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                  </div>
                  <div className="hex__container hex-row-10">
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                  </div>
                  <div className="hex__container hex-row-11">
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                  </div>
                  <div className="hex__container hex-row-12">
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                  </div>
                  <div className="hex__container hex-row-13">
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                  </div>
                  <div className="hex__container hex-row-14">
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                    <div className="hex">
                      <div className="hex_top"></div>  
                      <div className="hex_body"></div>
                      <div className="hex_bottom"></div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
      </section>
    </main>
  );
};

export default HomePage;
