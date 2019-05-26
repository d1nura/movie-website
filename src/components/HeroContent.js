import React, { useState, useContext } from "react";
//import { useHttp } from "../hooks/useHttp";
import "../scss/HeroContent.scss";
import { SelectImgUrl } from "./SelectImgUrl";
import GenreSelector from "./GenreSelector";
import MovieDetailsSelector from "./MovieDetailsSelector";
import { PageContext } from "../components/PageContext";

function HeroComponent() {
  let getContext = useContext(PageContext);
  //let [data, load] = useHttp("discover/movie?sort_by=popularity.desc&");
  let [onFrame, setOnFrame] = useState(false);
  //console.log(data);

  const turnOniFrame = () => {
    setOnFrame(true);
    return null;
  };
  const closeVideo = () => {
    setOnFrame(false);
  };

  //console.log(pC);

  const returnData = () => {
    let d = getContext.results.slice(0, 1)[0];
    let imgUrl = SelectImgUrl("w1280/" + d.backdrop_path);

    const content = (
      <div id="hero">
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

          <h1>
            {d.title}{" "}
            <span id="runtime">
              <MovieDetailsSelector getId={d.id} setDetails="runtime" />
            </span>
          </h1>

          <p id="watchTrailer" onClick={turnOniFrame}>
            <i className="fas fa-play-circle" />
            Read More
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
    return content;
  };

  return returnData();
}

export default HeroComponent;
