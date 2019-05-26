import React, { useState } from "react";
import { useHttp } from "../hooks/useHttp";
import { PageContext } from "./PageContext";
import HeroContent from "../components/HeroContent";
import MovieSet from "./MovieSet";
import "../scss/FirstPage.scss";
import menu from "../assets/images/circled.svg";
import Search from "../components/search/Search";

function FirstPage() {
  let [optionVal, setOptionVal] = useState("movie/popular?");
  let [genre] = useHttp("genre/movie/list?");

  let [data, load] = useHttp(optionVal);

  let [menuOn, setMenuOn] = useState(false);
  let [genreON, setGenreON] = useState(false);
  let [h1Text, setH1Text] = useState();

  const setSelectVal = e => {
    setOptionVal(e.target.value);
    console.log(optionVal);
    setH1Text("");
  };

  const setGenreForOptionVal = e => {
    let id = e.target.closest("#gen").querySelector("#hiddenId").innerHTML;
    setOptionVal(`discover/movie?with_genres=${id}&`);
    setH1Text(e.target.innerText);
  };

  const showMenu = () => {
    console.log(1);
    menuOn === true ? setMenuOn(false) : setMenuOn(true);
    if (genreON === true) setGenreON(false);
  };

  const showGenres = () => {
    console.log(2);
    genreON === false ? setGenreON(true) : setGenreON(false);
  };

  const setFirstPage = () => {
    //console.log(data);
    return (
      <React.Fragment>
        <h1 id="typeHeading">{h1Text}</h1>
        <div id="menuIcon">
          <img
            alt="menuIcon"
            onClick={showMenu}
            src={menu}
            style={{ width: "2em" }}
          />
        </div>

        <div id="mainMenu" className={menuOn === false ? "HideMenu" : ""}>
          <div id="popGenreList">
            <select id="popularity" onChange={setSelectVal}>
              <option defaultValue value="movie/popular?">
                Popular
              </option>
              <option value="movie/top_rated?">Top Rated</option>
              <option value="movie/now_playing?">Now Playing</option>
            </select>

            <div id="genreList">
              <p onClick={showGenres}>Genres</p>
            </div>
          </div>
          <Search />
        </div>
        <div className="genreGrid" id={genreON === false ? "genreDivShow" : ""}>
          {genre.genres.map((i, l) => {
            return (
              <div id="gen" onClick={setGenreForOptionVal} key={l}>
                {i.name}
                <span id="hiddenId" style={{ display: "none" }}>
                  {i.id}
                </span>
              </div>
            );
          })}
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
