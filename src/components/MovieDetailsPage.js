import React from "react";
import "../scss/movieDetailsPage.scss";
import { useHttp } from "../hooks/useHttp";
import { ConvertMins } from "./ConvertMins";
import Reviews from "./Reviews";
import { Context } from "./useContext";
import SimilarMovies from "./SimilarMovies";
import Cast from "./Cast";

function MovieDetailsPage({ match }) {
  let [data, load] = useHttp(`movie/${match.params.id}?`);

  const setMoviePage = () => {
    console.log(data);

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
        <div id="detailsSection">
          <a href="/">home</a>
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
  if (data && load === false) {
    return setMoviePage();
  } else {
    return (
      <div id="loadingP">
        <p>loading...</p>
      </div>
    );
  }
}

export default MovieDetailsPage;
