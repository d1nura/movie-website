import React from "react";
import { useHttp } from "../hooks/useHttp";
import "../css/MovieSet/movieSet.scss";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import MovieDetailsPage from "./MovieDetailsPage";

function MovieSet() {
  let [data, load] = useHttp("movie/popular?");

  const setPopular = () => {
    let d = data.results.slice(1, data.results.length);

    let content = (
      <Router>
        <div id="movieSet">
          <div id="imgGrid">
            {d.map((i, p) => {
              return (
                <div key={p} id="divImg">
                  <Link to={{ pathname: "/" + i.id }}>
                    <img
                      id="movieImgID"
                      alt="movie posters"
                      src={`https://image.tmdb.org/t/p/w500/${
                        i.poster_path
                      }?api_key=ead55bd575a94d055e5af19545cf3da3`}
                    />
                  </Link>
                  <p id="vAvg">{parseFloat(i.vote_average).toFixed(1)}</p>
                  <p>{i.title}</p>
                  <p id="date">{[...i.release_date].slice(0, 4)}</p>
                </div>
              );
            })}
          </div>
          <Route path={"/:id"} component={MovieDetailsPage} />
        </div>
      </Router>
    );
    return content;
  };

  let popData =
    data && load === false ? (
      setPopular()
    ) : (
      <p style={{ color: "red" }}>loading...</p>
    );
  return popData;
}

export default MovieSet;

/*<img
id="movieImgID"
alt="movie posters"
src={`https://image.tmdb.org/t/p/w500/${
  i.poster_path
}?api_key=ead55bd575a94d055e5af19545cf3da3`}
/>*/
