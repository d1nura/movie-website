import React from "react";
import "../scss/movieDetailsPage.scss";
import { useHttp } from "../hooks/useHttp";
import { ConvertMins } from "./ConvertMins";
import Reviews from "./Reviews";
import { Context } from "./useContext";
import SimilarMovies from "./SimilarMovies";
import Cast from "./Cast";
import { Link } from "react-router-dom";
import leftarrow from "../assets/images/leftarrow.svg";
import loading from "../assets/images/loading.svg";
//import GetVideos from "./GetVideos";

function MovieDetailsPage({ match }) {
  let [data, load] = useHttp(`movie/${match.params.id}?`);

  const setMoviePage = () => {
    //console.log(data);
    return (
      <div id="setMoviePage">
        <div
          id="coverPic"
          style={{
            background: `url("https://image.tmdb.org/t/p/w1280/${
              data.backdrop_path
            }") no-repeat center/cover`
          }}
        />
        <Link to="/">
          <img
            alt="arrowHome"
            src={leftarrow}
            id="homeArrow"
            style={{
              width: "3.5vw"
            }}
          />
        </Link>

        <div id="detailsSection">
          <h1>{data.title}</h1>
          <p id="tagline">{data.overview}</p>
          <p id="runtime">{ConvertMins(data.runtime)}h</p>
          <span id="dateSpan">
            <p>{[...data.release_date].slice(0, 4)}</p>
            {data.genres.map((i, j) => {
              return (
                <p id="sp" key={j}>
                  {i.name}
                </p>
              );
            })}
          </span>
          <p>
            <span id="rating">
              <sub>{data.vote_average}</sub>
            </span>
            <sup>/ 10</sup>
          </p>
        </div>

        <Context.Provider value={{ id: match.params.id }}>
          <Cast />
          <Reviews />
          <SimilarMovies />
        </Context.Provider>
      </div>
    );
  };

  // let m =
  return data && load === false ? (
    setMoviePage()
  ) : (
    <div id="loadingP">
      <img alt="loadingAni" src={loading} id="loadingP" />
    </div>
  );
}

export default MovieDetailsPage;
