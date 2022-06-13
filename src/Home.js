import React, { useState, useEffect } from "react";
import "./Home.css";
import header from "./img/xd2.png";
import usePokedex from "./hooks/usePokedex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import theme from "./img/pikacho.gif";

function Home() {
  const {
    find,
    setTurn,
    turn,
    pokemonImage,
    pokemonName,
    lding,
    limpiar,
    setPokemonId,
    pokemonId,
    reFind
  } = usePokedex();
  const [search, setSearch] = useState("");
  const handleturnOn = (event) => {
    find(search);
    event.preventDefault();
  };

  useEffect(()=>{
    reFind()
    console.log("useeffect console log")
  },[pokemonId])

  return (
    <div className="Parent">
      <div className="pokedex-container">
        <div className="pokedexLeftside">
          <div className="pokeHeader">
            <div className="curve1">
              <div className={`${turn ? "btnstatusOn" : "btnstatus"}`}></div>
              <div
                className={`${lding === 2 && turn ? "lding1On" : "lding1Off"}  ${
                  (lding === "err" && turn) ? "lding1err" : "ldding1off"
                }`}
              ></div>
              <div
                className={`${lding === 2 && turn ? "lding2On" : "lding2Off"}`}
              ></div>
              <div
                className={`${lding === 2 && turn ? "lding3On" : "lding3Off"}`}
              ></div>
            </div>
          </div>
          <div className="pokeScreen-container">
            <div className="grayscreen">
              <div className="minicircle1"></div>
              <div className="minicircle2"></div>
              <div className={`${turn ? "pokescreenOn" : "pokescreen"}`}>
                <img
                  src={pokemonImage}
                  alt={pokemonName}
                  className={`pokemon ${
                    pokemonImage && turn ? "show" : "hidden"
                  }`}
                ></img>{" "}
                <img alt="inicio"
                  src={theme}
                  className={`pokemon ${
                    !pokemonImage && turn ? "show" : "hidden"
                  }`}
                ></img>
              </div>
              <div className="btnPower"></div>
              <div className="bocina1"></div>
              <div className="bocina2"></div>
              <div className="bocina3"></div>
              <div className="bocina4"></div>
            </div>
          </div>
          <div className="curve2"></div>
          <div className="buttons-container">
            <div
              className="pwrbtn"
              onClick={(event) => {
                if (turn) {
                  setTurn(false);
                }
                if (!turn) {
                  setTurn(true);
                  limpiar();
                }
              }}
            >
              <FontAwesomeIcon
                className={`fontIcon ${turn ? "fontIconOn" : ""}`}
                icon={faPowerOff}
              />
            </div>
            <div className="cruz">
              <div
                className="uppad"
                onClick={() => {
                  setPokemonId(pokemonId+1)
                  console.log("console de pokemonid +1", pokemonId+1)
                }}
              ></div>
              <div
                className="leftpad"
                onClick={() => {
                  
                }}
              ></div>
              <div
                className="rightpad"
                onClick={() => {
                }}
              ></div>
              <div className="mid"></div>
              <div
                className="downpad"
                onClick={() => {
                  setPokemonId(pokemonId-1)
                  
                  console.log("console de pokemonid -1", pokemonId-1)
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="middleside">
          <div className="middlesideTop"></div>
          <div className="midcilinder">
            <div className="visagra1"></div>
            <div className="visagra2"></div>
          </div>
        </div>
        <div className="pokedexRightside">
          <div className="pokeRightHeader"></div>
          <img src={header} alt="pokeheader" className="curver1"></img>
          <div className="pokeScreenInfo-container">
            <div className={`${turn ? "screenInfoOn" : "screenInfo"}`}>
              {pokemonName}
            </div>
            <div className="filter1"></div>
            <div className="filter2"></div>
            <div className="filter3"></div>
            <div className="filter4"></div>
            <div className="filter5"></div>
            <div className="filter6"></div>
            <div className="filter7"></div>
            <div className="filter8"></div>
            <div className="filter9"></div>
            <div className="filter10"></div>
            <div className="filter11"></div>
            <div className="filter12"></div>
            <div className="filter13"></div>
            <div className="filter14"></div>
            <div className="filter15"></div>
            <div className="filter16"></div>
            <div className="filter17"></div>
            <div className="filter18"></div>
          </div>
          <div className="pokeSoundButtons">
            <div className="pokesearch">
              <form onSubmit={handleturnOn}>
                <div className="search-container">
                  <label>POKEMON:</label>
                  <input
                    type="text"
                    onChange={(event) => {
                      const poke = event.target.value;
                      setSearch(poke);
                      console.log(setSearch);
                    }}
                    name="search"
                    disabled={!turn}
                  ></input>
                  <button
                    type="submit"
                    className={`${turn ? "botonOn" : ""}`}
                    disabled={!turn}
                  >
                    Go!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
