import React, { useContext } from "react";
import { Context } from "./useContext";
import { useHttp } from "../hooks/useHttp";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import "../scss/SimilarMovies.scss";

function SimilarMovies() {
  let i = useContext(Context);
  let [data, load] = useHttp(`movie/${i.id}/similar?`);
  console.log(data);
  const setSimilarMovies = () => {
    return (
      <div className="SimilarMovies">
        <h2>Similar Movies</h2>
        {data.results.length > 0 ? (
          data.results.slice(0, 6).map((i, l) => {
            return (
              <Link to={{ pathname: "/" + i.id }}>
                <img
                  key={l}
                  style={{ width: "12vw" }}
                  id="similarImg"
                  alt="movie posters"
                  src={`https://image.tmdb.org/t/p/w300/${
                    i.poster_path
                  }?api_key=ead55bd575a94d055e5af19545cf3da3`}
                />
              </Link>
            );
          })
        ) : (
          <h3 style={{ marginTop: "4vh", color: "yellow" }}>
            No Similar Movies Found.
          </h3>
        )}
      </div>
    );
  };

  return data && load === false ? (
    setSimilarMovies()
  ) : (
    <p>loading similar movies...</p>
  );
}

export default SimilarMovies;
