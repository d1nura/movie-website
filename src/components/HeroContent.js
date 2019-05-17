import React from "react";
import { useHttp } from "../hooks/useHttp";
import "../css/HeroContent.scss";
import { SelectImgUrl } from "./SelectImgUrl";
import GenreSelector from "./GenreSelector";
import MovieDetailsSelector from "./MovieDetailsSelector";

//import { GenreSelector } from "./genreSelector";

function HeroComponent() {
  let [data, load] = useHttp("discover/movie?sort_by=popularity.desc&");

  const returnData = () => {
    let d = data.results.slice(0, 1)[0];
    let imgUrl = SelectImgUrl("w1280/" + d.backdrop_path);

    const content = (
      <div>
        <div id="heroPic" style={imgUrl} />
        <div id="heroContent">
          <div className="togetherTop">
            <span id="releasedYear">
              {[...d.release_date].slice(0, 4)}
              <span id="genre">
                <GenreSelector id={d.genre_ids} />
              </span>
            </span>

            <div id="vote">
              <p>
                <sub id="voteAvg">{d.vote_average}</sub>
              </p>
              <p>
                <sup>
                  <span>/</span>10
                </sup>
              </p>
            </div>
            <MovieDetailsSelector />
          </div>

          <h1>{d.title}</h1>
          <p>{}</p>
        </div>
      </div>
    );

    //GenreSelector();
    console.log(d);

    return content;
  };

  let getData = data && load === false ? returnData() : <p>loading...</p>;
  return getData;
  // return load ? <p>loading...</p> : returnData();
}

export default HeroComponent;
