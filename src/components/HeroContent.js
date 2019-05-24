import React, { useState } from "react";
import { useHttp } from "../hooks/useHttp";
import "../css/HeroContent.scss";
import { SelectImgUrl } from "./SelectImgUrl";
import GenreSelector from "./GenreSelector";
import MovieDetailsSelector from "./MovieDetailsSelector";
//import GetVideos from "./GetVideos";

//import { GenreSelector } from "./genreSelector";

function HeroComponent() {
  let [data, load] = useHttp("discover/movie?sort_by=popularity.desc&");
  let [onFrame, setOnFrame] = useState(false);
  //console.log(onFrame);

  const turnOniFrame = () => {
    setOnFrame(true);
    return null;
  };
  const closeVideo = () => {
    setOnFrame(false);
  };

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
          </div>

          <h1>{d.title}</h1>

          <span id="runtime">
            <MovieDetailsSelector getId={d.id} setDetails="runtime" />
          </span>

          <p id="watchTrailer" onClick={turnOniFrame}>
            <i className="fas fa-play-circle" />
            Watch Trailer
          </p>
        </div>
        {/*<iframe
          // src={<GetVideos id={d.id} />}
          title="trailer"
          className={onFrame ? "iFrame" : ""}
        />*/}

        <i
          className="far fa-times-circle closeIcon"
          id={onFrame ? "closeVid" : ""}
          onClick={closeVideo}
        />
      </div>
    );

    //console.log(d);

    return content;
  };

  let getData = data && load === false ? returnData() : <p>loading...</p>;
  return getData;
  // return load ? <p>loading...</p> : returnData();
}

export default HeroComponent;
