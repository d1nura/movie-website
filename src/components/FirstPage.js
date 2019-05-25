import React, { useState } from "react";
import { useHttp } from "../hooks/useHttp";
import { PageContext } from "./PageContext";
import HeroContent from "../components/HeroContent";
import MovieSet from "./MovieSet";
import "../scss/FirstPage.scss";
import menu from "../assets/images/circled.svg";
//import down from "../assets/images/download.svg";

function FirstPage() {
  let [optionVal, setOptionVal] = useState("movie/popular?");
  let [data, load] = useHttp(optionVal);
  let [menuOn, setMenuOn] = useState(false);

  const setSelectVal = e => {
    setOptionVal(e.target.value);
    console.log(optionVal);
  };

  const showMenu = () => {
    console.log(1);
    menuOn === true ? setMenuOn(false) : setMenuOn(true);
  };

  const setFirstPage = () => {
    return (
      <React.Fragment>
        <div id="menuIcon">
          <img
            alt="menuIcon"
            onClick={showMenu}
            src={menu}
            style={{ width: "2em" }}
          />
        </div>
        <div
          id="basicMenu"
          className={menuOn === true ? "SelectMenu" : "HideMenu"}
        >
          <select id="popularity" onChange={setSelectVal}>
            <option value="movie/top_rated?">Top Rated</option>
            <option defaultValue value="movie/popular?">
              Popular
            </option>
            <option value="movie/now_playing?">Now Playing</option>
          </select>
          <div id="genreList">
            <p>Genres</p>
          </div>
        </div>
        <PageContext.Provider value={data}>
          <HeroContent />
          <MovieSet />
        </PageContext.Provider>
      </React.Fragment>
    );
  };

  return data && load === false ? setFirstPage() : <p>loading movies...</p>;
}

export default FirstPage;
