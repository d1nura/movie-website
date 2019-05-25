import React, { useState } from "react";
import { useHttp } from "../hooks/useHttp";
import { PageContext } from "./PageContext";
import HeroContent from "../components/HeroContent";
import MovieSet from "./MovieSet";
import "../scss/FirstPage.scss";
//import down from "../assets/images/download.svg";

function FirstPage() {
  let [optionVal, setOptionVal] = useState("movie/popular?");
  let [data, load] = useHttp(optionVal);

  const setSelectVal = e => {
    setOptionVal(e.target.value);
    console.log(optionVal);
  };

  const setFirstPage = () => {
    return (
      <React.Fragment>
        <select id="popularity" onChange={setSelectVal}>
          <option value="movie/top_rated?">Top Rated</option>
          <option value="movie/popular?">Popular</option>
          <option value="movie/now_playing?">Now Playing</option>
        </select>
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
