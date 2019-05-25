import React, { useState } from "react";
import { useHttp } from "../hooks/useHttp";
import { PageContext } from "./PageContext";
import HeroContent from "../components/HeroContent";
import MovieSet from "./MovieSet";
import "../scss/FirstPage.scss";
import menu from "../assets/images/circled.svg";

function FirstPage() {
  let [optionVal, setOptionVal] = useState("movie/popular?");
  let [genre] = useHttp("genre/movie/list?");

  //console.log(genre);

  let [data, load] = useHttp(optionVal);
  let [menuOn, setMenuOn] = useState(false);
  let [genreON, setGenreON] = useState(false);

  const setSelectVal = e => {
    setOptionVal(e.target.value);
    console.log(optionVal);
  };

  const setGenreForOptionVal = e => {
    let id = e.target.closest("#genreDiv").querySelector("#hiddenId").innerText;
    setOptionVal(`discover/movie?with_genres=${id}&`);
  };

  const showMenu = () => {
    console.log(1);
    menuOn === true ? setMenuOn(false) : setMenuOn(true);
  };

  const showGenres = () => {
    console.log(2);
    genreON === false ? setGenreON(true) : setGenreON(false);
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
          className={menuOn === true ? "SelectMenu" : "HideMenu"}
          id={genreON === true ? "increaseWidth" : "basicMenu"}
        >
          <select id="popularity" onChange={setSelectVal}>
            <option value="movie/top_rated?">Top Rated</option>
            <option defaultValue value="movie/popular?">
              Popular
            </option>
            <option value="movie/now_playing?">Now Playing</option>
          </select>
          <div id="genreList">
            <p onClick={showGenres}>Genres</p>
            <div className="genreGrid">
              {genre.genres.map((i, p) => {
                return (
                  <div
                    onClick={setGenreForOptionVal}
                    id={genreON === false ? "genreDivShow" : "genreDiv"}
                    key={i.id}
                  >
                    {i.name}
                    <span id="hiddenId" style={{ display: "none" }}>
                      {i.id}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <PageContext.Provider value={data}>
          <HeroContent />
          <MovieSet />
        </PageContext.Provider>
      </React.Fragment>
    );
  };

  return data && genre && load === false ? (
    setFirstPage()
  ) : (
    <p>loading movies...</p>
  );
}

export default FirstPage;
