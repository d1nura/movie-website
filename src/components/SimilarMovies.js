import React, { useContext } from "react";
import { Context } from "./useContext";
import { useHttp } from "../hooks/useHttp";
import { Link } from "react-router-dom";
import "../scss/SimilarMovies.scss";
import loading from "../assets/images/loading.svg";

function SimilarMovies() {
  let i = useContext(Context);
  let [data, load] = useHttp(`movie/${i.id}/similar?`);
  //console.log(data);
  const setSimilarMovies = () => {
    return (
      <div className="SimilarMovies">
        <h2>Similar Movies</h2>
        {data.results.length > 0 ? (
          data.results.slice(0, 6).map((i, l) => {
            return (
              <Link key={l} to={{ pathname: "/" + i.id }}>
                <img
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
    <img alt="loadingAni" src={loading} id="loadingP" />
  );
}

export default SimilarMovies;
